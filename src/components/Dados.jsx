import React from 'react'
import User from './User';
import { Galeria } from './Estilizados';
function Dados({users}) {
  return (
    <>
      <Galeria>

        {users.map((user)=>
          <User
          user={user}
          />
          )}
      </Galeria>
    </>
  )
}
export default Dados