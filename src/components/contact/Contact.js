import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from '../styled/Title';
import { BtnPrimary } from '../styled/Buttons';

const StyledContact = styled.section`
  padding: 1rem 0;
`;
const FormWrapper = styled.section`
  padding: 1rem 0;

  max-width: 60vw;
  margin: 0 auto;
  form {
    padding: 2rem 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form-group {
    label {
      text-transform: capitalize;
      display: block;
      margin-bottom: 0.5rem;
      font-size: 1.4rem;

      margin: 1rem 0;
    }
    input {
      margin: 0.5rem 0;
      display: block;
      width: 40rem;
      padding: 0.7rem 1.2rem;
      font-size: 1rem;
      border: 2px solid ${props => props.theme.primaryColor};
      border-radius: 1rem;
      box-shadow: 2px 2px 3px #ccc;
      transition: ${props => props.theme.secondaryTransition};
      &:focus {
        box-shadow: 3px 2px 3px 2px #ccc;
        transform: scale(1.025);
        width: 43rem;
      }
    }
    input[placeholder='message'] {
      height: 8rem;
    }
  }
  button {
    margin-top: 1rem;
    padding: 0.3rem 1.2rem;
    width: 40rem;
    position: relative;
    &:active {
      top: 2px;
    }
  }
  @media (max-width: 720px) {
    .form-group {
      input {
        width: 30rem;
        &:focus {
          box-shadow: 3px 2px 3px 2px #ccc;
          transform: scale(1.025);
          width: 33rem;
        }
      }
    }
    button {
      width: 30rem;
    }
  }
  @media (max-width: 520px) {
    .form-group {
      input {
        width: 20rem;
        &:focus {
          box-shadow: 3px 2px 3px 2px #ccc;
          transform: scale(1.025);
          width: 23rem;
        }
      }
    }
    button {
      width: 20rem;
    }
  }
  @media (max-width: 347px) {
    .form-group {
      input {
        width: 15rem;
        &:focus {
          box-shadow: 3px 2px 3px 2px #ccc;
          transform: scale(1.025);
          width: 17rem;
        }
      }
    }
    button {
      width: 15rem;
    }
  }
`;

const Contact = () => {
  let a;
  return (
    <StyledContact>
      <Title title="Contact" subtitle="us" />
      <FormWrapper>
        <form
          action="https://formspree.io/marcellciszek24@gmail.com"
          method="POST"
          acceptCharset="utf-8"
        >
          <div className="form-group">
            <label htmlFor="text">
              Name
              <input type="text" placeholder="name" />
            </label>
            <label htmlFor="text">
              Email
              <input type="email" placeholder="email" />
            </label>
            <label htmlFor="text">
              Message
              <input type="text" placeholder="message" />
            </label>
          </div>
          <BtnPrimary type="submit">Submit</BtnPrimary>
        </form>
      </FormWrapper>
    </StyledContact>
  );
};

Contact.propTypes = {};

export default Contact;
