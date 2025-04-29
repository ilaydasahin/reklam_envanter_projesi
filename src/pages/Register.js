import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form doğrulama
    if (!name || !email || !password || !confirmPassword) {
      setError('Lütfen tüm alanları doldurun');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Şifreler eşleşmiyor');
      return;
    }
    
    // LocalStorage'dan mevcut kullanıcıları al
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // E-posta adresi zaten kullanılıyor mu kontrol et
    if (users.some(user => user.email === email)) {
      setError('Bu e-posta adresi zaten kullanılıyor');
      return;
    }
    
    // Yeni kullanıcıyı ekle
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Kullanıcıyı giriş sayfasına yönlendir
    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-form-container">
        <h1>Kaydol</h1>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınızı ve soyadınızı girin"
            />
          </div>
          
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
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Şifre Tekrar</label>
            <input 
              type="password" 
              id="confirmPassword" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Şifrenizi tekrar girin"
            />
          </div>
          
          <button type="submit" className="register-button">Kaydol</button>
        </form>
        
        <div className="login-link">
          <p>Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;