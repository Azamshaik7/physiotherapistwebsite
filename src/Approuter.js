// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import BookAppointment from './pages/BookAppointment';
// import Home from './pages/Home';
// import SignIn from './pages/Signin';
// import SignUpForm from './components/SignUpForm';
// import ServicesPage from './pages/ServicesPage';
// import Sidebar from './components/dashbord/Sidebar';
// import App1 from './components/dashbord/App1';

// // Mock function to check authentication
// const isAuthenticated = () => {
//   return localStorage.getItem('token'); // Replace with your actual authentication logic
// };

// // Protected Route Component
// const ProtectedRoute = ({ element: Component }) => {
//   return isAuthenticated() ? Component : <Navigate to="/sign-in" />;
// };

// export default function Approuter() {
//   return (
//     <Router basename="/physiotherapistwebsite">

//       <Routes>
//         <Route path="/" element={<ProtectedRoute element={<Home />} />} />
//         <Route path="/book-appointment" element={<ProtectedRoute element={<BookAppointment />} />} />
//         <Route path="/sign-in" element={<SignIn />} />
//         <Route path="/sign-up" element={<SignUpForm />} />
//         <Route path="/services" element={<ProtectedRoute element={<ServicesPage />} />} />
//         <Route path="/sidebar" element={<ProtectedRoute element={<Sidebar />} />} />
//         <Route path="/dashboard/*" element={<ProtectedRoute element={<App1 />} />} />
//       </Routes>
//     </Router>
//   );
// }




import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import BookAppointment from './pages/BookAppointment';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUpForm from './components/SignUpForm';
import ServicesPage from './pages/ServicesPage';
import Sidebar from './components/dashbord/Sidebar';
import App1 from './components/dashbord/App1';

// Mock function to check authentication
const isAuthenticated = () => {
  return localStorage.getItem('token'); // Check if token exists in localStorage
};

// Protected Route Component
const ProtectedRoute = ({ element: Component }) => {
  return isAuthenticated() ? Component : <Navigate to="/sign-in" />; // Redirect if not authenticated
};

export default function Approuter() {
  useEffect(() => {
    // If user is not logged in, redirect to the sign-in page when the app loads
    if (!isAuthenticated()) {
      window.location.replace('/sign-in');
    }
  }, []);

  return (
    <Router basename="/physiotherapistwebsite">
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/book-appointment" element={<ProtectedRoute element={<BookAppointment />} />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/services" element={<ProtectedRoute element={<ServicesPage />} />} />
        <Route path="/sidebar" element={<ProtectedRoute element={<Sidebar />} />} />
        <Route path="/dashboard/*" element={<ProtectedRoute element={<App1 />} />} />
      </Routes>
    </Router>
  );
}
