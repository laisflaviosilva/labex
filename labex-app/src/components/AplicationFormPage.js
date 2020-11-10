import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import Imagem from './download.png'
import axios from 'axios'
import {RocketImg, DivFormLogin, FormLoginAply,
LabelFormLogin, DivLogoLogin, InputForm, DivButtonLogin,
ButtonLogin, ButtonLoginBackHome, DivLoginDad, DivLoginAplication, TextAreaForm} from './styles'

const token = localStorage.getItem('token')
const AplicationFormPage = () => {

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [applicationText, setApplicationText] = useState("")
  const [profession, setProfession] = useState("")
  const [country, setCountry] = useState("")


  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeAge = e => {
    setAge(e.target.value)
  }

  const onChangeApplicationText = e => {
    setApplicationText(e.target.value)
  }

  const onChangeProfession = e => {
    setProfession(e.target.value)
  }

  const onChangeCountry = e => {
    setCountry(e.target.value)
  }

  const handleFormChange = (event, token) => {
    event.preventDefault()
    const body = {
      id: id,
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-flavio-turing/trips/${token}/apply`, body)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  const history = useHistory()

  const goToBackHome = () => {
    history.push('/listTrips')
  }
  return (
    <DivLoginDad>
      <ButtonLoginBackHome onClick={goToBackHome}>Back to Home</ButtonLoginBackHome>
      <DivLoginAplication>
        <DivLogoLogin>
          <RocketImg src={Imagem} alt="rocket"/>
          <h1>Labex</h1>
          <p>"Find the best space travel!"</p>
        </DivLogoLogin>
        <DivFormLogin>
          <FormLoginAply onSubmit={handleFormChange}>

            <LabelFormLogin for="name">Name: </LabelFormLogin>
            <InputForm type="text" id="name" name="name" pattern={"[A-Za-z]{5,}"} value={name} placeholder="Type your name" onChange={onChangeName}/>

            <LabelFormLogin for="age">Age: </LabelFormLogin>
            <InputForm type="number" id="age" max="100" name="age" value={age} placeholder="Type your age" onChange={onChangeAge}/>

            <LabelFormLogin for="applicationText">ApplicationText: </LabelFormLogin>
            <TextAreaForm type="text" id="applicationText" name="applicationText" value={applicationText} placeholder="Type your description" cols="30" rows="5" onChange={onChangeApplicationText}/>

            <LabelFormLogin for="profession">Profession: </LabelFormLogin>
            <InputForm type="text" id="profession" name="profession" value={profession} placeholder="Type your profession" onChange={onChangeProfession}/>

            <LabelFormLogin for="country">Country: </LabelFormLogin>
            <InputForm type="text" id="country" name="country" value={country} placeholder="Type your country" onChange={onChangeCountry}/>

            <DivButtonLogin>
            <ButtonLogin><strong>Create Trip</strong></ButtonLogin>
          </DivButtonLogin>
          </FormLoginAply>
         
        </DivFormLogin>
      </DivLoginAplication>
      
    </DivLoginDad>
  )
}


export default AplicationFormPage


/*const formatDate = new Date(form.date);
...
"date": formatDate.toLocaleDateString('en-GB', {day: 'numeric', month: 'numeric', year: '2-digit'}),


form.date é a data que estou pegando do formulário
date é objeto que vc tá criando e enviando para o banco
a operação inteira:
const formatDate = new Date(form.date);

    const body = {
      "name": form.name,
      "planet": form.planet,
      "date": formatDate.toLocaleDateString('en-GB', {day: 'numeric', month: 'numeric', year: '2-digit'}),
      "description": form.description,
      "durationInDays": form.durationInDays
    }




*/