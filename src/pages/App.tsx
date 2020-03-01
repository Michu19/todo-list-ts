import React, {Suspense} from 'react';
import { Router, Route, Switch, Redirect} from 'react-router-dom'; 
import Loader from '../components/Loader';
import MainPage from './MainPage/MainPage';
import ErrorPage from './ErrorPage/ErrorPage';
import EditPage from './EditPage/EditPage';
import { history } from '../common/history';
import NotFound from './ErrorPage/NotFoung';



const App = () => {   
    return ( 
        <Suspense  fallback={<Loader/>}>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route exact path="/error" component={ErrorPage} />
                        <Route exact path="/edit/:id" component={EditPage} />
                        <Route exact path="/not-found" component={NotFound} />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </Router>
        </Suspense>       
    );
};

export default App;
