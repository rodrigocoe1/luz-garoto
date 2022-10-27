import React,{useState} from 'react'
import { Quadro,Foto,TextoPerfil } from './Estilizados'
import Modal from './Modal'
function User(props) {
  let imagem = props.user.picture.large
  let idade = props.user.dob.age
  let telefone = props.user.cell
  let pais = props.user.nat
  let [showmodal,setShowModal] = useState(false);

  let pessoa = {sobrenome: props.user.name.last ,nome: props.user.name.first, titulo: props.user.name.title}
  
  function Clicado(){
    console.log("clicaram")
    setShowModal(true)
  }

  return (
    <>

    <Quadro onClick={()=>Clicado()}>
      <TextoPerfil> {pessoa.titulo} {pessoa.nome} {pessoa.sobrenome}</TextoPerfil>
      <Foto src={imagem} alt="" />
      <TextoPerfil>{idade}y {telefone} {pais}</TextoPerfil>
    </Quadro>

      { showmodal && <Modal user={props.user} setShowModal={setShowModal} />}
    </>
  )
}

export default User


