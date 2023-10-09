import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  ContentContainer,
  TextContainer,
  FormContainer,
  FormStyled,
  Title,
  Text,
  SubmitButton,
  ErrorMessage,
} from "./CardStyle";

function Card() {
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name cannot be empty"),
    userNAme: yup.string().required("User Name cannot be empty"),
    email: yup.string().email().required("Looks like this is not an email"),
    password: yup.string().min(2).max(100).required("Password cannot be empty"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <Title>Learn to code by watching others</Title>
          <Text>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </Text>
        </TextContainer>

        <FormContainer>
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="First name"
              {...register("firstName")}
              className={errors.firstName ? "error" : ""}
            />
            <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
            <input
              type="text"
              placeholder="User name"
              {...register("userNAme")}
              className={errors.userNAme ? "error" : ""}
            />
            <ErrorMessage>{errors.userNAme?.message}</ErrorMessage>
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              className={errors.email ? "error" : ""}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className={errors.password ? "error" : ""}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
            <SubmitButton type="submit" value="Submit" />
          </FormStyled>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
}

export default Card;
