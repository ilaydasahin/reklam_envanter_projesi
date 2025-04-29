// // components/Modal.js
// import React from 'react';

// function Modal({ show, onClose, product, onDelete }) {
//   if (!show) return null;  // Don't render anything if show is false

//   const handleOverlayClick = (e) => {
//     // Modal dışına tıklanırsa kapansın
//     onClose();
//   };

//   const handleModalClick = (e) => {
//     // Modal içerisine tıklanırsa, olayın yayılmasını engelle
//     e.stopPropagation();
//   };

//   const handleDelete = () => {
//     // Ürün silme işlemi
//     onDelete(product.name);
//     onClose();
//   };

//   return (
//     <div className="modal-overlay" onClick={handleOverlayClick}>
//       <div className="modal-content" onClick={handleModalClick}>
//         <button onClick={onClose} className="close-btn">X</button>
//         <div className="modal-body">
//           <div className="modal-image">
//             <img src={product.image} alt={product.name} />
//           </div>
//           <div className="modal-info">
//             <h2>{product.name}</h2>
//             <div className="buttons">
//               <button onClick={handleDelete} className="delete-btn">Ürün Sil</button>
//               <button className="update-btn">Ürün Güncelle</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
// deneme
// components/Modal.js
// import React, { useState, useEffect } from 'react';

// function Modal({ show, onClose, product, onDelete, onUpdate, onAdd, mode }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [productName, setProductName] = useState('');
//   const [updatedImage, setUpdatedImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState('');
  
//   // Reset and set up form when modal opens or mode/product changes
//   useEffect(() => {
//     if (mode === 'add') {
//       setProductName('');
//       setPreviewImage('');
//       setIsEditing(true);
//     } else if (product && mode === 'view') {
//       setIsEditing(false);
//       setProductName(product.name);
//       setPreviewImage('');
//     }
//   }, [mode, product, show]);

//   if (!show) return null;  // Don't render anything if show is false

//   const handleOverlayClick = (e) => {
//     // Modal dışına tıklanırsa kapansın
//     onClose();
//   };

//   const handleModalClick = (e) => {
//     // Modal içerisine tıklanırsa, olayın yayılmasını engelle
//     e.stopPropagation();
//   };

//   const handleDelete = () => {
//     // Ürün silme işlemi
//     onDelete(product.name);
//     onClose();
//   };

//   const handleEditMode = () => {
//     setProductName(product.name);
//     setPreviewImage(product.image);
//     setIsEditing(true);
//   };

