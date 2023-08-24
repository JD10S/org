import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/CampoTexto" 
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"





const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [Puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registarColaborador, crearEquipo} = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log("manejarEnvio")

        let datosAEnviar={
            nombre,
            Puesto,
            foto,
            equipo,
        }
        registarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario:color})
    }




    return <section className="formulario">
    <form onSubmit={manejarEnvio}>
    <h2>Rellena el formulario para crear el colaborador.</h2>
    <Campo titulo="Nombre" placeholder="Ingresar Nombre" required valor={nombre} actualizarValor={actualizarNombre} />
    <Campo titulo="Puesto" placeholder="Ingresar Puesto" required valor={Puesto} actualizarValor={actualizarPuesto} />
    <Campo titulo="Foto" placeholder="Ingresar Enlace De Foto" required valor={foto} actualizarValor={actualizarFoto}/>
    
    <ListaOpciones valor={equipo} 
    actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>
    <Boton text="Crear"/>
    </form>
    <form onSubmit={manejarNuevoEquipo}>
    <h2>Rellena el formulario para crear el Equipo.</h2>
    <Campo titulo="Titulo" placeholder="Ingresar Titulo" required valor={titulo} actualizarValor={actualizarTitulo} />
    <Campo titulo="Color" placeholder="Ingresar el color en Hex" required valor={color} actualizarValor={actualizarColor} type="color" />
    <Boton text="Registrar Equipo"/>
    </form>
    </section>
}

export default Formulario