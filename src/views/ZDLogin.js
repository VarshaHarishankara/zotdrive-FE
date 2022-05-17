import React, { Component } from "react";
import {ForgotPassword, Form, FormGroup, FormView, InputField, OuterView, Title, RegisterBtn} from './styles';
import {useWindowDimensions} from '../Manager/ZDDimensions'

export const ZDLogin = () => {
    const { height, width } = useWindowDimensions();
    let styleHeight = height+'px';
    return(
        <OuterView style={{height: styleHeight}}>
        <FormView>
            <Form>
                <Title>Sign in</Title>

                    <FormGroup>
                        <label>Email</label>
                        <InputField type="email" placeholder="Enter email" />
                    </FormGroup>

                    <FormGroup>
                        <label>Password</label>
                        <InputField type="password" placeholder="Enter password" />
                    </FormGroup>

                <RegisterBtn type="submit">Sign in</RegisterBtn>
            </Form>

        </FormView>
        
    </OuterView>  
    )
}
