import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #FF7979;
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
  max-width: 400px;
  width: 90%;

  @media (min-width: 768px) {
    text-align: left;
    margin-left: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  p {
    color: red;
    text-align: left;
    margin-bottom: 10px;
  }
`;
