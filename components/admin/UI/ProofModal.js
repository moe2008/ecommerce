import React, { useRef } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const ProofModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const confirm = async () => {
    await props.onClick();
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        width={"5rem"}
        fontSize={"0.8rem"}
        alignSelf={"end"}
      >
        Shop off/on
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>Möchten sie den Shop on/off stellen?</Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={confirm}>
              Ja
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

export default ProofModal;
