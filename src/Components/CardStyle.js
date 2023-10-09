import styled from "styled-components";
import DesktopImage from "../assets/bg-intro-desktop.png";
import MobileImage from "../assets/bg-intro-mobile.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ff7979;
  background-image: url(${DesktopImage});
  background-size: cover;

  @media (max-width: 768px) {
    background-image: url(${MobileImage});
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  text-align: center;
  color: white;
  padding: 20px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const FormContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  max-width: 600px;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    text-align: left;
    margin-left: 20px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 700;
  width: 525px;
  height: 131px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 20px;
    text-align: center;
  }
`;

export const FreeTrial = styled.div`
  width: 540px;
  height: 60px;
  border-radius: 10px;
  background: #5e54a4;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 16px;
  font-weight: normal;

  span {
    margin-left: 5px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  p {
    color: #ff7979;
    text-align: right;
    margin-bottom: 5px;
    font-size: 11px;
    font-style: italic;
    font-weight: 500;
  }

  input.error {
    border: 1px solid #ff7979;
  }
`;

export const SubmitButton = styled.input`
  width: 100%;
  height: 56px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #38cc8b;
  box-shadow: 0px -4px 0px 0px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: #ff7979;
  text-align: right;
  font-size: 11px;
  font-style: italic;
  font-weight: 500;
`;
