import {  Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Worker from './component/Worker';
import Detail from './component/Detail';
import Card from './component/Card';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
function App() {
  
  return (
    <>
       <Routes > 
          <Route path = '/' element = { < Home />}/>
          <Route path = '/worker' element = { < Worker  /> }/>
          <Route path = '/detail/:category' element = { < Detail  /> }/>
          <Route path = '/card' element = { < Card  /> }/>
          <Route path = '/login' element = { < Login /> }/>
          <Route path = '/dashboard' element = { < Dashboard  /> }/>
       </Routes>

    </>
  );
}

export default App;
