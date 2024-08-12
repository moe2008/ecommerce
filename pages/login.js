import React, { useState } from "react";
import { Flex, Input, Button, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      if (user) {
        router.push("/dashboard");
      }
    } catch (error) {
      setError("Anmeldedaten nicht korrekt");
    }
  };
  return (
    <Flex
      minHeight={"100vh"}
      minWidth={"100vw"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Flex
        flexDirection={"column"}
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
        height={"25rem"}
        width={"25rem"}
        backgroundColor={"#343434"}
        borderRadius={"5"}
        padding={5}
      >
        <Heading color={"#F3F3F3"}>Admin Login</Heading>
        <Input
          size={"md"}
          width={"65%"}
          textColor={"#f3f3f3"}
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          size={"md"}
          width={"65%"}
          textColor={"#f3f3f3"}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button width={"65%"} onClick={handleLogin}>
          Login
        </Button>
        {error && <Text textColor={"#f3f3f3"}>{error}</Text>}
      </Flex>
    </Flex>
  );
};

export default Login;
