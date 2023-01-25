import style from "./Form.module.css"
import {useState,useId} from "react"
import {BodyForm} from "../../interface/interface"
import {db} from "../../service/firebase"
import { collection, addDoc } from "firebase/firestore"; 
import {PropComponentFrom} from "../../interface/interface"
import {infoFirebase} from "../../types/types"
export default function Form({ setRenderConditional,setConfirmData,confirmSendata,filterInfo,setRenderConditionalDrop}:PropComponentFrom) {
 /* A ternary operator. It is a shorthand for an if/else statement. */
  const infoFirstElementArray:infoFirebase = filterInfo.length > 0 ? filterInfo[0] :{
    Nombre:"",
    Razon:"",
    Nit:"",
    Telefono:"",
    Codigo:""
  }
 /* A ternary operator. It is a shorthand for an if/else statement. */
  const [bodyInfo, setBodyInfo] = useState<BodyForm>({
    Nombre:infoFirstElementArray.Nombre ,
    Razon:infoFirstElementArray.Razon ,
    Nit:infoFirstElementArray.Nit , 
    Telefono:infoFirstElementArray.Telefono,
    Codigo: infoFirstElementArray.Codigo
  })
 /**
  * It's a function that sends data to firebase, and then it sets the state of the component to false,
  * and then it sets the state of the component to an empty object.
  * @param e - React.FormEvent<HTMLFormElement>
  */
  const handleSend =async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    await addDoc(collection(db,"info"),bodyInfo);
    setConfirmData(!confirmSendata);
    setRenderConditionalDrop(false);
    setBodyInfo({
        Nombre:"",
        Razon:"",
        Nit:"", 
        Telefono:"",
        Codigo: ""
      
    })
  }
 /**
  * The function takes an event as an argument, and then sets the state of the bodyInfo object to the
  * value of the event target. 
  * 
  * The event target is the input field that the user is typing in. 
  * 
  * The event target is the input field that the user is typing in. 
  * 
  * The event target is the input field that the user is typing in. 
  * 
  * The event target is the input field that the user is typing in. 
  * 
  * The event target is the input field that the user is typing in. 
  * 
  * The event target is the input field that the user is typing in. 
  * 
  * The event target is the input field that the user is typing in. 
  * 
  * The event target is the input field that the user is typing in. 
  * 
  * The event target is the input field that the user is typing in. 
  * 
  * The event target is the input field that the user is typing in.
  * @param e - React.ChangeEvent&lt;HTMLInputElement | HTMLTextAreaElement&gt;
  */
  const handleInput= (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
 
   
    setBodyInfo({
        ...bodyInfo,
        [e.target.id]:e.target.value.toLowerCase(),
      })
  }

  return (
    <>
    <div className={style.backgroundMModal}/>
    <form onSubmit={handleSend} className={style.ContainerForm}>
      <div>
        <button  onClick={()=> setRenderConditional(!setBodyInfo)}>X</button>
      </div>
        <label htmlFor="name">Nombre :</label>
        <input onChange={handleInput} type="text" id="Nombre" value={bodyInfo.Nombre}/>
        <label htmlFor="razon">Razón Social :</label>
        <input onChange={handleInput} type="text" id="Razon"  value={bodyInfo.Razon}/>
        <label htmlFor="nit">Nit :</label>
        <input onChange={handleInput} type="text" id="Nit"  value={bodyInfo.Nit}/>
        <label htmlFor="phone">Teléfono :</label>
        <input onChange={handleInput} type="number" id="Telefono" value={bodyInfo.Telefono}/>
        <label htmlFor="phone">Codigo :</label>
        <input onChange={handleInput} type="text" id="Codigo" value={bodyInfo.Codigo}/>
       <div className={style.btnAdd}>
          <button type="submit" className={style.btn}>add</button>
        </div>
    </form>
    </>
  )
}
