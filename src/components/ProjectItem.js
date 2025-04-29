// components/ProjectItem.js
import React from 'react';

function ProjectItem({ image, name }) {
  return (
    <div className="projectItem">
      <div className="picture">
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
//react özelliği
//jsx yapısı ile javascript içine html gönderilir
//görseli ve adını alan propları tanımlar
//image ve name gibi iki prop alır ve bunları kullanarak bir proje öğesi oluşturur.
