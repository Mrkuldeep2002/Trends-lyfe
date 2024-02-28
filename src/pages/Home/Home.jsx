import React, { useEffect } from 'react'
import Navbar from '../../components/header/TopNav'
import Footer from '../../components/footer/Footer'
import FooterG from '../../components/footer/FooterG'
import { Box } from '@chakra-ui/react'
import Nav from '../../components/header/Navbar'
import Slider from '../../CommanPage/Slider'
import WidgetPage from '../../CommanPage/WidgetPage'
import BestSeller from '../../components/BestSeller/BestSeller'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../firebase'

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    }, [user, loading]);
  return (
    <div>
      
      <Nav/>
      <WidgetPage />
      <BestSeller />
      <Slider/>
      <FooterG/>
    </div>
  )
}

export default Home
