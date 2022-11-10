import React from 'react'
import "./Modal.css"
import { modalBackground,modalContainer,titleBtn ,BotaoCaiFora, Texto} from "./Estilizados"
function Modal({user,setShowModal}) {
  console.log(user)
  return (
    <modalBackground>
      <modalContainer>
        <titleBtn>
          <BotaoCaiFora
            onClick={ ()=>setShowModal(false)}
          >
            Sair
          </BotaoCaiFora>
        </titleBtn>
        <div>
          <div>
            <img src={user.picture.large} alt=""/>
          </div>
        <div>
         <Texto>
           {user.name.first + '' + user.name.last}
         </Texto>
         <Texto>
           {user.location.country  
            }
          </Texto>    
          </div>
        </div>
      </modalContainer> 
   </modalBackground>
  )
}

export default Modal
