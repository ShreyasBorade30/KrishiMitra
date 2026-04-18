import React from 'react'
import './ProfilePage.scss'
import Profile from '../../components/profile/Profile.jsx'
import UpdateFarmerProfileButton from '../../components/UpdateFarmerProfileButton/UpdateFarmerProfileButton.jsx'
import AddFarmerProfile from '../../components/addProfile/AddProfile.jsx'

const ProfilePage = () => {
  return (
    <div className='profile-page-container'>
        <Profile/>
        <UpdateFarmerProfileButton/>
    </div>
  )
}

export default ProfilePage