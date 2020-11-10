import React, {useState, useEffect}  from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Imagem from './download.png'
import {DivLoginDad, H1, Nav, Ul, Li, HeaderHomePage, Paragraph, 
  RocketImgHome, MainHome, CardsTrips, ButtonAply, TitleHome} from './styles'

  const token = localStorage.getItem('token')
const axiosConfig = {
  headers: {
    auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0'
  }
}
const TripDetailsPage = () => {

  const [allTrips, setAllTrips] = useState([])
  
useEffect(() => {
  getAllCandidates()
}, [])

  const getAllCandidates = (token) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-flavio-turing/trip/${token}`, axiosConfig)
    .then(response => {
      console.log(response.data.trip.candidates)
      setAllTrips(response.data.trip.candidates)
     
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const history = useHistory()

  const goToHomePageAdm = () => {
    history.push("/admHomePage")
  }
  
 
  
  const mapTrips = allTrips.map(trip => {
    return <CardsTrips key={trip.id}>
      <h3>{trip.name}</h3>
      <p><strong>Description : </strong> {trip.applicationText}</p>
      <h4>Profession : {trip.profession}</h4>
      <p>Age : {trip.age}</p>
      <p>Where are from? : {trip.country}</p>
      <ButtonAply onClick={""}>Aprove</ButtonAply>
      <br></br>
      <ButtonAply onClick={""}>Reject</ButtonAply>
      </CardsTrips>   
  })

  return (
    <DivLoginDad>      
      <HeaderHomePage id="headerHomePage">
      <H1>Labex <RocketImgHome src={Imagem} alt="rocket"/><br></br><Paragraph>"Find the best space travel!"</Paragraph></H1>
      <Nav>
        <Ul>
          <Li onClick={goToHomePageAdm}>Back to Home</Li>
        </Ul>
      </Nav>
      </HeaderHomePage>
      <div>
      <TitleHome>Trips details!</TitleHome>
      </div>
      <MainHome>
          {mapTrips}
      </MainHome>
    </DivLoginDad>
  )
}

export default TripDetailsPage