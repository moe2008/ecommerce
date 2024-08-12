import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import MemberCard from "./MemberCard";

// min-height: 80; Löst Problem

const TeamSection = React.forwardRef((props, ref) => {
  const members = [
    {
      name: "Sophia Klein",
      description: "Store Manager",
    },
    {
      name: "Lukas Hoffmann",
      description: "Customer Support Specialist",
    },
    {
      name: "Emma Schneider",
      description: "Marketing Coordinator",
    },
    {
      name: "Felix Becker",
      description: "Warehouse Supervisor",
    },
  ];

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      backgroundColor="#343434"
      ref={ref}
    >
      <Flex
        width="100vw"
        alignItems="center"
        justifyContent="center"
        marginTop="5"
      >
        <Heading color="#F3F3F3" fontSize="3xl" fontFamily={"open sans"}>
          Team
        </Heading>
      </Flex>
      <Flex
        minHeight="50vh"
        alignItems="center"
        justifyContent="center"
        gap="10"
        flexDir={["column", "column", "row", "row"]}
        marginBottom="8"
        marginTop="8"
        flexWrap={["nowrap", "nowrap", "wrap", "nowrap"]}
      >
        {members.map((member) => (
          <MemberCard name={member.name} description={member.description} />
        ))}
      </Flex>
    </Flex>
  );
});

export default TeamSection;
