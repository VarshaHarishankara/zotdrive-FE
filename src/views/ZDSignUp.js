import React from "react";
import {ForgotPassword, Form, FormGroup, FormView, InputField, OuterView, Title, RegisterBtn} from './styles';
import {useWindowDimensions} from '../Manager/ZDDimensions'

export const ZDSignUp = () => {
    const { height, width } = useWindowDimensions();
    let styleHeight = height+'px';
    return(
        <OuterView style={{height: styleHeight}}>
            <FormView>
                <Form>
                    <Title>Sign up</Title>
                    <FormGroup>
                        <label>First name</label>
                        <InputField type="text" placeholder="First name" />
                    </FormGroup>

                    <FormGroup>
                        <label>Last name</label>
                        <InputField type="text" placeholder="Last name" />
                    </FormGroup>

                    <FormGroup>
                        <label>Email</label>
                        <InputField type="email" placeholder="Enter email" />
                    </FormGroup>

                    <FormGroup>
                        <label>Password</label>
                        <InputField type="password" placeholder="Enter password" />
                    </FormGroup>

                    <RegisterBtn type="submit">Register</RegisterBtn>
                    <ForgotPassword>
                        Already registered <a hrebf="#">log in?</a>
                    </ForgotPassword>
                </Form>

            </FormView>
            
        </OuterView>
    )
}
