import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topbar from './Topbar';
import ProfileStyle from "../styles/Profile.module.css"
import Cookies from 'js-cookie';

const Profile: React.FC = () => {
  const userId = Cookies.get('userId');
  if(userId){

    const [userData, setUserData] = useState<any>(null);
    const [profileData, setProfileData] = useState<any>(null);

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/users/${userId}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserData();
    }, []);

    useEffect(() => {
      const fetchProfileData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/users/profile/${userId}`);
          setProfileData(response.data);
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      };

      fetchProfileData();
    }, []);

    /*
    //Format birthday
    var originalDate = new Date(profileData.birthday);
    var day = originalDate.getDate().toString().padStart(2, '0');
    var month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    var year = originalDate.getFullYear();

    const formattedBirthDay = `${day}-${month}-${year}`;

    //Format register date
    originalDate = new Date(userData.registerDate);
    day = originalDate.getDate().toString().padStart(2, '0');
    month = (originalDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    year = originalDate.getFullYear();
    var hours = originalDate.getHours().toString().padStart(2, '0');
    var minutes = originalDate.getMinutes().toString().padStart(2, '0');
    var seconds = originalDate.getSeconds().toString().padStart(2, '0');

    const formattedRegisterDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    */

    return (
      <>
      <Topbar isMedicinePage />
      <div className={ProfileStyle.info_wrapper}>
        {userData ? (
          <div>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Register Date: {userData.registerDate /*formattedRegisterDate*/}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
        {profileData ? (
          <div>
            <p>Nickname: {profileData.nickname}</p>
            <p>Birthday: {profileData.birthday /*formattedBirthDay*/}</p>
            <p>Weight: {profileData.weight} kg</p>
            <p>Height: {profileData.height} cm</p>
            <p>Gender: {profileData.gender}</p>
          </div>
        ) : (
          <p>Loading profile data...</p>
        )}
      </div>
      </>
    );
  }else{
    window.location.href = '/';
  }
};

export default Profile;
