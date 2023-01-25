import OptionsFilter from "../OptionsFilter/OptionsFilter";
import style from "./Search.module.css"
import DropDown from "../DropDown/DropDown";
import Form from "../Form/Form";
import { useState, useEffect, useRef } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import {db} from "../../service/firebase"
import {infoFirebase} from "../../types/types"
export default function Search() {
    const [renderConditional, setRenderConditional] = useState<boolean>(false)
    const [infoDataFirebase, setInfoDataFirebase] = useState<infoFirebase[]>()
    const [nameFilter,setNameFilter] = useState<string>("")
    const [filterInfo, setInfoFilter] = useState<infoFirebase[]>([])
    const [confirmSendata,setConfirmData] = useState<boolean>(false)
    const refInput = useRef<any>()
    const [renderConditionalDrop,setRenderConditionalDrop] = useState(false)
    
useEffect(()=>{
   
    (async()=>{
     const queryConsult = await getDocs(collection(db,"info"));
     const ArrayCleanResults:infoFirebase[] = queryConsult.docs.map((e:any)=>{
        return {
            Nombre:e._document.data.value.mapValue.fields.Nombre.stringValue,
            Razon:e._document.data.value.mapValue.fields.Razon.stringValue,
            Nit:e._document.data.value.mapValue.fields.Nit.stringValue,
            Telefono:e._document.data.value.mapValue.fields.Telefono.stringValue,
            Codigo:e._document.data.value.mapValue.fields.Codigo.stringValue,
        }
     })
     setInfoDataFirebase(ArrayCleanResults)
    })()
},[confirmSendata])

/**
 * If the nameFilter is not undefined, then filter the infoDataFirebase array by the value of the input
 * field, and if the value of the input field is empty, then return false, otherwise if the element of
 * the array includes the value of the input field, then return true, otherwise return false.
 * @param e - React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 */
const handleFilterSearchArray = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{  
    setRenderConditionalDrop(true)
    let filterArray = nameFilter !== undefined ?  infoDataFirebase?.filter((element:any) =>{
      if(e.target.value === ""){
        return false
    }else if(element[nameFilter].includes(e.target.value.toLowerCase())){
        return true
    }else{
        return false
    }
    }) : [] 
    setInfoFilter(filterArray=== undefined ? [] : filterArray )
}

  return (
    <main className={style.containerMain}>
        <section className={style.containerSectionSearch}>
            <input  id="search" ref={refInput} onChange={handleFilterSearchArray} type="search" placeholder={`Buscar por ${nameFilter === "" ? "categoria": nameFilter}`} />
            <OptionsFilter setRenderConditionalDrop={setRenderConditionalDrop} refInput={refInput} setNameFilter={setNameFilter}/>
        </section>
        <section className={style.containerSectionResults}>
          {renderConditionalDrop && <DropDown   setRenderConditional={setRenderConditional} filterInfo={filterInfo} nameFilter={nameFilter} />}
        </section>
        {renderConditional &&  <Form setRenderConditionalDrop={setRenderConditionalDrop} filterInfo={filterInfo} setRenderConditional={setRenderConditional} setConfirmData={setConfirmData} confirmSendata={confirmSendata}/>}
    </main>
  )
}