//   const handleNameChange = (e) => {
//     setProductName(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setUpdatedImage(file);
//       // Create a preview of the selected image
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = () => {
//     // Form validation
//     if (!productName.trim()) {
//       alert('Lütfen ürün adını giriniz');
//       return;
//     }
    
//     if (!previewImage && mode === 'add') {
//       alert('Lütfen bir resim seçiniz');
//       return;
//     }

//     if (mode === 'add') {
//       // Create new product object
//       const newProduct = {
//         name: productName,
//         image: previewImage
//       };
      
//       // Call the onAdd function passed from parent
//       onAdd(newProduct);
//     } else {
//       // For update mode
//       // If no changes were made, just exit edit mode
//       if (productName === product.name && !updatedImage) {
//         setIsEditing(false);
//         return;
//       }

//       // Create updated product object
//       const updatedProduct = {
//         ...product,
//         name: productName,
//         image: previewImage || product.image
//       };

//       // Call the onUpdate function passed from parent
//       onUpdate(product.name, updatedProduct);
//     }
    
//     // Reset states and exit edit mode
//     setIsEditing(false);
//     setUpdatedImage(null);
//     onClose();
//   };

//   const handleCancelEdit = () => {
//     setIsEditing(false);
//     if (mode !== 'add') {
//       setProductName(product?.name || '');
//     }
//     setUpdatedImage(null);
//     setPreviewImage('');
    
//     // If we're in add mode, close the modal on cancel
//     if (mode === 'add') {
//       onClose();
//     }
//   };

//   // Render the form for both editing and adding
//   const renderForm = () => (
//     <div className="modal-edit-form">
//       <h2>{mode === 'add' ? 'Yeni Ürün Ekle' : 'Ürün Güncelle'}</h2>
//       <div className="form-group">
//         <label htmlFor="productName">Ürün İsmi:</label>
//         <input 
//           type="text" 
//           id="productName" 
//           value={productName} 
//           onChange={handleNameChange} 
//           placeholder="Ürün adını giriniz"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="productImage">Ürün Resmi:</label>
//         <input 
//           type="file" 
//           id="productImage" 
//           accept="image/*" 
//           onChange={handleImageChange} 
//         />
//       </div>
//       {previewImage && (
//         <div className="image-preview">
//           <h3>Önizleme:</h3>
//           <img src={previewImage} alt="Önizleme" />
//         </div>
//       )}
//       <div className="buttons">
//         <button onClick={handleCancelEdit} className="cancel-btn">İptal</button>
//         <button onClick={handleSubmit} className="save-btn">
//           {mode === 'add' ? 'Ekle' : 'Kaydet'}
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="modal-overlay" onClick={handleOverlayClick}>
//       <div className="modal-content" onClick={handleModalClick}>
//         <button onClick={onClose} className="close-btn">X</button>
//         <div className="modal-body">
//           {mode === 'add' || isEditing ? (
//             renderForm()
//           ) : (
//             <>
//               <div className="modal-image">
//                 <img src={product.image} alt={product.name} />
//               </div>
//               <div className="modal-info">
//                 <h2>{product.name}</h2>
//                 <div className="buttons">
//                   <button onClick={handleDelete} className="delete-btn">Ürün Sil</button>
//                   <button onClick={handleEditMode} className="update-btn">Ürün Güncelle</button>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;

//deneme ürün ekleme
// components/Modal.js
import React, { useState, useEffect } from 'react';

function Modal({ show, onClose, product, onDelete, onUpdate, onAdd, mode }) {
  const [isEditing, setIsEditing] = useState(false);
  const [productName, setProductName] = useState('');
  const [updatedImage, setUpdatedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  
  // Reset and set up form when modal opens or mode/product changes
  useEffect(() => {
    if (mode === 'add') {
      setProductName('');
      setPreviewImage('');
      setIsEditing(true);
    } else if (product && mode === 'view') {
      setIsEditing(false);
      setProductName(product.name);
      setPreviewImage('');
    }
  }, [mode, product, show]);

  if (!show) return null;  // Don't render anything if show is false

  const handleOverlayClick = (e) => {
    // Modal dışına tıklanırsa kapansın
    onClose();
  };

  const handleModalClick = (e) => {
    // Modal içerisine tıklanırsa, olayın yayılmasını engelle
    e.stopPropagation();
  };

  const handleDelete = () => {
    // Ürün silme işlemi
    onDelete(product.name);
    onClose();
  };

  const handleEditMode = () => {
    setProductName(product.name);
    setPreviewImage(product.image);
    setIsEditing(true);
  };

  const handleNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedImage(file);
      // Create a preview of the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Form validation
    if (!productName.trim()) {
      alert('Lütfen ürün adını giriniz');
      return;
    }
    
    if (!previewImage && mode === 'add') {
      alert('Lütfen bir resim seçiniz');
      return;
    }

    if (mode === 'add') {
      // Create new product object
      const newProduct = {
        name: productName,
        image: previewImage
      };
      
      // Call the onAdd function passed from parent
      onAdd(newProduct);
    } else {
      // For update mode
      // If no changes were made, just exit edit mode
      if (productName === product.name && !updatedImage) {
        setIsEditing(false);
        return;
      }

      // Create updated product object
      const updatedProduct = {
        ...product,
        name: productName,
        image: previewImage || product.image
      };

      // Call the onUpdate function passed from parent
      onUpdate(product.name, updatedProduct);
    }
    
    // Reset states and exit edit mode
    setIsEditing(false);
    setUpdatedImage(null);
    onClose();
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    if (mode !== 'add') {
      setProductName(product?.name || '');
    }
    setUpdatedImage(null);
    setPreviewImage('');
    
    // If we're in add mode, close the modal on cancel
    if (mode === 'add') {
      onClose();
    }
  };

  // Render the form for both editing and adding
  const renderForm = () => (
    <div className="modal-edit-form">
      <h2>{mode === 'add' ? 'Yeni Ürün Ekle' : 'Ürün Güncelle'}</h2>
      <div className="form-group">
        <label htmlFor="productName">Ürün İsmi:</label>
        <input 
          type="text" 
          id="productName" 
          value={productName} 
          onChange={handleNameChange} 
          placeholder="Ürün adını giriniz"
        />
      </div>
      <div className="form-group">
        <label htmlFor="productImage">Ürün Resmi:</label>
        <input 
          type="file" 
          id="productImage" 
          accept="image/*" 
          onChange={handleImageChange} 
        />
      </div>
      {previewImage && (
        <div className="image-preview">
          <h3>Önizleme:</h3>
          <img src={previewImage} alt="Önizleme" />
        </div>
      )}
      <div className="buttons">
        <button onClick={handleCancelEdit} className="cancel-btn">İptal</button>
        <button onClick={handleSubmit} className="save-btn">
          {mode === 'add' ? 'Ekle' : 'Kaydet'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleModalClick}>
        <button onClick={onClose} className="close-btn">X</button>
        <div className="modal-body">
          {mode === 'add' || isEditing ? (
            renderForm()
          ) : (
            <>
              <div className="modal-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="modal-info">
                <h2>{product.name}</h2>
                <div className="buttons">
                  <button onClick={handleDelete} className="delete-btn">Ürün Sil</button>
                  <button onClick={handleEditMode} className="update-btn">Ürün Güncelle</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;