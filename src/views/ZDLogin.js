import React, { useState, useEffect } from "react";
import {ForgotPassword, Form, FormGroup, FormView, InputField, OuterView, Title, RegisterBtn} from './styles';
import {useWindowDimensions} from '../Manager/ZDDimensions'
import { loginUser } from "../Manager/ZDDataManager";
import { useNavigate } from "react-router-dom";

export const ZDLogin = () => {
    const { height, width } = useWindowDimensions();
    let styleHeight = height+'px';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        if(redirect){
            redirectToDashboard()
        }
    },[redirect])

    const handleEmaiChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        const userObject = JSON.stringify({
            email,
            password
        }); 
        event.preventDefault()
        loginUser(userObject, (response) =>{
            if(response.status == 200){
                const res = response.data
                console.log(res)
                localStorage.setItem("token", res.token)
                localStorage.setItem("rootID", res.rootID)
                localStorage.setItem("parentID", null)
                localStorage.setItem("emailId", res.email)
                setRedirect(true)
            }else{
                alert("Unsuccessfull");
            }
        })
    }

    const redirectToDashboard = () => {
        navigate("/dashboard")
    } 

    return(
        <OuterView style={{height: styleHeight}}>
        <FormView>
            <Form onSubmit={handleSubmit}>
                <Title>Sign in</Title>

                    <FormGroup>
                        <label>Email</label>
                        <InputField type="email" value={email} placeholder="Enter email" onChange={handleEmaiChange}/>
                    </FormGroup>

                    <FormGroup>
                        <label>Password</label>
                        <InputField type="password" value={password}  placeholder="Enter password" onChange={handlePasswordChange}/>
                    </FormGroup>

                <RegisterBtn type="submit">Sign in</RegisterBtn>
            </Form>

        </FormView>
        
    </OuterView>  
    )
}
