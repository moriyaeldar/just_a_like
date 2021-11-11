import { FC } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { ReactComponent as GoogleIcon } from "../../../assets/svg/google-icon.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/svg/facebook-icon.svg";
import { ReactComponent as LogoIcon } from "../../../assets/svg/logo-login.svg";

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


export const AuthInit:FC<AuthInitProps> = (props) => (
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
    submit: any;
    setInputValue: any;
}

export const StepOne:FC<StepOneProps> = (props) => (
    <AuthCard>
        <form>
            <input 
            type="text" 
            {...props.setInputValue('username')}
            placeholder="Enter username"/>
            <button onClick={props.submit}>submit</button>
        </form>
    </AuthCard>
)

interface StepTowProps {
    submit: any;
    setInputValue: any;
}

export const StepTow:FC<StepTowProps> = (props) => (
    <AuthCard>
        <form>
            <input 
            type="text" 
            {...props.setInputValue('linkedin_url')}
            placeholder="Enter linkedin url"/>
            <button onClick={props.submit}>submit</button>
        </form>
    </AuthCard>
)

interface StepThreeProps {
    submit: any;
    setInputValue: any;
}

export const StepThree:FC<StepThreeProps> = (props) => (
    <AuthCard>
        <form>
            <input 
            type="text" 
            {...props.setInputValue('phone_number')}
            placeholder="Enter phone number"/>
            <button onClick={props.submit}>submit</button>
        </form>
    </AuthCard>
)

interface StepFourProps {
    submit: any;
    setInputValue: any;
    expertises: Array<object>;
}

export const StepFour:FC<StepFourProps> = (props) => (
    <AuthCard>
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
    </AuthCard>
);

interface StepFiveProps {
    submit: any;
    setInputValue: any;
    interests: Array<object>;
}

export const StepFive:FC<StepFiveProps> = (props) => (
    <AuthCard>
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
    </AuthCard>
)