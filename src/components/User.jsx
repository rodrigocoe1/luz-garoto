import React from 'react'
import { Quadro,Foto,TextoPerfil } from './Estilizados'

function User(props) {
  let imagem = props.user.picture.large
  let idade = props.user.dob.age
  let telefone = props.user.cell
  let pais = props.user.nat

  let pessoa = {sobrenome: props.user.name.last ,nome: props.user.name.first, titulo: props.user.name.title}
  return (
    <>
    <Quadro>
      <TextoPerfil> {pessoa.titulo} {pessoa.nome} {pessoa.sobrenome}</TextoPerfil>
      <Foto src={imagem} alt="" />
      <TextoPerfil>{idade}y {telefone} {pais}</TextoPerfil>
    </Quadro>
      
    </>
  )
}

export default User


