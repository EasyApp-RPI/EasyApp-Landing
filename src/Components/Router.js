// React Imports
import {Routes, Route} from 'react-router-dom';

import LandingPage from '../pages/Landing'

function Router(){
    return (
      <Routes>
        <Route path='/' Component={LandingPage}/>
      </Routes>
    );
  }
  
  export default Router;