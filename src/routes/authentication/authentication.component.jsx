import React from 'react';
import { signInWithGooglePopup , createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component'

const Authentication = () => {

const logGoogleUser = async ()=>{
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
}

    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;