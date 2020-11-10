import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import Imagem from './download.png'
import {RocketImg, DivLogin, DivFormLogin, FormLogin,
LabelFormLogin, DivLogoLogin, InputForm, DivButtonLogin,
ButtonLogin, ButtonLoginBackHome, DivLoginDad, Select} from './styles'


const baseUrlCreate = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lais-flavio-turing/signup"


const CreateAccountPage = () => {
  const history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onChangeEmail = event => {
    setEmail(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }


  const createLogin = (event) => {
    event.preventDefault()
    const body = {
      email: email,
      password: password
    }
    if(body.email.indexOf('adm') || body.email.indexOf('revisor')) {
      axios.post(`${baseUrlCreate}`, body)
      .then(response => {
        history.push("/login")
        alert("Sucess create account")
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.message)
        alert("Failed create account")
      })
    }else{
      axios.post(`${baseUrlCreate}`, body)
      .then(response => {
        history.push("/login")
        alert("Sucess create account")
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.message)
        alert("Failed create account")
      })
    }
    
  }


  const goToBackHome = () => {
    history.push('/home')
  }

  return (
    <DivLoginDad>
      <ButtonLoginBackHome onClick={goToBackHome}>Back to Home</ButtonLoginBackHome>
      <DivLogin>
        <DivLogoLogin>
          <RocketImg src={Imagem} alt="rocket"/>
          <h1>Labex</h1>
          <p>"Find the best space travel!"</p>
        </DivLogoLogin>
        <DivFormLogin>
          <FormLogin onSubmit={createLogin}>
            <LabelFormLogin for="email">Email: </LabelFormLogin>
            <InputForm type="text" id="email" className="email" value={email} placeholder="Type your name" onChange={onChangeEmail} required/>
            <LabelFormLogin for="password">Password: </LabelFormLogin>
            <InputForm type="password" id="password" className="password" value={password} placeholder="Type your e-mail" onChange={onChangePassword} required/>

            <Select name="nivel" id="nivel" form="nivelForm" required>
              <option value="select nivel">* Select nível</option>
              <option value="adm">Administrador</option>
              <option value="revisor">Revisor</option>
            </Select>
            <DivButtonLogin>
            <ButtonLogin><strong>Create an Account</strong></ButtonLogin>
          </DivButtonLogin>
          </FormLogin>

        </DivFormLogin>
      </DivLogin>
      
    </DivLoginDad>
  )
}

export default CreateAccountPage