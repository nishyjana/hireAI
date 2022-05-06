import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import About from './component/about/About';
import CompanyView from './component/application/CompanyView';
import Login from './component/auth/Login';
import SignUp from './component/auth/SignUp';
import Help from './component/help/Help';
import StartInterview from './component/interview/UploadCv';
import Profile from './component/profile/Profile';
import Welcome from './component/welcome/Welcome';
import {
    ABOUT,
    COMPANY_VIEW,
    HELP,
    PROFILE,
    SIGNIN,
    SIGNUP,
    START_INTERVIEW,
    WELCOME,
} from './constants/PathConstants';
import ProtectedRoutesWithLayout from './routes/RoutesWithLayout';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <ProtectedRoutesWithLayout exact path={WELCOME} component={Welcome} />
                    <ProtectedRoutesWithLayout path={SIGNUP} component={SignUp} />
                    <ProtectedRoutesWithLayout path={PROFILE} component={Profile} />
                    <ProtectedRoutesWithLayout path={COMPANY_VIEW} component={CompanyView} />
                    <ProtectedRoutesWithLayout path={SIGNIN} component={Login} />
                    <ProtectedRoutesWithLayout path={ABOUT} component={About} />
                    <ProtectedRoutesWithLayout path={HELP} component={Help} />
                    <ProtectedRoutesWithLayout path={START_INTERVIEW} component={StartInterview} />
                    
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
