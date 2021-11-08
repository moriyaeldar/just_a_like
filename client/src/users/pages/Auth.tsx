import { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/auth.css';
import { AuthInit, StepOne, StepTow, StepThree, StepFour, StepFive } from '../components/AuthSteps/AuthSteps';
import axios from 'axios';

const Auth:FC = () => {
    const [login, setLogin] = useState(true);
    const [step, setStep]:any = useState(0);
    const [expertises, setExpertises]:any = useState([]);
    const [interests, setInterests]:any = useState([]);
    const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm();

    const fetchData = async () => {
        const exResponse:any = await axios.get('http://localhost:8000/api/expertise');
        const inResponse:any = await axios.get('http://localhost:8000/api/interest');
        setExpertises(exResponse.data);
        setInterests(inResponse.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const authSwitch = () => {
        setLogin(!login);
    }
    
    const googleAuthSuccess = async (response:any) => {
        const { tokenId } = response;        
        if(!login) {
            setValue('tokenID', tokenId);
    
            const {tokenID} = getValues();
            if(tokenID) setStep(1);
        }else{
            const userResponse:any = await axios.post('http://localhost:8000/api/user/google-login', {tokenID: tokenId});
            console.log(userResponse);
        }
    }

    const facebookAuthSuccess = async (response:any) => {
        const { accessToken, userID } = response;
        if(!login) {
            setValue('tokenID', accessToken);
            setValue('userID', userID);

            const {tokenID} = getValues();
            if(tokenID && userID) setStep(1);
        }else {
            const userResponse:any = await axios.post('http://localhost:8000/api/user/facebook-login', {tokenID: accessToken, userID: userID});
            console.log(userResponse);
        }
    }

    const onStepOneSubmit = (data: any) => {
        setStep(2);
    }
    const onStepTowSubmit = (data: any) => {
        const { linkedin_url } = getValues();
        if(linkedin_url) setStep(3);
    }
    const onStepThreeSubmit = (data: any) => {
        const { phone_number } = getValues();
        if(phone_number) setStep(4);
    }
    const onStepFourSubmit = (data: any) => {
        const { expertise } = getValues();
        if(expertise) setStep(5);
    }
    const onFinalSubmit = async (data: any) => {
        const { userID } = getValues();
        console.log(data);
        
        if(userID) {
            const userResponse:any = await axios.post('http://localhost:8000/api/user/facebook-register', data);
            console.log(userResponse);
        }else {
            const userResponse:any = await axios.post('http://localhost:8000/api/user/google-register', data);
            console.log(userResponse);
        }
    }

    let auth = (
        <AuthInit
        googleKey={process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
        facebookKey={process.env.REACT_APP_FACEBOOK_AUTH_APP_ID}
        login={login}
        authSwitch={authSwitch}
        googleAuthSuccess={googleAuthSuccess}
        facebookAuthSuccess={facebookAuthSuccess}/>
    )
    if(step === 1) {
        auth = (
            <StepOne
            submit={handleSubmit(onStepOneSubmit)}
            setInputValue={register}
            /> 
        )
    }
    if(step === 2) {
        auth = (
            <StepTow
            submit={handleSubmit(onStepTowSubmit)}
            setInputValue={register}
            /> 
        )
    }
    if(step === 3) {
        auth = (
            <StepThree
            submit={handleSubmit(onStepThreeSubmit)}
            setInputValue={register}
            />
        )
    }
    if(step === 4) {
        auth = (
            <StepFour
            submit={handleSubmit(onStepFourSubmit)}
            setInputValue={register}
            expertises={expertises}
            />
        )
    }
    if(step === 5) {
        auth = (
            <StepFive
            submit={handleSubmit(onFinalSubmit)}
            setInputValue={register}
            interests={interests}/>
        )
    }

    return auth;
}

export default Auth;