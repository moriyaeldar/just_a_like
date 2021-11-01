import { FC } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const Auth:FC = () => {
    const googleAuthSuccess = (response:any) => {
        console.log(response);
        axios.post('http://localhost:8000/user/google-auth', {tokenId: response.tokenId})
    }

    const googleAuthFailure = (response:any) => {
        console.log(response);
    }
    
    return (
        <div>
            <h1>Google Login</h1>
            <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID ?? ''}
            buttonText={'Login with Google'}
            onSuccess={googleAuthSuccess}
            onFailure={googleAuthFailure}
            cookiePolicy={'single_host_origin'}/>
        </div>
    )
}

export default Auth;