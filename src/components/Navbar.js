// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css';
// import logo from '../images/logo1.jpg';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={`navbarMain ${isOpen ? 'open' : ''}`}>
//       <div className="navbar">
//         <div className="logomain">
//           <Link to="/">
//           <img className="logo" src={logo} alt="Physio Works Logo" />
//           </Link> 
//           <p>Great Indian Physiotherapist</p>
//         </div>
//         <div className="hamburger" onClick={toggleMenu}>
//           ☰
//         </div>
//         <ul className="ulList">
//           <li className='navlist' ><Link to="/" className='activelist'>Home</Link></li> 
//           <li className='navlist'>Online Yoga</li>
//           <li className='navlist'>
//             <Link to='/services' className='activelist'>Services</Link>
//           </li>
//           <li className='navlist'>Healing Stories</li>
//           <li className='navlist'><Link to="/sign-in" className='activelist'>SignIn</Link></li>
//           <li>
//             <Link className='adjust' to="/book-appointment">
//               <button className="btn22">Book an Appointment</button>
//             </Link> 
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './navbar.css';
// import logo from '../images/logo1.jpg';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check if the token exists in localStorage
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true); // User is logged in
//     }
//   }, []); // Empty dependency array means this runs once on component mount

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={`navbarMain ${isOpen ? 'open' : ''}`}>
//       <div className="navbar">
//         <div className="logomain">
//           <Link to="/">
//             <img className="logo" src={logo} alt="Physio Works Logo" />
//           </Link>
//           <p>Great Indian Physiotherapist</p>
//         </div>
//         <div className="hamburger" onClick={toggleMenu}>
//           ☰
//         </div>
//         <ul className="ulList">
//           <li className='navlist'>
//             <Link to="/" className='activelist'>Home</Link>
//           </li>
//           <li className='navlist'>Online Yoga</li>
//           <li className='navlist'>
//             <Link to='/services' className='activelist'>Services</Link>
//           </li>
//           <li className='navlist'>Healing Stories</li>

//           {/* Only show SignIn if the user is not logged in */}
//           {!isLoggedIn && (
//             <li className='navlist'>
//               <Link to="/sign-in" className='activelist'>SignIn</Link>
//             </li>
//           )}

//           <li>
//             <Link className='adjust' to="/book-appointment">
//               <button className="btn22">Book an Appointment</button>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './navbar.css';
// import logo from '../images/logo1.jpg';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // Check if the token exists in localStorage
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true); // User is logged in
//     }
//   }, []); // Empty dependency array means this runs once on component mount

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove token from localStorage
//     setIsLoggedIn(false); // Update the state
//     navigate('/sign-in'); // Redirect to the sign-in page
//   };

//   return (
//     <nav className={`navbarMain ${isOpen ? 'open' : ''}`}>
//       <div className="navbar">
//         <div className="logomain">
//           <Link to="/">
//             <img className="logo" src={logo} alt="Physio Works Logo" />
//           </Link>
//           <p>Great Indian Physiotherapist</p>
//         </div>
//         <div className="hamburger" onClick={toggleMenu}>
//           ☰
//         </div>
//         <ul className="ulList">
//           <li className='navlist'>
//             <Link to="/" className='activelist'>Home</Link>
//           </li>
//           <li className='navlist'>Online Yoga</li>
//           <li className='navlist'>
//             <Link to='/services' className='activelist'>Services</Link>
//           </li>
//           <li className='navlist'>Healing Stories</li>

//           {/* Show SignIn or Logout based on the user's login state */}
//           {!isLoggedIn ? (
//             <li className='navlist'>
//               <Link to="/sign-in" className='activelist'>SignIn</Link>
//             </li>
//           ) : (
//             <li className='navlist'>
//               <Link className='activelist'  onClick={handleLogout}>Logout</Link>
//             </li>
//           )}

//           <li>
//             <Link className='adjust' to="/book-appointment">
//               <button className="btn22">Book an Appointment</button>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './navbar.css';
// import logo from '../images/logo1.jpg';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // Check if the token exists in localStorage
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true); // User is logged in
//     } else {
//       setIsLoggedIn(false); // User is not logged in
//     }
//   }, []); // Empty dependency array means this runs once on component mount

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Remove token from localStorage
//     setIsLoggedIn(false); // Update the state
//     navigate('/sign-in'); // Redirect to the sign-in page
//   };

