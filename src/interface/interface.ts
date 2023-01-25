import {infoFirebase} from "../types/types"
export interface BodyForm{
        Nombre:string,
        Razon:string,
        Nit:string, 
        Telefono:string,
        Codigo: string
}

export interface PropComponentFrom {
    setRenderConditional: (boolean:boolean)=> void,
    setConfirmData: (boolean:boolean)=> void,
    confirmSendata:boolean,
    filterInfo:infoFirebase[],
    setRenderConditionalDrop:(boolean:boolean)=> void
}

export interface PropComponentDropDown{
    setRenderConditional: (boolean:boolean)=> void,
    filterInfo:infoFirebase[],
    nameFilter:string

}

export interface PropComponentOptionFilter{
    setNameFilter: (string: string)=>void,
    refInput:  any,
    setRenderConditionalDrop:(boolean:boolean)=> void
}