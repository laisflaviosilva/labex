import React, {useState, useEffect}  from 'react'
import { useHistory } from 'react-router-dom'
import Imagem from './download.png'
import {DivLoginDad, H1, Nav, Ul, Li, HeaderHomePage, Paragraph, 
RocketImgHome, MainHome, CardsTrips, ButtonAply, TitleHome} from './styles'
import axios from 'axios'


const ListTripsPage = () => {

  const [allTrips, setAllTrips] = useState([])
  
useEffect(() => {
 getAllTrips()
}, [])

  const getAllTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-flavio-turing/trips')
    .then(response => {
      console.log(response.data.trips)
      setAllTrips(response.data.trips)
     
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const history = useHistory()

  const goToLoginPage = () => {
    history.push("/login")
  } 


  const goToAplicationFormPage = () => {
    history.push("/formPage")
  }

  const mapTrips = allTrips.map(trip => {
    return <CardsTrips key={trip.id}>
      <h3>{trip.name}</h3>
      <p><strong>Description : </strong> {trip.description}</p>
      <h4>Where are we going? : {trip.planet}</h4>
      <p>how many days? : {trip.durationInDays}</p>
      <p>When? : {trip.date}</p>
      <ButtonAply onClick={() => goToAplicationFormPage(trip.id)}>Apply</ButtonAply>
      </CardsTrips>   
  })


  return (
    <DivLoginDad>      
      <HeaderHomePage id="headerHomePage">
      <H1>Labex <RocketImgHome src={Imagem} alt="rocket"/><br></br><Paragraph>"Find the best space travel!"</Paragraph></H1>
      <Nav>
        <Ul>
          <Li onClick={goToLoginPage}>Login</Li>
        </Ul>
      </Nav>
      </HeaderHomePage>
      <div>
      <TitleHome>Available trips!</TitleHome>
      </div>
      <MainHome>
          {mapTrips}
      </MainHome>
    </DivLoginDad>
  )
}

export default ListTripsPage