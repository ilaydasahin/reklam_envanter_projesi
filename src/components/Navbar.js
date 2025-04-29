// // import React from "react";
// // import { useState,useEffect} from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import ReorderIcon from "@mui/icons-material/Reorder";
// // function Navbar() {
// //   const [expandNavbar, setExpandNavbar] = useState(false);
// //   const location = useLocation();

// //   useEffect(() => {
// //     setExpandNavbar(false);
// //   }, [location]);

// //   return (
// //     <div className="navbar" id={expandNavbar ? "open" : "close"}>
// //       <div className="toggleButton">
// //         <button
// //           onClick={() => {
// //             setExpandNavbar((prev) => !prev);
// //           }}
// //         >
// //           <ReorderIcon />
// //         </button>
// //       </div>
// //       <div className="links">
      
// //       <Link to="/projects">ANASAYFA</Link>
// //         <Link to="/">GİRİŞ YAP</Link>
       
// //         <Link to="/experience">HAKKIMIZDA</Link>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Navbar;
// //deneme
// import React from "react";
// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import ReorderIcon from "@mui/icons-material/Reorder";

// function Navbar() {
//   const [expandNavbar, setExpandNavbar] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setExpandNavbar(false);
//     // LocalStorage'dan kullanıcı bilgilerini kontrol et
//     const user = localStorage.getItem('currentUser');
//     setIsLoggedIn(!!user);
//   }, [location]);

//   const handleLogout = () => {
//     // Kullanıcı çıkış işlemi
//     localStorage.removeItem('currentUser');
//     setIsLoggedIn(false);
//   };

//   return (
//     <div className="navbar" id={expandNavbar ? "open" : "close"}>
//       <div className="toggleButton">
//         <button
//           onClick={() => {
//             setExpandNavbar((prev) => !prev);
//           }}
//         >
//           <ReorderIcon />
//         </button>
//       </div>
//       <div className="links">
//         <Link to="/projects">ANASAYFA</Link>
//         {isLoggedIn ? (
//           <Link to="/" onClick={handleLogout}>ÇIKIŞ YAP</Link>
//         ) : (
//           <>
//             <Link to="/login">GİRİŞ YAP</Link>
//             <Link to="/register">KAYDOL</Link>
//           </>
//         )}
//         <Link to="/experience">HAKKIMIZDA</Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
// //hook reactta bileşenlerin durum  yan etkiler gibi işlevselliğinin yönetilmesini sağlar
// //useState, bileşenin durumunu yönetmek için kullanılır.
// //useEffect, bileşenin yaşam döngüsü boyunca yan etkileri yönetmek için kullanılır.


//hakkımızda değişiklik 
import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
    // LocalStorage'dan kullanıcı bilgilerini kontrol et
    const user = localStorage.getItem('currentUser');
    setIsLoggedIn(!!user);
  }, [location]);

  const handleLogout = () => {
    // Kullanıcı çıkış işlemi
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/projects">ANASAYFA</Link>
        {isLoggedIn ? (
          <Link to="/" onClick={handleLogout}>ÇIKIŞ YAP</Link>
        ) : (
          <>
            <Link to="/login">GİRİŞ YAP</Link>
            <Link to="/register">KAYDOL</Link>
          </>
        )}
        <Link to="/experience">HAKKIMIZDA</Link>
      </div>
    </div>
  );
}

export default Navbar;