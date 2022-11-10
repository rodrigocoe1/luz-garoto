import React,{useState, useEffect} from "react"
function Filtros(props) {
    const [EstadosInput,setEstadosInput] = useState({idade: 0 })
    
    useEffect(()=>{
        props.EnvioEstados(EstadosInput)
    })
    return(
        <div>
            <input
                type="number"   
                placeholder = "Escolha uma idade"
                onChange = {(e)=> setEstadosInput({...EstadosInput,idade: e.target.value})}
            />
            <input
                type="text"
                placeholder = "Escolha um nome"
                onChange = {(e)=> setEstadosInput({...EstadosInput,idade: e.target.value})}
            />
            <input
                type="text"
                placeholder = "Escolha um pais"
                onChange = {(e)=> setEstadosInput({...EstadosInput,idade: e.target.value})}
            />
        </div>
    )
}


export default Filtros