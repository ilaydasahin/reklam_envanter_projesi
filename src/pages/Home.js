import React from 'react'
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>GİRİŞ</h2>
        <h1>Merhaba,giriş yap veya hesap oluştur, indirimleri kaçırma!</h1>
        <div className='prompt'>
          <p>deneme</p>
           <LinkedInIcon/>
           <EmailIcon/>
           <GitHubIcon/>
        </div>
      </div>
      <div className='skills'>
        <h1>baslik deneme</h1>
        <ol className='list'>
          <li className='item'>
              <h2>deneme</h2>
              <span>deneme</span>
          </li>
          <li className='item'>
              <h2>deneme</h2>
              <span> deneme</span>
          </li>
          <li className='item'>
              <h2>deneme</h2>
              <span>deneme</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home