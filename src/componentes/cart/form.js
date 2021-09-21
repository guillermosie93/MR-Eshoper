import { useState } from "react/cjs/react.development";

export const FormCart = ()=>{
const [snState, setSnstate] = useState(true)
const [dniState, setDnistate] = useState(true)
const [mailState, setMailstate] = useState(true)
const [btnDisable, setBtnstate] = useState(true)
const [buttonClicked, setbuttonClicked] = useState(false)


    function verificName(e){
        let name = e.target.value.length;
       name >= 3? setSnstate(false) : <span>*campo obligatorio</span>
    }
    function verificSurname(e){
        let surname = e.target.value.length;
        surname >= 3 ? setDnistate(false) : <span>*campo obligatorio</span>
    }
    function verificDni(e){
        let dni = e.target.value.length;
        dni >= 7? setMailstate(false) : <span>*campo obligatorio</span>
    }
    function verificMail(e){
        let mail = e.target.value.length;
        mail >= 10? setBtnstate(false) : <span>*campo obligatorio</span>
    }

    function rechequear(){
        setbuttonClicked(true)

        const clientData = []

        const name = document.getElementById('name').value
        const surname = document.getElementById('surname').value
        const dni = document.getElementById('dni').value
        const mail = document.getElementById('mail').value

        clientData.push({nombre: name})
        clientData.push({surname: surname})
        clientData.push({dni: dni})
        clientData.push({mail: mail})
        
        const infoClient = JSON.stringify(clientData)
        localStorage.setItem('newClient', infoClient)

        alert(`Muchas gracias ${name} ${surname}, por utilizar nuestros servicios. Le enviamos un correo de confimacion al siguiente mail: ${mail}`)
        
        
    }

    return(
        <>
        <form>
            <fieldset>
                <legend>datos del comprador</legend>
                <br/>
                    <input id='name' onChange={verificName} name='nombre' type='name' placeholder='nombre'/>
                    <input id='surname' onChange={verificSurname} name='apellido' type='name' placeholder='apellido' disabled={snState}/>
                    <input id='dni' onChange={verificDni} name='dni' type='number' placeholder='DNI'disabled={dniState}/>
                    <input id='mail' onChange={verificMail} name='mail' type='email' placeholder='email'disabled={mailState}/>
                    <button disabled={btnDisable} onClick={rechequear}>confirmar compra</button>
                <br/>
            </fieldset>
        </form> 
        <br/>
        {buttonClicked && <FormCart/>}

        </>
    )
}