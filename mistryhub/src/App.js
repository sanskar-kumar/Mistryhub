import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Worker from './component/Worker';
function App() {
  return (
    <>
       <Routes > 
          <Route path = '/' element = { < Home />}/>
          <Route path = '/worker' element = { < Worker  /> }/>
       </Routes>

    </>
  );
}

export default App;
