import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const ShipModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="green"
        width="5rem"
        fontSize="0.8rem"
        alignSelf="end"
      >
        Ship
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ship Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>Ship Number</Text>
              <Input />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button margin={5} colorScheme="green" width="8rem">
              Ship
            </Button>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShipModal;
