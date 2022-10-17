import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Worker from './component/Worker';
import Detail from './component/Detail';
import Card from './component/Card';
function App() {
  return (
    <>
       <Routes > 
          <Route path = '/' element = { < Home />}/>
          <Route path = '/worker' element = { < Worker  /> }/>
          <Route path = '/detail' element = { < Detail  /> }/>
          <Route path = '/card' element = { < Card  /> }/>
       </Routes>

    </>
  );
}

export default App;
