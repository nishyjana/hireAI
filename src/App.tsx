import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import About from './component/about/About';
import AdminDashBoard from './component/adminDashboard/AdminDashBoard';
import ApplicationForm from './component/application/ApplicationForm';
import CompanyView from './component/application/CompanyView';
import Login from './component/auth/Login';
import SignUp from './component/auth/SignUp';
import Help from './component/help/Help';
import Question from './component/interview/Question';
import Recorder from './component/interview/Recorder';
import StartRecording from './component/interview/StartRecording';
import ThankYou from './component/interview/ThankYou';
import StartInterview from './component/interview/UploadCv';
import Profile from './component/profile/Profile';
import AllVacancies from './component/vacancy/AllVacancies';
import Welcome from './component/welcome/Welcome';
import {
    ABOUT,
    ALL_VACANCY,
    APPLICATION_FORM,
    COMPANY_VIEW,
    DASHBOARD,
    HELP,
    PROFILE,
    QUESTION,
    RECORDER,
    SIGNIN,
    SIGNUP,
    START_INTERVIEW,
    START_RECORDING,
    THANKYOU,
    WELCOME,
} from './constants/PathConstants';
import AdminProtectedRoutesWithLayout from './routes/AdminRoutesWithLayout';
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
                    <ProtectedRoutesWithLayout path={APPLICATION_FORM} component={ApplicationForm} />
                    <ProtectedRoutesWithLayout path={START_RECORDING} component={StartRecording} />
                    <ProtectedRoutesWithLayout path={QUESTION} component={Question} />
                    <ProtectedRoutesWithLayout path={RECORDER} component={Recorder} />
                    <ProtectedRoutesWithLayout path={THANKYOU} component={ThankYou} />

                    <AdminProtectedRoutesWithLayout path={DASHBOARD} component={AdminDashBoard} />
                    <AdminProtectedRoutesWithLayout path={ALL_VACANCY} component={AllVacancies} />
                    
                    
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
