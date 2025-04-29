// // pages/projects.js
// import React, { useState } from 'react';
// import ProjectItem from '../components/ProjectItem';
// import { ProjectList } from '../helpers/ProjectList';
// import Modal from '../components/Modal';  // Import the Modal component

// function Projects() {
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility
//   const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product
//   const [products, setProducts] = useState(ProjectList); // State to store products

//   // Function to handle when a product is clicked
//   const handleClick = (product) => {
//     setSelectedProduct(product); // Set the clicked product
//     setShowModal(true); // Show the modal
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null); // Clear the selected product
//   };

//   // Function to delete a product
//   const handleDelete = (productName) => {
//     setProducts(products.filter(product => product.name !== productName)); // Remove the product from the list
//   };

//   return (
//     <div className="projects">
//       <h1>ÜRÜNLER</h1>
//       <div className="projectList">
//         {products.map((project, idx) => (
//           <div key={idx} onClick={() => handleClick(project)}>
//             <ProjectItem name={project.name} image={project.image} />
//           </div>
//         ))}
//       </div>

//       {/* Render the modal if showModal is true */}
//       <Modal show={showModal} onClose={closeModal} product={selectedProduct} onDelete={handleDelete} />
//     </div>
//   );
// }









// export default Projects;
//deneme
// pages/Projects.js
// import React, { useState } from 'react';
// import ProjectItem from '../components/ProjectItem';
// import { ProjectList } from '../helpers/ProjectList';
// import Modal from '../components/Modal';

// function Projects() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [products, setProducts] = useState(ProjectList);

//   // Function to handle when a product is clicked
//   const handleClick = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   };

//   // Function to delete a product
//   const handleDelete = (productName) => {
//     setProducts(products.filter(product => product.name !== productName));
//   };

//   // Function to update a product
//   const handleUpdate = (productName, updatedProduct) => {
//     setProducts(products.map(product => 
//       product.name === productName ? updatedProduct : product
//     ));
//     setSelectedProduct(updatedProduct); // Update the selected product to show the changes
//   };

//   return (
//     <div className="projects">
//       <h1>ÜRÜNLER</h1>
//       <div className="projectList">
//         {products.map((project, idx) => (
//           <div key={idx} onClick={() => handleClick(project)}>
//             <ProjectItem name={project.name} image={project.image} />
//           </div>
//         ))}
//       </div>

//       {/* Render the modal with update functionality */}
//       <Modal 
//         show={showModal} 
//         onClose={closeModal} 
//         product={selectedProduct} 
//         onDelete={handleDelete}
//         onUpdate={handleUpdate} 
//       />
//     </div>
//   );
// }

// export default Projects;
//deneme 
// pages/Projects.js
import React, { useState } from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';
import Modal from '../components/Modal';

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState(ProjectList);
  const [modalMode, setModalMode] = useState('view'); // 'view', 'edit', or 'add'

  // Function to handle when a product is clicked
  const handleClick = (product) => {
    setSelectedProduct(product);
    setModalMode('view');
    setShowModal(true);
  };

  // Function to open modal in add mode
  const handleAddProduct = () => {
    setSelectedProduct(null);
    setModalMode('add');
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setModalMode('view');
  };

  // Function to delete a product
  const handleDelete = (productName) => {
    setProducts(products.filter(product => product.name !== productName));
  };

  // Function to update a product
  const handleUpdate = (productName, updatedProduct) => {
    setProducts(products.map(product => 
      product.name === productName ? updatedProduct : product
    ));
    setSelectedProduct(updatedProduct); // Update the selected product to show the changes
  };

  // Function to add a new product
  const handleAdd = (newProduct) => {
    // Check if product name already exists
    if (products.some(product => product.name === newProduct.name)) {
      alert('Bu isimde bir ürün zaten var!');
      return;
    }
    
    setProducts([...products, newProduct]);
  };

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>ÜRÜNLER</h1>
        <button className="add-product-btn" onClick={handleAddProduct}>
          + Yeni Ürün Ekle
        </button>
      </div>
      
      <div className="projectList">
        {products.map((project, idx) => (
          <div key={idx} onClick={() => handleClick(project)}>
            <ProjectItem name={project.name} image={project.image} />
          </div>
        ))}
      </div>

      {/* Render the modal with all functionalities */}
      <Modal 
        show={showModal} 
        onClose={closeModal} 
        product={selectedProduct} 
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        onAdd={handleAdd}
        mode={modalMode}
      />
    </div>
  );
}

export default Projects;