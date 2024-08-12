import React from "react";
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
  Image,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

const EditProductModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        width={"5rem"}
        fontSize={"0.8rem"}
        alignSelf={"end"}
        colorScheme="green"
        marginRight={"-8"}
      >
        Edit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>Name</Text>
              <Input value={props.name}></Input>
            </Box>
            <Box>
              <Text>Description</Text>
              <Input value={props.desc}></Input>
            </Box>
            <Box>
              <Text>Price</Text>
              <Input value={props.price}></Input>
            </Box>
            <Box>
              <Text>New Image</Text>
              <img src={props.image} />
              <Input type="file" name={props.image}></Input>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button margin={5} colorScheme="green" width="8rem">
              Edit
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

export default EditProductModal;
