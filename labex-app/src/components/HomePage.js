import React, {useState, useEffect}  from 'react'
import { useHistory } from 'react-router-dom'
import LoginImg from './login.png'
import TripImg from './download.png'

import {DivHomeDad, H1Home, Nav, Ul, Li, HeaderHomePage, Paragraph, 
RocketImgHome, MainHome, CardsTripsHome, ButtonAply, TitleHome, ImgLogin} from './styles'
import axios from 'axios'


const HomePage = () => {

  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/login")
  }
  const goToListTripsPage = () => {
    history.push("/listTrips")
  } 

  return (
    <DivHomeDad>
      <H1Home>Labex</H1Home>
      <CardsTripsHome onClick={goToListTripsPage}>
        <h2>View available trips</h2>
        <ImgLogin src={TripImg} alt="" />
      </CardsTripsHome>
      <CardsTripsHome onClick={goToLoginPage}>
        <h2>Login</h2>
        <ImgLogin src={LoginImg} alt="" />
      </CardsTripsHome> 
    </DivHomeDad>
  )
}

export default HomePage