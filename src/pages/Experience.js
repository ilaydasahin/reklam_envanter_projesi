// import React from "react";
// import SchoolIcon from "@mui/icons-material/School";
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

// function Experience() {
//   return (
//     <div className="expContainer">
//       <div className="expElements">
//         <ol>
//           <li>
//             <SchoolIcon/>
//             <h3>deneme</h3>
//             <p>deneme</p>
//           </li>
//           <li>
//             <SchoolIcon/>
//             <h3>deneme</h3>
//             <p>deneme</p>
//           </li>
//           <li>
//             <BusinessCenterIcon/>
//             <h3>deneme</h3>
//             <p>deneme</p>
//           </li>
//           <li>
//             <QuestionMarkIcon/>
//             <h3>deneme</h3>
//             <p>deneme</p>
//           </li>
//         </ol>
//       </div>
//     </div>
//   );
// }

// export default Experience;
// hakkımızda güncel hali 


import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import VisionIcon from '@mui/icons-material/Visibility';
import MissionIcon from '@mui/icons-material/Flag';
import ValueIcon from '@mui/icons-material/Diamond';
import ServiceIcon from '@mui/icons-material/Handshake';
import PartnersIcon from '@mui/icons-material/People';
import ContactIcon from '@mui/icons-material/ContactMail';
import EcosystemIcon from '@mui/icons-material/Public';

