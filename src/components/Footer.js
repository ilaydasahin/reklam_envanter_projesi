import React from 'react'
//React kütüphanesini içe aktarır.
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//Material UI (MUI) ikon paketi

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <LinkedInIcon/>
        </div>
        <p> &copy; 2025 ADZİE </p>
    </div>
  )
}

export default Footer