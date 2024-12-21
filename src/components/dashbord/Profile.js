// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirecting
// import './Profile.css';

// function Profile() {
//   const [appointments, setAppointments] = useState([]);
//   const [error, setError] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false); // To toggle the dropdown visibility
//   const navigate = useNavigate(); // Hook to navigate to different pages

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           setError('You are not logged in.');
//           return;
//         }

//         const response = await axios.get('https://physiotherapy-backend1.onrender.com/api/auth/getAppointments', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setAppointments(response.data);
//       } catch (err) {
//         console.error(err);
//         // setError('Failed to load appointments.');
//       }
//     };

//     fetchAppointments();
//   }, []);

//   const handleLogout = () => {
//     // Remove the token from localStorage
//     localStorage.removeItem('token');
    
//     // Redirect to sign-in page
//     navigate('/sign-in');
//   };

//   const formatDateTime = (isoString) => {
//     const dateObj = new Date(isoString);
//     const date = dateObj.toLocaleDateString();
//     const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     return { date, time };
//   };

//   const getStatusStyle = (status) => {
//     switch (status) {
//       case 'Pending':
//         return { backgroundColor: 'orange', color: 'white' };
//       case 'Confirmed':
//         return { backgroundColor: 'green', color: 'white' };
//       case 'Cancelled':
//         return { backgroundColor: 'red', color: 'white' };
//       default:
//         return {};
//     }
//   };

//   return (
//     <div className="page">
//       <main className="main-content">
//         {/* Header */}
//         <div className="header">
//           <div className="greeting">
//             <h1>Good Morning Umair!</h1>
//             <p>How are you feeling today?</p>
//           </div>
//           <div className="profile">
//             <img
//               src="https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg"
//               alt="Profile"
//               className="profile-pic"
//             />
//             <div class="dropdown show">
//               <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Umair Iqbal
//               </a>

//               <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//                 <a class="dropdown-item" onClick={handleLogout} href="#">Logout</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Highlight Card */}
//         <div className="highlight-card">
//           <h2>Find the best doctors with Health Care</h2>
//           <p>Appoint the doctors and get the finest medical services.</p>
//         </div>

//         {/* Appointments Table */}
//         <section className="appointments">
//           <h3>Appointments</h3>
//           {error && <p className="error">{error}</p>}
//           <table>
//             <thead>
//               <tr>
//                 <th>Doctor</th>
//                 <th>Specialization</th>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.length > 0 ? (
//                 appointments.map((appointment, index) => {
//                   const { date, time } = formatDateTime(appointment.date);
//                   return (
//                     <tr key={index}>
//                       <td>{appointment.doctors}</td>
//                       <td>{appointment.service}</td>
//                       <td>{date}</td>
//                       <td>{time}</td>
//                       <td>
//                         <span style={{ ...getStatusStyle(appointment.status), padding: '5px', borderRadius: '5px' }}>
//                           {appointment.status}
//                         </span>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="5">No appointments available.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default Profile;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { decodeToken } from '../utils/tokenUtils';


function decodeToken(token) {
  if (!token) return null;

  try {
    const base64Url = token.split('.')[1]; // Extract the payload part of the token
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Failed to decode token:', error);
    return null;
  }
}

function Profile() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('You are not logged in.');
          return;
        }

        // Decode the token to get user info
        const decoded = decodeToken(token);
        if (decoded && decoded.name) {
          setUserName(decoded.name);
        } else {
          setError('Failed to retrieve user information.');
        }

        const response = await axios.get(
          'https://physiotherapy-backend1.onrender.com/api/auth/getAppointments',
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setAppointments(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load appointments.');
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/sign-in');
  };

  return (
    <div className="page">
      <main className="main-content">
        {/* Header */}
        <div className="header">
          <div className="greeting">
            <h1>Good Morning {userName || 'User'}!</h1>
            <p>How are you feeling today?</p>
          </div>
          <div className="profile">
            <img
              src="https://www.profilebakery.com/wp-content/uploads/2024/05/Profile-picture-created-with-ai.jpeg"
              alt="Profile"
              className="profile-pic"
            />
            <div className="dropdown show">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {userName || 'Profile'}
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" onClick={handleLogout} href="#">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments */}
        <section className="appointments">
          <h3>Appointments</h3>
          {error && <p className="error">{error}</p>}
          <table>
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Specialization</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.doctor}</td>
                    <td>{appointment.service}</td>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No appointments available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Profile;
