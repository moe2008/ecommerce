import React, { useState, useRef } from "react";
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
import useAddProducts from "../../hooks/useAddProducts";
import uploadImageToImageKit from "../../../helpers/uploadImageToImageKit";

const AddProductModal = ({ onAddProduct }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { addProductToFirestore, loading, error, success } = useAddProducts();
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleAddProduct = async () => {
    if (imageFile) {
      const imageUrl = await uploadImageToImageKit(imageFile);
      const productData = {
        name: name,
        description: description,
        price: price,
        imageUrl: imageUrl,
      };
      onAddProduct(productData);
    } else {
      alert("Bitte ein Bild auswählen");
    }
  };
  return (
    <>
      <Button
        onClick={onOpen}
        width={"5rem"}
        fontSize={"0.8rem"}
        alignSelf={"end"}
      >
        Add Product
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>Name</Text>
              <Input
                ref={nameRef}
                onChange={(e) => setName(e.target.value)}
              ></Input>
            </Box>
            <Box>
              <Text>Description</Text>
              <Input
                ref={descriptionRef}
                onChange={(e) => setDescription(e.target.value)}
              ></Input>
            </Box>
            <Box>
              <Text>Price</Text>
              <Input
                ref={priceRef}
                onChange={(e) => setPrice(e.target.value)}
              ></Input>
            </Box>
            <Box>
              <Text>Image</Text>
              <Input type="file" onChange={handleFileChange}></Input>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              margin={5}
              colorScheme="green"
              width={"8rem"}
              onClick={handleAddProduct}
            >
              Add
            </Button>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
          {loading && <p>Lädt...</p>}
          {error && <p>Fehler: {error.message}</p>}
          {success && <p>{success}</p>}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProductModal;