//   return (
//     <nav className={`navbarMain ${isOpen ? 'open' : ''}`}>
//       <div className="navbar">
//         <div className="logomain">
//           <Link to="/">
//             <img className="logo" src={logo} alt="Physio Works Logo" />
//           </Link>
//           <p>Great Indian Physiotherapist</p>
//         </div>
//         <div className="hamburger" onClick={toggleMenu}>
//           ☰
//         </div>
//         <ul className="ulList">
//           <li className='navlist'>
//             <Link to="/" className='activelist'>Home</Link>
//           </li>
//           <li className='navlist'>Online Yoga</li>
//           <li className='navlist'>
//             <Link to='/services' className='activelist'>Services</Link>
//           </li>
//           <li className='navlist'>Healing Stories</li>

//           {/* Show SignIn or Logout based on the user's login state */}
//           {isLoggedIn ? (
//             <li className='navlist'>
//               <Link className='activelist' onClick={handleLogout}>Logout</Link>
//             </li>
//           ) : (
//             <li className='navlist'>
//               <Link to="/sign-in" className='activelist'>Signin</Link>
//             </li>
//           )}

//           <li>
//             <Link className='adjust' to="/book-appointment">
//               <button className="btn22">Book an Appointment</button>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './navbar.css';
// import logo from '../images/logo1.jpg';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // Check if the token exists in localStorage
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token); // Update login state
//   }, []);

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     navigate('/sign-in');
//   };

//   return (
//     <nav className={`navbarMain ${isOpen ? 'open' : ''}`}>
//       <div className="navbar">
//         <div className="logomain">
//           <Link to="/">
//             <img className="logo" src={logo} alt="Physio Works Logo" />
//           </Link>
//           <p>Great Indian Physiotherapist</p>
//         </div>
//         <div className="hamburger" onClick={toggleMenu}>
//           ☰
//         </div>
//         <ul className="ulList">
//           <li className="navlist">
//             <Link to="/" className="activelist">Home</Link>
//           </li>
//           <li className="navlist">Online Yoga</li>
//           <li className="navlist">
//             <Link to="/services" className="activelist">Services</Link>
//           </li>
//           <li className="navlist">Healing Stories</li>
          
//           {/* Show SignIn or Logout based on the user's login state */}
//           {isLoggedIn ? (
//             <li className="navlist">
//               <Link to="#" className="activelist" onClick={handleLogout}>Logout</Link>
//             </li>
//           ) : (
//             <li className="navlist">
//               <Link to="/sign-in" className="activelist">SignIn</Link>
//             </li>
//           )}

//           <li>
//             <Link className="adjust" to="/book-appointment">
//               <button className="btn22">Book an Appointment</button>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'; // Import the profile icon from react-icons
import './navbar.css';
import logo from '../images/logo1.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/sign-in');
  };

  return (
    <nav className={`navbarMain ${isOpen ? 'open' : ''}`}>
      <div className="navbar">
        <div className="logomain">
          <Link to="/">
            <img className="logo" src={logo} alt="Physio Works Logo" />
          </Link>
          <p>Great Indian Physiotherapist</p>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className="ulList">
          <li className="navlist">
            <Link to="/" className="activelist">Home</Link>
          </li>
          <li className="navlist">Online Yoga</li>
          <li className="navlist">
            <Link to="/services" className="activelist">Services</Link>
          </li>
          <li className="navlist">Healing Stories</li>

          {isLoggedIn ? (
            <li className="navlist">
              <Link className="activelist" onClick={handleLogout}>Logout</Link>
            </li>
          ) : (
            <li className="navlist">
              <Link to="/sign-in" className="activelist">SignIn</Link>
            </li>
          )}

          <li>
            <Link className="adjust" to="/book-appointment">
              <button className="btn22">Book an Appointment</button>
            </Link>
          </li>

          {isLoggedIn && (
            <li className="navlist">
              <Link to="/profile">
                <FaUser className="profile-icon" size={24} /> {/* Profile icon from react-icons */}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
