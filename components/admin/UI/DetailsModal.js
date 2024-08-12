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
  Box,
  Text,
} from "@chakra-ui/react";
import { timeStampToDate } from "../../../helpers/timestampToDate";
import { useDisclosure } from "@chakra-ui/react";

const DetailsModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const date = new Date(props.orders[0].timeStamp * 1000);

  const formattedDate = timeStampToDate(date);
  const product = props.orders[0].product.data;

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="green"
        width={"5rem"}
        fontSize={"0.8rem"}
        alignSelf={"end"}
      >
        Details
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Text>{props.orders[0].name}</Text>
            </Box>
            <Box>
              <Text>
                {props.orders[0].address.line1 +
                  " " +
                  props.orders[0].address.line2}
              </Text>
            </Box>
            <Box>
              <Text>
                {props.orders[0].address.postal_code +
                  " " +
                  props.orders[0].address.city}
              </Text>
            </Box>
            <Box>
              <Text>{props.orders[0].email}</Text>
            </Box>
            <Box>
              <Text>
                {props.orders[0].amount + " " + props.orders[0].payment_status}
              </Text>
            </Box>
            <Box>
              <Text>{props.orders[0].shipping_status}</Text>
            </Box>
            <Box>
              <Text>{formattedDate}</Text>
            </Box>
            {product.map((prod) => (
              <Box>
                <Text>{prod.description + " x " + prod.quantity}</Text>
              </Box>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DetailsModal;
