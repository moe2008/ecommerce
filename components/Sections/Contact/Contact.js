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
            Kontakt
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
                placeholder="Vorname"
                width="70%"
                height="2rem"
                type="text"
                className={classes.text}
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Nachname"
                width="70%"
                height="2rem"
                type="text"
                className={classes.text}
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Email Adresse"
                width="70%"
                height="2rem"
                type="email"
                className={classes.text}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Textarea
                placeholder="Nachricht"
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
                Senden
              </Button>
            </form>
          </Flex>
          <Flex
            w={["70%", "70%", "50%"]}
            justifyContent="flex-start"
            alignItems={"center"}
            flexDirection="column"
            gap="3"
            marginTop={["5", "5", "0", "0"]}
          >
            <Heading color="#F3F3F3" fontSize="xl" marginBottom="5">
              Impressum
            </Heading>
            <Text className={classes.text}>Dierker Parkett</Text>
            <Text className={classes.text}>Inhaber Martin Dierker</Text>
            <Text className={classes.text}>Lerchenstraße 34</Text>
            <Text className={classes.text}>49577 Kettenkamp</Text>
            <Text className={classes.text}>dierker.parkett@osnanet.de</Text>
            <Text className={classes.text}>05436/1020</Text>
          </Flex>
        </Flex>
      </Flex>
    </React.Fragment>
  );
});

export default Contact;