function Experience() {
  const [activeTab, setActiveTab] = useState('bizKimiz');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about-container">
      <h1 className="about-title">HAKKIMIZDA</h1>
      
      <div className="about-tabs">
        <div 
          className={`about-tab ${activeTab === 'bizKimiz' ? 'active' : ''}`}
          onClick={() => handleTabChange('bizKimiz')}
        >
          <BusinessCenterIcon />
          <span>Biz Kimiz?</span>
        </div>
        <div 
          className={`about-tab ${activeTab === 'neYapiyoruz' ? 'active' : ''}`}
          onClick={() => handleTabChange('neYapiyoruz')}
        >
          <QuestionMarkIcon />
          <span>Ne Yapıyoruz?</span>
        </div>
        <div 
          className={`about-tab ${activeTab === 'hizmetler' ? 'active' : ''}`}
          onClick={() => handleTabChange('hizmetler')}
        >
          <ServiceIcon />
          <span>Sunduğumuz Hizmetler</span>
        </div>
        <div 
          className={`about-tab ${activeTab === 'ortaklar' ? 'active' : ''}`}
          onClick={() => handleTabChange('ortaklar')}
        >
          <PartnersIcon />
          <span>İş Ortaklarımız</span>
        </div>
        <div 
          className={`about-tab ${activeTab === 'iletisim' ? 'active' : ''}`}
          onClick={() => handleTabChange('iletisim')}
        >
          <ContactIcon />
          <span>Bize Ulaşın</span>
        </div>
      </div>

      <div className="about-content">
        {activeTab === 'bizKimiz' && (
          <div className="about-section">
            <h2>Biz Kimiz?</h2>
            <p>ADZİE olarak, 2020 yılından bu yana müşterilerimizin dijital dünyada başarılı olmaları için çözümler sunuyoruz. Teknoloji ve tasarımı bir araya getirerek, markaların dijital varlıklarını güçlendiriyoruz.</p>
            
            <div className="about-subsection">
              <h3><BusinessCenterIcon /> Faaliyet Alanları</h3>
              <p>Web tasarım, mobil uygulama geliştirme, dijital pazarlama ve e-ticaret çözümleri alanlarında faaliyet gösteriyoruz.</p>
            </div>
            
            <div className="about-subsection">
              <h3><EcosystemIcon /> Ekosistem</h3>
              <p>Müşterilerimiz, çalışanlarımız ve teknoloji ortaklarımızla birlikte sürdürülebilir bir ekosistem oluşturuyoruz.</p>
            </div>
            
            <div className="about-subsection">
              <h3><VisionIcon /> Vizyonumuz</h3>
              <p>Dijital dünyada öncü çözümler sunan, yenilikçi ve güvenilir bir teknoloji şirketi olmak.</p>
            </div>
            
            <div className="about-subsection">
              <h3><MissionIcon /> Misyonumuz</h3>
              <p>Müşterilerimizin dijital dönüşümünü hızlandırmak ve rekabet avantajı sağlamak için yenilikçi çözümler sunmak.</p>
            </div>
            
            <div className="about-subsection">
              <h3><ValueIcon /> Değerlerimiz</h3>
              <ul>
                <li>Yenilikçilik</li>
                <li>Güvenilirlik</li>
                <li>Müşteri Odaklılık</li>
                <li>Kalite</li>
                <li>Sürdürülebilirlik</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'neYapiyoruz' && (
          <div className="about-section">
            <h2>Ne Yapıyoruz?</h2>
            <p>ADZİE olarak, işletmelerin dijital dönüşümünü hızlandırmak için çeşitli teknoloji çözümleri sunuyoruz. Müşterilerimizin ihtiyaçlarına özel olarak tasarlanmış web siteleri, mobil uygulamalar ve e-ticaret platformları geliştiriyoruz.</p>
            <p>Tüm projelerimizde, en yeni teknolojileri kullanarak, kullanıcı dostu ve etkileyici deneyimler oluşturuyoruz. Ayrıca dijital pazarlama stratejileri ile işletmelerin çevrimiçi varlıklarını güçlendiriyoruz.</p>
            <p>Teknik uzmanlığımız ve yaratıcı yaklaşımımız ile her projede müşterilerimizin beklentilerini aşmayı hedefliyoruz.</p>
          </div>
        )}
        
        {activeTab === 'hizmetler' && (
          <div className="about-section">
            <h2>Sunduğumuz Hizmetler</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Web Tasarım ve Geliştirme</h3>
                <p>Modern, duyarlı ve kullanıcı dostu web siteleri tasarlıyor ve geliştiriyoruz.</p>
              </div>
              <div className="service-card">
                <h3>Mobil Uygulama Geliştirme</h3>
                <p>iOS ve Android platformları için yenilikçi ve performanslı mobil uygulamalar geliştiriyoruz.</p>
              </div>
              <div className="service-card">
                <h3>E-Ticaret Çözümleri</h3>
                <p>İşletmelerin çevrimiçi satış yapabilmesi için özelleştirilmiş e-ticaret platformları sunuyoruz.</p>
              </div>
              <div className="service-card">
                <h3>Dijital Pazarlama</h3>
                <p>SEO, SEM, sosyal medya pazarlaması ve içerik pazarlaması ile dijital varlığınızı güçlendiriyoruz.</p>
              </div>
              <div className="service-card">
                <h3>Kurumsal Kimlik Tasarımı</h3>
                <p>Logo, kartvizit, broşür ve diğer kurumsal kimlik elemanları tasarlıyoruz.</p>
              </div>
              <div className="service-card">
                <h3>Dijital Danışmanlık</h3>
                <p>İşletmelerin dijital stratejilerini geliştirmelerine yardımcı oluyoruz.</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'ortaklar' && (
          <div className="about-section">
            <h2>İş Ortaklarımız</h2>
            <p>ADZİE olarak, sektörünün önde gelen firmalarıyla iş birliği yaparak müşterilerimize en iyi hizmeti sunuyoruz.</p>
            <div className="partners-grid">
              <div className="partner-card">
                <div className="partner-logo">Partner Logo</div>
                <h3>Teknoloji Şirketi A</h3>
                <p>Yazılım çözümleri alanında iş ortağımız.</p>
              </div>
              <div className="partner-card">
                <div className="partner-logo">Partner Logo</div>
                <h3>Tasarım Stüdyosu B</h3>
                <p>Yaratıcı tasarım çözümleri için iş ortağımız.</p>
              </div>
              <div className="partner-card">
                <div className="partner-logo">Partner Logo</div>
                <h3>Hosting Firması C</h3>
                <p>Güvenilir hosting hizmetleri için iş ortağımız.</p>
              </div>
              <div className="partner-card">
                <div className="partner-logo">Partner Logo</div>
                <h3>Pazarlama Ajansı D</h3>
                <p>Dijital pazarlama stratejileri için iş ortağımız.</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'iletisim' && (
          <div className="about-section">
            <h2>Bize Ulaşın</h2>
            <p>Projeleriniz veya sorularınız için bize ulaşın.</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <h3>Adres</h3>
                <p>Teknoloji Caddesi, No:123, Dijital Plaza, 34000 İstanbul</p>
              </div>
              <div className="contact-item">
                <h3>Telefon</h3>
                <p>+90 212 123 45 67</p>
              </div>
              <div className="contact-item">
                <h3>E-posta</h3>
                <p>info@adzie.com</p>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>İletişim Formu</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Adınız Soyadınız</label>
                  <input type="text" id="name" placeholder="Adınızı ve soyadınızı girin" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-posta Adresiniz</label>
                  <input type="email" id="email" placeholder="E-posta adresinizi girin" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Mesajınız</label>
                  <textarea id="message" rows="5" placeholder="Mesajınızı girin"></textarea>
                </div>
                <button type="submit" className="submit-button">Gönder</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;