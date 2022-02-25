import React, { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Log = () => {
    const [signUpModal, setSignUpModal] = useState(true);
    const [signInModal, setSignInModal] = useState(false);

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInModal(true);

        }
    }

    return (
        <div className="log-form">
            <div className="form">
                <ul>
                    <li onClick={handleModals} 
                    id="register" 
                    className={signUpModal ? "active-btn log-btn" : "log-btn"}>
                        Inscription
                    </li>
                    <li 
                    onClick={handleModals} 
                    id="login"
                    className={signInModal ? "active-btn log-btn" : "log-btn"}>
                        Connexion
                    </li>
                </ul>
                {signUpModal && <SignUp />}
                {signInModal && <SignIn />}
            </div>

        </div>
    );
};

export default Log;