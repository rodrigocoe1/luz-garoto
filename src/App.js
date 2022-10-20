import axios from 'axios';
import {useState,useEffect} from 'react';
import Dados from './components/Dados'
import {Fundo} from './components/Estilizados'
import './App.css'
function App() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get("https://randomuser.me/api/?results=284")
      .then(res => setUsers(res.data.results))
      .catch(err => console.log("erro em pegar os usuarios" ,err))
  },[])
  return (
   <>
   <Fundo>

    <Dados 
      users={users}
      />
      </Fundo>
   </>
  );
}

export default App;
