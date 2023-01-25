import {useEffect,useState} from 'react'
import style from './DropDown.module.css'
import { collection, getDocs } from "firebase/firestore"; 
import {db} from "../../service/firebase"
import {PropComponentDropDown} from '../../interface/interface'
export default function DropDown({setRenderConditional,filterInfo,nameFilter}:PropComponentDropDown) {
  let partition = 10
  const [infoFirebase,setInfoFirebase] = useState<any>()  
    /* A function that is called when the user scrolls to the bottom of the page. */
    const observador = new IntersectionObserver((entradas,observador)=>{
      entradas.forEach(entrada=>{
        if(entrada.isIntersecting){
          partition += 10
          setInfoFirebase([...infoFirebase,...filterInfo.slice(infoFirebase.length,partition)])
        }
      })
    },{
      rootMargin:'0px 0px 0px 0px',
      threshold: 1.0
    });
    /**
     * If the length of the array is greater than or equal to 10, then select all the list items and
     * observe the last one.
     */
    const handleViewSection = ()=>{
      if(infoFirebase?.length>=10){
        const element = document.querySelectorAll("li")
        observador.observe(element[element.length-1])
      }
    }
   /* A hook that is executed when the component is mounted and when the filterInfo variable changes. */
    useEffect(()=>{
      if(filterInfo?.length>10){
        setInfoFirebase(filterInfo.slice(0,partition))
      }else{
        setInfoFirebase(filterInfo)
      }
    },[filterInfo])
  return (
    <div className={style.containerInfo}>
        <h3 onClick={()=>setRenderConditional(true)}>Inserte sus Datos</h3>
        <ul onScroll={handleViewSection}>
            {filterInfo?.length>0 ?infoFirebase?.map((e:any,i:string)=><li key={i}><h4>{e[nameFilter]}</h4></li>):
            <li>No hay Resultados</li>
            }
        </ul>
    </div>
  )
}
