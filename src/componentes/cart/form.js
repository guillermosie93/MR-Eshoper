import { useState } from "react/cjs/react.development";

export const FormCart = ()=>{
const [snState, setSnstate] = useState(true)
const [dniState, setDnistate] = useState(true)
const [mailState, setMailstate] = useState(true)
const [btnDisable, setBtnstate] = useState(true)

function almacenarDatos(){
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

    
        
    }

    return(
        <form>
            <fieldset>
                <legend>datos del comprador</legend>
                <br/>
                <input onChange={verificName} name='nombre' type='name' placeholder='nombre'/>
                <input onChange={verificSurname} name='apellido' type='name' placeholder='apellido' disabled={snState}/>
                <input onChange={verificDni} name='dni' type='number' placeholder='DNI'disabled={dniState}/>
                <input onChange={verificMail} name='mail' type='email' placeholder='email'disabled={mailState}/>
                <button disabled={btnDisable} onClick={almacenarDatos}>confirmar compra</button>
                <br/>
            </fieldset>
        </form>
    )
}