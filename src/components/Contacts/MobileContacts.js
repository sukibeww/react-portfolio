import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import useForm from 'react-hook-form';
import { useAlert } from 'react-alert';

const FormWrapper = styled.div`
  height: 600px;
  width: 100vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
  background-image: url(${require("../../images/contact-form-mobile.svg")});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 100%;
  height: 75%;
`

const FormHeader = styled.h1`
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-size: 2.5em;
  color: #FFFFFF;
  font-weight: 800;
  align-self: flex-start;
  padding-left: 15%;
`

const TextInput = styled.input`
  height: 35px;
  width: 66vw;
  border-radius: 20px;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 1em;
  padding-left: 3vh;
  padding-right: 3vh;
  font-weight: 700;
  margin-bottom: 2vh;
  color: #505050;
`


const MessageInput = styled.textarea`
  height: 160px;
  width: 66vw;
  border-radius: 20px;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 1em;
  padding: 3vh;
  font-weight: 700;
  margin-bottom: 2vh;
  resize: none;
  overflow-y: hidden;
  color: #505050;
  align-self: center;
`

const SubmitButton = styled.button`
  height: 40px;
  width: 40%;
  border-radius: 50px;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 2em;
  padding-left: 2vw;
  padding-right: 2vw;
  font-weight: 700;
  margin-bottom: 2vh;
  color: #FFFFFF;
  background-color: #505050;
  align-self: center;
`

const MobileContacts = () => {
  const alert = useAlert();
  const { handleSubmit, register, errors} = useForm();
  const onSubmit = (values, e) => {
    axios.post( "https://formcarry.com/s/3bnv7dMgoif", values, {headers: {"Accept": "application/json"}})
    .then(function (response) {
      console.log(response);
      e.target.reset();
      alert.success("E-mail sent, Thank you for contacting me! 🙂")
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  return(
    <>
    <FormWrapper>
      <InputWrapper onSubmit={handleSubmit(onSubmit)} >
        <FormHeader>Contact me</FormHeader>
        <TextInput
          placeholder={errors.email ? "Invalid e-mail address 😅" : "Your_email@gmail.com"} 
          type="email"
          name="email"
          ref={register({
            required: 'Required',
            maxlength: 254,
            minLength: 7,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid e-mail address 😅"
            }
          })}>
        </TextInput>

        <TextInput
          type="text"
          name="name"
          placeholder={errors.message ?"Invalid messages 😅" : "Your name here"}
          ref={register({
            require: 'Required',
            maxlength: 35,
            minLength: 4,
          })}>
        </TextInput>

        <MessageInput
          type="text"
          name="message"
          placeholder={errors.message ?"Invalid messages 😅" :"Your message here..."}
          ref={register({
            require: 'Required',
            minLength: 5
          })}>
        </MessageInput>

        <SubmitButton type="submit">Send</SubmitButton>
      </InputWrapper>
    </FormWrapper>
    </>
  )
}

export default MobileContacts;