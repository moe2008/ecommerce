import React, { useState } from "react";
import {
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";
import AddProductModal from "./AddProductModal";
import EditProductModal from "./EditProductModal";
import useFetchProducts from "../../hooks/useFetchProducts";
import useDeleteProduct from "../../hooks/useDeleteProduct";
import useAddProducts from "../../hooks/useAddProducts";

const ProductTabel = () => {
  const [updateKey, setUpdateKey] = useState(0);
  const { products, loading } = useFetchProducts(updateKey);

  const {
    addProductToFirestore,
    loading: addingProduct,
    success: addedSuccess,
  } = useAddProducts();

  const handleAddProduct = async (productData) => {
    await addProductToFirestore(productData);
    setUpdateKey((prevKey) => prevKey + 1);
  };

  const { deleteProductFromFirestore, loaded, error, success } =
    useDeleteProduct();

  const handleDeleteProduct = (productId) => {
    deleteProductFromFirestore(productId);
    setUpdateKey((prevKey) => prevKey + 1);
  };
  return (
    <Flex
      height="90%"
      width="90%"
      flexDir="column"
      marginTop={5}
      padding={5}
      backgroundColor="#343434"
      borderRadius={7}
    >
      <AddProductModal onAddProduct={handleAddProduct} />
      <Flex overflowX="auto" width="100%">
        <Table variant="simple" marginTop="3">
          <Thead>
            <Tr>
              <Th color="#F3F3F3">Product Number</Th>
              <Th color="#F3F3F3">Product Name</Th>
              <Th color="#F3F3F3">Description</Th>
              <Th color="#F3F3F3">Picture</Th>
              <Th color="#F3F3F3">Price</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {loading ? (
              <div>loading...</div>
            ) : (
              products.map((product) => (
                <Tr key={product.id}>
                  <Td color="#F3F3F3">{product.id}</Td>
                  <Td color="#F3F3F3">{product.name}</Td>
                  <Td color="#F3F3F3">{product.description}</Td>
                  <Td color="#F3F3F3">
                    <img
                      src={product.imageUrl}
                      style={{ height: "150px", width: "200px" }}
                    />
                  </Td>
                  <Td color="#F3F3F3">{product.price}</Td>
                  <Td>
                    <EditProductModal
                      id={product.id}
                      name={product.name}
                      desc={product.description}
                      price={product.price}
                      image={product.imageUrl}
                    />
                  </Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      width="5rem"
                      fontSize="0.8rem"
                      alignSelf="end"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Flex>
      <Button margin={3}>weitere Laden</Button>
    </Flex>
  );
};

export default ProductTabel;
