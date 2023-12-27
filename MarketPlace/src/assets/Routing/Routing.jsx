import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from '../../Pages/HomePage/HomePage'
import AboutPage from '../../Pages/AboutUsPage/AboutPage'
import CvBankPage from '../../Pages/CvBankPage/CvBankPage'
import FreelancerListPage from '../../Pages/FreelancerListPage/FreelancerListPage'
import FreelancerProfilePage from './../../Pages/FreelancerProfilePage/FreelancerProfilePage';
import GigPage from '../../Pages/GigPage/GigPage'
import HelpCenterPage from '../../Pages/HelpCenterPage/HelpCenterPage'
import JobDetailPage from './../../Pages/JobDetailsPage/JobDetailPage';
import JoblistPage from './../../Pages/JoblistPage/JoblistPage';
import PaymentHistoryPage from './../../Pages/PaymentHistoryPage/PaymentHistoryPage';
import SettingPage from './../../Pages/SettingPage/SettingPage';
import TermsPolicyPage from './../../Pages/TermServicePolicypage/TermsPolicyPage';
import UserProfilePage from './../../Pages/UserProfilePage/UserProfilePage';

export default function Routing() {
  return (
        <Routes>
            <Route path={'/'} element={<HomePage/>} />
            <Route path='/About' element={<AboutPage/>}/>
            <Route path='/Cv-Bank' element={<CvBankPage/>}/>
            <Route path='/Freelancer-List' element={<FreelancerListPage/>}/>
            <Route path='/Freelancer-Profile' element={<FreelancerProfilePage/>}/>
            <Route path='/Gig-page' element={<GigPage/>}/>
            <Route path='/Help-center' element={<HelpCenterPage/>}/>
            <Route path='/Job-Details' element={<JobDetailPage/>}/>
            <Route path='/Job-List' element={<JoblistPage/>}/>
            <Route path='/Payment-History' element={<PaymentHistoryPage/>}/>
            <Route path='/Settings' element={<SettingPage/>}/>
            <Route path='/User-Profile' element={<UserProfilePage/>}/>
            <Route path='/Terms-and-Policy' element={<TermsPolicyPage/>}/>
        </Routes>
  )
}
