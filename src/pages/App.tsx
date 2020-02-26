import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Loader from '../components/Loader';
import MainPage from './MainPage/MainPage';





const App = () => {   
    return ( 
        <Suspense fallback={<Loader/>}>
            <Router>
                <div>
                    <Route exact path="/" component={MainPage}/>
                </div>
            </Router>
        </Suspense>       
    );
};

export default App;
