
import {PropComponentOptionFilter} from "../../interface/interface"
import style from "./OptionFilter.module.css"
export default function OptionsFilter({setNameFilter,refInput,setRenderConditionalDrop}:PropComponentOptionFilter) {
    const options = [
        {id:1,
        name:"Nombre"
        },
        {id:2,
        name:"Razon"
        },
        {id:3,
        name:"Nit"
        },
        {id:4,
        name:"Telefono"
        },
        {id:5,
        name:"Codigo"
        },

    ]
    
    return (
      <div  >
    {/* <label for="lang">Language</label> */}
      <select className={style.select} defaultValue={"DEFAULT"} onChange={(e)=>{
        setNameFilter(e.target.value),
        setRenderConditionalDrop(false)
        refInput.current.value= ""
        }} name="languages" id="lang">
        <option  value="DEFAULT" disabled={true}>Opciones</option>
        {options.map(e=>  <option   key={e.id} value={e.name}>{e.name}</option>)}
      </select>
    </div>
  )
}
