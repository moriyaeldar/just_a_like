import { FC } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

interface AuthInitProps {
    googleKey: string;
    facebookKey: string;
    login: boolean;
    googleAuthSuccess: any;
    facebookAuthSuccess: any;
    authSwitch: any;
}

export const AuthInit:FC<AuthInitProps> = (props) => (
    <div className="login-page">
        <h1>Kula_Like</h1>
        <h3>About you {'>'} About your work</h3>
        <GoogleLogin
        clientId={props.googleKey ?? ''}
        buttonText={'Login with Google'}
        onSuccess={props.googleAuthSuccess}
        cookiePolicy={'single_host_origin'}/>
        <hr/>
        <FacebookLogin
        appId={props.facebookKey ?? ''}
        autoLoad={false}
        callback={props.facebookAuthSuccess}/>
        <hr/>
        <span>
            {props.login ? 'New here? ' : 'Have an account? '} 
            <span onClick={props.authSwitch}>{props.login ? 'Sign up' : 'Login'}</span> 
        </span>
    </div>
)


interface StepOneProps {
    submit: any;
    setInputValue: any;
}

export const StepOne:FC<StepOneProps> = (props) => (
    <form>
        <input 
        type="text" 
        {...props.setInputValue('username')}
        placeholder="Enter username"/>
        <button onClick={props.submit}>submit</button>
    </form>
)

interface StepTowProps {
    submit: any;
    setInputValue: any;
}

export const StepTow:FC<StepTowProps> = (props) => (
    <form>
        <input 
        type="text" 
        {...props.setInputValue('linkedin_url')}
        placeholder="Enter linkedin url"/>
        <button onClick={props.submit}>submit</button>
    </form>
)

interface StepThreeProps {
    submit: any;
    setInputValue: any;
}

export const StepThree:FC<StepThreeProps> = (props) => (
    <form>
        <input 
        type="text" 
        {...props.setInputValue('phone_number')}
        placeholder="Enter phone number"/>
        <button onClick={props.submit}>submit</button>
    </form>
)

interface StepFourProps {
    submit: any;
    setInputValue: any;
    expertises: Array<object>;
}

export const StepFour:FC<StepFourProps> = (props) => (
    <form>
        <select 
        {...props.setInputValue('expertise')}>
            <option 
            value="" selected disabled hidden
            >Choose Your Expertise</option>
            {props.expertises.map((expertise: any) => (
                <option 
                key={expertise._id}
                value={expertise._id}
                >{expertise.name}</option>
            ))}
        </select>
        <button onClick={props.submit}>submit</button>
    </form>
);

interface StepFiveProps {
    submit: any;
    setInputValue: any;
    interests: Array<object>;
}

export const StepFive:FC<StepFiveProps> = (props) => (
    <form>
        {props.interests.map((interest: any) => (
            <div key={interest._id}>
                <input type="checkbox" 
                value={interest._id}
                {...props.setInputValue('interests')}/>
                <label>{interest.name}</label>
            </div>
        ))}
        <button onClick={props.submit}>submit</button>
    </form>
)