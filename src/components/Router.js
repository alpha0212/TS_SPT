import * as React from 'react';
import { Router ,Route, Routes } from 'react-router';
import SignIn from '../routes/Signin';

const AppRouter = () => {

    return(
        <Router>
            <Routes>
                <Route exact path={"/signIn"} element={<SignIn />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
