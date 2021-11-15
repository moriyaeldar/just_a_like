import { FC } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import { ReactComponent as GoogleIcon } from "../../../assets/svg/google-icon.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/svg/facebook-icon.svg";
import { ReactComponent as LogoIcon } from "../../../assets/svg/logo-login.svg";
import { TextField, Button, Select, MenuItem, 
    Checkbox} from '@mui/material';

interface AuthCardProps {
    children: any;
}

const AuthCard:FC<AuthCardProps> = (props) => (
    <div className="login-page">
    <div className="login-card">
        <div className="login-header">
            <LogoIcon/>
            <h1>Kulla_like</h1>
        </div>

        <h3 className="login-sub-header">About you {'>'} About your work</h3>

        {props.children}
        
        <div className="login-policy">
            <span>
            This site is protected by Linked in Privacy
            Policy and Terms of service apply
            </span>
        </div>
    </div>
</div>
)

interface AuthInitProps {
    googleKey: string;
    facebookKey: string;
    login: boolean;
    googleAuthSuccess: any;
    facebookAuthSuccess: any;
    authSwitch: any;
}


export const AuthFirst:FC<AuthInitProps> = (props) => (
    <AuthCard>
        <GoogleLogin
        clientId={props.googleKey ?? ''}
        render={(renderProps) => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='login-button'>
                <GoogleIcon/>
              Log-in with Google
            </button>
          )}
        buttonText={'Login with Google'}
        onSuccess={props.googleAuthSuccess}
        cookiePolicy={'single_host_origin'}
        />
        <div className="login-or-div">
            <div></div>
            <span className="login-span">or</span>
            <div></div>
        </div>
        <FacebookLogin
        appId={props.facebookKey ?? ''}
        autoLoad={false}
        cssClass="login-button"
        icon={<FacebookIcon/>}
        callback={props.facebookAuthSuccess}/>
    </AuthCard>
            
)


interface StepOneProps {
    stepOneSubmit: any;
    setInputValue: any;
    name: string;
    watch: any;
}

export const StepOne:FC<StepOneProps> = (props) => (
    <AuthCard>
        <div className='step-one-welcome'>
            <h3>Welcome <span>{props.name} !</span></h3>
            <p>Want us to use another nickname?</p>
        </div>
        <form onSubmit={props.stepOneSubmit}>
            <TextField
            variant="filled"
            type="text" 
            {...props.setInputValue('username')}
            placeholder="Please enter nickname here"/>
            <Button
            variant={props.watch('username', false) ? "contained" : "outlined" }
            className={props.watch('username', false) ? "contained" : "outlined"}
            onClick={props.stepOneSubmit}>
                {props.watch('username', false) ? 'Continue' : 'Skip >'}
            </Button>
        </form>
    </AuthCard>
)

interface StepTowProps {
    stepTowSubmit: any;
    setInputValue: any;
    watch: any;
}

export const StepTow:FC<StepTowProps> = (props) => (
    <AuthCard>
        <h3 className='instruction-header'>What is your LinkedIn profile?</h3>
        <form onSubmit={props.stepTowSubmit}>
            <TextField
            variant="filled"
            type="text" 
            {...props.setInputValue('linkedin_url')}
            placeholder="Please paste your URL here"/>
            <Button 
            disabled={props.watch('linkedin_url', false) ? false : true}
            variant="contained"
            className={props.watch('linkedin_url', false) ? "contained" : 'disabled'}
            onClick={props.stepTowSubmit}
            >Continue</Button>
        </form>
    </AuthCard>
)

interface StepThreeProps {
    stepThreeSubmit: any;
    setInputValue: any;
    watch: any;
}

export const StepThree:FC<StepThreeProps> = (props) => (
    <AuthCard>
        <h3 className='instruction-header'>Please enter your phone number</h3>
        <form onSubmit={props.stepThreeSubmit}>
            <TextField
            variant="filled"
            type="text" 
            {...props.setInputValue('phone_number')}
            placeholder="Enter phone number"/>
            <Button 
            disabled={props.watch('phone_number', false) ? false : true}
            variant="contained"
            className={props.watch('phone_number', false) ? "contained" : 'disabled'}
            onClick={props.stepThreeSubmit}>submit</Button>
        </form>
    </AuthCard>
)

interface StepFourProps {
    stepFourSubmit: any;
    setInputValue: any;
    expertises: Array<object>;
    watch: any;
}

export const StepFour:FC<StepFourProps> = (props) => (
    <AuthCard>
        <h3 className='instruction-header'>What kind of work do you do?</h3>
        <form onSubmit={props.stepFourSubmit}>
            <Select 
            className="select"
            variant="filled"
            label="select your desired profession"
            {...props.setInputValue('expertise')}>
                <MenuItem 
                value="" selected disabled hidden
                >select your desired profession</MenuItem>
                {props.expertises.map((expertise: any) => (
                    <MenuItem 
                    key={expertise._id}
                    value={expertise._id}
                    >{expertise.name}</MenuItem>
                ))}
            </Select>
            <Button
            disabled={props.watch('expertise', false) ? false : true}
            variant="contained"
            className={props.watch('expertise', false) ? "contained" : 'disabled'} 
            onClick={props.stepFourSubmit}>submit</Button>
        </form>
    </AuthCard>
);

interface StepFiveProps {
    stepFiveSubmit: any;
    setInputValue: any;
    interests: Array<object>;
    watch: any;
}

export const StepFive:FC<StepFiveProps> = (props) => (
    <AuthCard>
        <h3 className='instruction-header'>Choose your interests:</h3>
        <form onSubmit={props.stepFiveSubmit} className='checkbox-form'>
            <div className="checkbox">
                {props.interests.map((interest: any) => (
                    <div key={interest._id} className="box">
                        <Checkbox 
                        sx={{
                        color: '#34008e',
                        '&.Mui-checked': {
                            color: '#34008e',
                        },
                        }} 
                        value={interest._id}
                        {...props.setInputValue('interests')}/>
                        <label>{interest.name}</label>
                    </div>
                ))}
            </div>
            <Button 
            disabled={props.watch('interests', false) ? false : true}
            variant="contained"
            className={props.watch('interests', false) ? "contained" : 'disabled'}
            onClick={props.stepFiveSubmit}
            >Finish</Button>
        </form>
    </AuthCard>
)