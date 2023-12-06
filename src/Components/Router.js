// React Imports
import {Routes, Route} from 'react-router-dom';
import LandingPage from '../pages/Landing'


//Routes, currently only landing page as that is the only written page
function Router(){
    return (
      <Routes>
        <Route path='/' Component={LandingPage}/>
      </Routes>
    );
  }
  
  export default Router;