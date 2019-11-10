import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import useForm from 'react-hook-form';

const FormWrapper = styled.div`
  height: 80vh;
  width: 60vw;
  margin-left: 20vw;
  margin-right: 20vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
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
  font-size: 1.3em;
  padding-left: 2vw;
  padding-right: 2vw;
  font-weight: 700;
  margin-bottom: 2vh;
  color: #505050;
`

const SocialMediaLink = styled.img`
  width: 3vw;
  height: 3vw;
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
  font-size: 3em;
  color: #FFFFFF;
  font-weight: 800;
`

const MessageInput = styled.textarea`
  height: 18vh;
  width: 50%;
  border-radius: 50px;
  border: none;
  font-family: "Nunito", sans-serif;
  font-size: 1em;
  padding: 2vw;
  font-weight: 700;
  margin-bottom: 2vh;
  resize: none;
  overflow-y: hidden;
  color: #505050;
`

const SubmitButton = styled.button`
  height: 6vh;
  width: 63%;
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
`

const DesktopContacts = () => {
  const { handleSubmit, register, errors} = useForm();
  const onSubmit = (values, e) => {
    axios.post( "https://formcarry.com/s/3bnv7dMgoif", values, {headers: {"Accept": "application/json"}})
    .then(function (response) {
      console.log(response);
      e.target.reset();
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return(
    <>
      <FormWrapper>
        <LinkWrapper>
          <SocialMediaLink src={require("../../images/github.svg")}></SocialMediaLink>
          <SocialMediaLink src={require("../../images/linkedin.svg")}></SocialMediaLink>
        </LinkWrapper>
        <InputWrapper onSubmit={handleSubmit(onSubmit)} >
          <FormHeader>Contact me</FormHeader>
          <TextInput
            placeholder="Your_email@gmail.com"
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
          {errors.email && errors.email.message}

          <TextInput
            type="text"
            name="name"
            placeholder="Your name here"
            ref={register({
              require: 'Required',
              maxlength: 35,
              minLength: 4,
            })}>
          </TextInput>
          {errors.name && "Invalid name 😅"}

          <MessageInput
            type="text"
            name="message"
            placeholder="Your message here..."
            ref={register({
              require: 'Required',
              minLength: 5
            })}>
          </MessageInput>
          {errors.name && "Invalid messages 😅"}

          <SubmitButton type="submit">Send</SubmitButton>
        </InputWrapper>
      </FormWrapper>
    </>
  )
}

export default DesktopContacts;