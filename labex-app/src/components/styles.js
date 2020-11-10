import styled from 'styled-components'

export const DivLoginDad = styled.div`
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 list-style: none;
 color: black;
`
export const DivHomeDad = styled.div`
 font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 list-style: none;
 color: black;
 display: flex;
 flex-direction: column;
 justify-content: center;
 margin-top: 25vh;
`

export const HeaderHomePage = styled.header`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #c4c2c2;
  position: absolute;
  width: 98.9vw;
  transition: top 0.3s;
  top: 0;
`


export const H1 = styled.h1`
  margin: 20px;
`
export const H1Home = styled.h1`
  margin: 0 auto;
  margin-bottom: 80px;
  background: #5D1049;
  color: #FFF;
  padding: 16px;
  border: 1px solid #5D1049;
  border-radius: 8px;
`
export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: initial;
`

export const Nav = styled.nav`
  display: flex;
  margin: 10px;
`

export const Ul = styled.ul`
display: flex;
margin: 0;
padding: 0;
`

export const Li = styled.li`
  list-style: none;
  margin-top: 25px;
  padding: 16px;
  font-size: 16px;
  background: #1A1A1A;
  border-radius: 8px;
  color: #FFF;
  height: 24px;
  width: 60px;
  text-align: center;
  :hover{
    text-align: center;
   background: #5D1049;
    cursor: pointer;
  }
`

export const DivLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12%;
`
export const DivCreateForm = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4%;
`

export const DivLoginAplication = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4%;
`

export const DivLogoLogin = styled.div`
  margin-right: 150px;
`
export const InputForm = styled.input`
  width: 500px;
  height: 35px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #999999;
  outline: none;
  margin: 4px;
`

export const TextAreaForm = styled.textarea`
  width: 500px;
  height: 35px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #999999;
  outline: none;
  margin: 4px;
  resize: none;
  overflow: auto;
`

export const DivFormLogin = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFF;
  color: #1A1A1A;
  max-width: 600px;
  border: 2px solid #5D1049;
  padding: 16px;
`
export const DivFormCreateTrips = styled.div`
  display: flex;
  flex-direction: column;
  background: #FFF;
  color: #1A1A1A;
  max-width: 600px;
  border: 2px solid #5D1049;
  padding: 16px;
  margin: 0;
`

export const DivButtonLogin = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`

export const ButtonLogin = styled.button`
  outline: none;
  width: 200px;
  height: 50px;
  background: #5D1049;
  margin-right: 16px;
  color: #FFF;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 16px;
`
export const ButtonLoginBackHome = styled.button`
  outline: none;
  width: 200px;
  height: 50px;
  background: #1A1A1A;
  margin: 50px 50px;
  color: #FFF;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  :hover{
    background: #5D1049;
  }
`

export const ButtonAply = styled.button`
  outline: none;
  width: 100px;
  height: 50px;
  background: #1A1A1A;
  color: #FFF;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: auto;
  :hover {
    background: #5D1049;
  }

`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  padding:16px;
`

export const FormLoginAply = styled.form`
  display: flex;
  flex-direction: column;
  padding:16px;
  max-width: 600px;
`

export const LabelFormLogin = styled.label`
  font-size: 16px;
  font-weight: bold;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const Select = styled.select`
  padding: 16px 0;
  color: #999999;
  border: none;
  outline: none;
`

export const RocketImg = styled.img`
  width: 250px;
  height: 250px;
`
export const RocketImgHome = styled.img`
  width: 50px;
  height: 50px;
`

export const MainHome = styled.main`
  width: 400px;
  height: 100vh;
  margin-top: 200px;
  margin: auto;
  text-align: center;
`

export const CardsTrips = styled.div`
  border: 2px solid #5D1049;
  padding: 25px;
  margin-bottom: 16px;
`

export const CardsTripsHome = styled.div`
  width: 310px;
  border: 2px solid #5D1049;
  padding: 25px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  :hover { 
    background: #5D1049;
    color: #FFF;

  }
`
export const ImgLogin = styled.img`
  width: 55px;
  height: 55px;
  display: flex;
  border-radius: 8px;
  :hover { 
   border: 1px solid  #5D1049; 
    border-radius: 8px;
  }
`

export const TitleHome = styled.h2`
  margin-top: 180px;
  text-align: center;
`