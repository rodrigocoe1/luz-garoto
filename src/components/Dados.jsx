import React from 'react'
import User from './User';
import { Galeria } from './Estilizados';
function Dados({users,dadosDoInput}) {
  return (
    <>
      <Galeria>
        {users.map((user,index)=>
          <User
            key={index}
            user={user}
          />
          )}
      </Galeria>
    </>
  )
}
export default Dados