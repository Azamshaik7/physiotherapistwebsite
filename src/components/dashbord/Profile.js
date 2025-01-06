import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const [appointments, setAppointments] = useState([]);
  const [error, setError] = useState('');
  const [userName, setUserName] = useState(''); // To store the user's name
  const navigate = useNavigate();

  // Fetch user details and appointments on component load
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You are not logged in.');
        return;
      }
    
      try {
        const response = await axios.get(
          'https://physiotherapy-backend1.onrender.com/api/auth/getUserDetails',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        
        // Capitalize the first letter of the user's name
        const name = response.data.name;
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
        setUserName(formattedName);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch user data.');
      }
    };
    

    const fetchAppointments = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('You are not logged in.');
          return;
        }

        const response = await axios.get(
          'https://physiotherapy-backend1.onrender.com/api/auth/getAppointments',
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setAppointments(response.data); // Set appointments
      } catch (err) {
        console.error(err);
        setError('Failed to fetch appointments.');
      }
    };

    fetchUserData();
    fetchAppointments();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/sign-in');
  };

  const formatDateTime = (isoString) => {
    const dateObj = new Date(isoString);
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { date, time };
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return { backgroundColor: 'orange', color: 'white' };
      case 'Confirmed':
        return { backgroundColor: 'green', color: 'white' };
      case 'Cancelled':
        return { backgroundColor: 'red', color: 'white' };
      default:
        return {};
    }
  };

  return (
    <div className="page">
      <main className="main-content">
        <div className="header">
          <div className="greeting">
            <h1>Good Morning, {userName}!</h1>
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
                {userName}
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" onClick={handleLogout} href="#">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Card */}
        <div className="highlight-card">
          <h2>Find the best doctors with Health Care</h2>
          <p>Appoint the doctors and get the finest medical services.</p>
        </div>

        {/* Appointments Table */}
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
                appointments.map((appointment, index) => {
                  const { date, time } = formatDateTime(appointment.date);
                  return (
                    <tr key={index}>
                      <td>{appointment.doctors}</td>
                      <td>{appointment.service}</td>
                      <td>{date}</td>
                      <td>{time}</td>
                      <td>
                        <span
                          style={{
                            ...getStatusStyle(appointment.status),
                            padding: '5px',
                            borderRadius: '5px',
                          }}
                        >
                          {appointment.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
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
