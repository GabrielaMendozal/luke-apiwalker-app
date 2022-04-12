import logo from './logo.svg';
import './App.css';
import Formulario from './Componentes/Formulario/Formulario';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Films from "./Componentes/Films/Films";
import People from './Componentes/People/People';
import Planets from './Componentes/Planets/Planets';
import Species from "./Componentes/Species/Species";
import Starships from "./Componentes/Starships/Starships";
import Vehicles from "./Componentes/Vehicles/Vehicles";

function App() {
  const [busqueda,setBusqueda] = useState({
    categoria:"",
    id: ""
  });

  const [valorBusqueda, setValorBusqueda] = useState({
    categoria:"",
    id: ""
  });
  const [data, setData] = useState(null);
  
  useEffect(() =>{
    const {categoria,id} = busqueda;
    if(categoria && id){
      axios.get(`https://swapi.dev/api/${categoria}/${id}`)
        .then( respuesta => {
          setData({...respuesta.data})
          
        })
        .catch( err =>{
          if(err.response){
            setData({Error: "Estos no son los droides que está buscando"})
          }
        });
    }
  },[busqueda])

  const submitForm = (e) =>{
    e.preventDefault();
    setBusqueda({
      ...valorBusqueda
    })
  }

  const onChange = (e) =>{
    setValorBusqueda({
      ...valorBusqueda,
      [e.target.name]: e.target.value
    })
  }

  const resultadosXCategoria =() => {
    if(data){
    // eslint-disable-next-line default-case
    switch (busqueda.categoria) {
      case 'people':
        return<People data={data}/>
      case 'films':
          return <Films data={data}/>
        case 'starships':
          return <Starships data={data}/>
        case 'vehicles':
          return <Vehicles data={data}/>
        case 'planets':
          return <Planets data={data}/>
        case 'species':
          return <Species data={data}/>
    }
  }
  }
        
      
  console.log(busqueda.categoria,"QUIEN SOY YO?")
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          

          <Route path="/" render={(routeProps) => {
            return data  ? (
              <>
                <Formulario submitForm={submitForm} onChange={onChange} {...routeProps}/>
                <div> { data ? resultadosXCategoria(): "no va"       } </div>

              </>
            ):
            <div> 
                    <Formulario submitForm={submitForm} onChange={onChange} {...routeProps}/>
                   
                    
            </div>
       
            }}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

