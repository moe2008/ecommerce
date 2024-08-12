import React from "react";
import { Flex, Button, Input, Heading, Textarea, Text } from "@chakra-ui/react";
import { useState } from "react";
import classes from "./Contact.module.css";
import axios from "axios";

const Contact = React.forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/sendMail", formData);
      alert("Deine Nachricht wurde gesendet!");
    } catch (error) {
      alert("Etwas ist schief gelaufen. Bitte alle Felder ausfüllen.");
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <React.Fragment>
      <Flex
        flexDirection="column"
        alignItems="center"
        justfiyContent="center"
        backgroundColor="#343434"
        ref={ref}
      >
        <Flex marginTop="5">
          <Heading fontSize="3xl" color="#f3f3f3">
            Contact
          </Heading>
        </Flex>
        <Flex
          minWidth="100vw"
          padding="5"
          flexDirection={["column", "column", "row", "row"]}
          alignItems={["center", "center", "flex-start", "normal"]}
        >
          <Flex
            w={["100%", "100%", "50%"]}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection="column"
            gap="5"
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                width: "50%",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              <Input
                placeholder="First Name"
                width="70%"
                height="2rem"
                type="text"
                className={classes.text}
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Last Name"
                width="70%"
                height="2rem"
                type="text"
                className={classes.text}
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Email"
                width="70%"
                height="2rem"
                type="email"
                className={classes.text}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Textarea
                placeholder="Message"
                resize="none"
                type="text"
                className={classes.text}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                size={["md", "md", "md", "lg"]}
                color="#F3F3F3"
                backgroundColor="#867872"
                _hover={{ backgroundColor: "#726661" }}
              >
                Send
              </Button>
            </form>
          </Flex>
          <Flex
            w={["70%", "70%", "50%"]}
            justifyContent="flex-start"
            alignItems={"center"}
            textAlign="start"
            flexDirection="column"
            gap="3"
            marginTop={["5", "5", "0", "0"]}
            padding="5"
          >
            <Heading color="#F3F3F3" fontSize="xl" marginBottom="5">
              Impressum
            </Heading>
            <Text className={classes.text}>GlanzPro GmbH</Text>
            <Text className={classes.text}>Geschäftsführer: Lisa Müller</Text>
            <Text className={classes.text}>Hauptstraße 56</Text>
            <Text className={classes.text}>10178 Berlin</Text>
            <Text className={classes.text}>kontakt@glanzpro.de</Text>
            <Text className={classes.text}>030/12345678</Text>
            <Text className={classes.text}>USt-IdNr.: DE123456789</Text>
            <Text className={classes.text}>Handelsregister: HRB 987654</Text>
            <Text className={classes.text}>Amtsgericht Berlin-Charlottenburg</Text>

          </Flex>
        </Flex>
      </Flex>
    </React.Fragment>
  );
});

export default Contact;
