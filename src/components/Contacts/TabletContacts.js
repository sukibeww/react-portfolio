import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import useForm from 'react-hook-form';
import { useAlert } from 'react-alert'

const FormWrapper = styled.div`
  height: 40vh;
  width: 90vw;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 15vh;
  margin-bottom: 15vh;
  background-image: url(${require("../../images/contactform.svg")});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const LinkWrapper = styled.div`
  width: 50%;
  height: 75%;
  align-items: flex-end;
  align-self: center;
  display: flex;
  justify-content: center;
`

const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-start;
  width: 50%;
  height: 75%;
`

const TextInput = styled.input`
  height: 6vh;
  width: 50%;
  border-radius: 50px;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 0.7em;
  padding-left: 2vw;
  padding-right: 2vw;
  font-weight: 700;
  margin-bottom: 1vh;
  color: #505050;
`

const SocialMediaLink = styled.img`
  width: 7vw;
  height: 7vw;
  margin-left: 5%;
  margin-right: 5%;
  opacity: 0.5;
  &:hover{
    opacity: 1;
  }
`

const FormHeader = styled.h1`
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-size: 2em;
  color: #FFFFFF;
  font-weight: 800;
  margin-bottom: 1vh;
`

const MessageInput = styled.textarea`
  height: 25vh;
  width: 50%;
  border-radius: 20px;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 0.7em;
  padding: 2vw;
  font-weight: 700;
  margin-bottom: 1vh;
  resize: none;
  overflow-y: hidden;
  color: #505050;
`

const SubmitButton = styled.button`
  height: 6vh;
  width: 58%;
  border-radius: 50px;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 1.5em;
  padding-left: 2vw;
  padding-right: 2vw;
  font-weight: 700;
  color: #FFFFFF;
  background-color: #505050;
`
const TabletContacts = () => {
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
        <LinkWrapper>
          <a style={{
            marginLeft: "5%",
            marginRight: "5%",
          }}
          href="https://github.com/sukibeww">
            <SocialMediaLink src={require("../../images/github.svg")}></SocialMediaLink>
          </a>
          <a
          style={{
            marginLeft: "5%",
            marginRight: "5%",
          }}
          href="https://www.linkedin.com/in/sukianto-suteja-85b379154/">
            <SocialMediaLink src={require("../../images/linkedin.svg")}></SocialMediaLink>
          </a>
        </LinkWrapper>
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

export default TabletContacts;