import React, {useState, useEffect}  from 'react'
import { useHistory } from 'react-router-dom'
import Imagem from './download.png'
import {DivLoginDad, H1, Nav, Ul, Li, HeaderHomePage, Paragraph, 
RocketImgHome, FormLoginAply,
LabelFormLogin, DivButtonLogin,
ButtonLogin, TextAreaForm, RocketImg, DivCreateForm, DivFormCreateTrips, FormLogin, DivLogoLogin, InputForm, ButtonLoginBackHome} from './styles'
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-flavio-turing/trips"
const axiosConfig = {
  headers: {
    auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0'
  }
 }

const CreateTripPage = () => {

  const [trips, setTrips] = useState([])
  const [name, setName] = useState("")
  const [planet, setPlanet] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [durationInDays, setDurationInDays] = useState("")
  const [id, setId] = useState("")

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangePlanet = e => {
    setPlanet(e.target.value)
  }

  const onChangeDate = e => {
    setDate(e.target.value)
  }

  const onChangeDescription = e => {
    setDescription(e.target.value)
  }

  const onChangeDurationInDays = e => {
    setDurationInDays(e.target.value)
  }

  const createTrips = (event) => {
    event.preventDefault()
    const formatDate = new Date(date)
    const body = {
      name: name,
      planet: planet,
      date: formatDate.toLocaleDateString('en-GB', {day: 'numeric', month: 'numeric', year: '2-digit'}),
      description: description,
      durationInDays: durationInDays,
      id: id
    }
    axios.post(`${baseUrl}`, 
    body,
    axiosConfig)
    .then(response => {
      console.log(response.data.trip)
     setTrips(response.data.trip)
     alert("Create trip was sucess")
    })
    .catch(error => {
      alert("Create trip was failed")
      console.log(error.message)
    })
  }

  const history = useHistory()

  const goToHomePage = () => {
    history.push("/admHomePage")
  } 


  const goToAplicationFormPage = () => {
    history.push("/formPage")
  }



  return (
    <DivLoginDad>      
            <ButtonLoginBackHome onClick={goToHomePage}>Back to Home</ButtonLoginBackHome>
      <DivCreateForm>
        <DivLogoLogin>
          <RocketImg src={Imagem} alt="rocket"/>
          <h1>Labex</h1>
          <p>"Find the best space travel!"</p>
        </DivLogoLogin>
        <DivFormCreateTrips>
          <FormLoginAply onSubmit={createTrips}>

            <LabelFormLogin for="name">Name: </LabelFormLogin>
            <InputForm type="text" id="name" name="name" pattern={"[/^(d{2})-?([a-zA-Z]{3})-?(d{6})-?(d{2})-?(d{1,4})$/]"} value={name} placeholder="Type your name" onChange={onChangeName}/>

            <LabelFormLogin for="planet"> Planet: </LabelFormLogin>
            <InputForm type="text" id="planet"  name="planet" value={planet} placeholder="Type your planet" onChange={onChangePlanet}/>

            <LabelFormLogin for="description">Description: </LabelFormLogin>
            <TextAreaForm type="text" id="description" name="description" max="100" value={description} placeholder="Type your description" cols="30" rows="5" onChange={onChangeDescription}/>

            <LabelFormLogin for="date">Date: </LabelFormLogin>
            <InputForm type="date" id="date" name="date" value={date} placeholder="Type your profession" onChange={onChangeDate}/>

            <LabelFormLogin for="durationInDays">Duration In Days: </LabelFormLogin>
            <InputForm type="number" id="durationInDays" name="durationInDays" value={durationInDays} placeholder=" durationInDays" onChange={onChangeDurationInDays}/>

            <DivButtonLogin>
            <ButtonLogin><strong>Create Trip</strong></ButtonLogin>
          </DivButtonLogin>
          </FormLoginAply>
         
        </DivFormCreateTrips>
      </DivCreateForm>

    </DivLoginDad>
  )
}

export default CreateTripPage