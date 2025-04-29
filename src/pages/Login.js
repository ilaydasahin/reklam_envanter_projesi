import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basit form doğrulama
    if (!email || !password) {
      setError('Lütfen tüm alanları doldurun');
      return;
    }
    
    // LocalStorage'dan kullanıcı bilgilerini al
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Kullanıcı var, oturum bilgisini sakla
      localStorage.setItem('currentUser', JSON.stringify(user));
      // Anasayfaya yönlendir
      navigate('/projects');
    } else {
      setError('E-posta veya şifre hatalı');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h1>Giriş Yap</h1>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresinizi girin"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifrenizi girin"
            />
          </div>
          
          <button type="submit" className="login-button">Giriş Yap</button>
        </form>
        
        <div className="register-link">
          <p>Hesabınız yok mu? <Link to="/register">Kaydol</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;