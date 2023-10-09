import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Container,
    ContentContainer,
    TextContainer,
    FormContainer,
    Title,
    Text,
    Form,
  } from "./CardStyle";


function Card() {
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name cannot be empty"),
    userNAme: yup.string().required("User Name cannot be empty"),
    email: yup.string().email().required("Looks like this is not an email"),
    password: yup.string().min(2).max(100).required("Password cannot be empty"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
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
            scripted tutorials is great, but understanding how developers think is
            invaluable.
          </Text>
        </TextContainer>
        <FormContainer>
          <p>
            Try it free 7 days <span>then $20/mo. thereafter</span>
          </p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="First name" {...register("firstName")} />
            <p>{errors.firstName?.message}</p>
            <input type="text" placeholder="User name" {...register("userNAme")} />
            <p>{errors.userNAme?.message}</p>
            <input type="text" placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>
            <input type="password" placeholder="Password" {...register("password")} />
            <p>{errors.password?.message}</p>
            <input type="submit" value="Submit" />
          </Form>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
}

export default Card;
