import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  NativeBaseProvider,
  VStack,
  FormControl,
  Button,
  Input,
  Select,
  Box,
  TextArea,
  Flex,
  View,
} from "native-base";
import Todo from "../components/Todo";
import LoginIcon from "../components/LoginIcon";
import { Fontisto } from "@expo/vector-icons";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function ListTodo() {
  return (
    <NativeBaseProvider>
      <Center ml="10" mr="10" mt="10">
        <VStack space={2} alignItems="" w="100%">
          <View bg="primary.100" borderRadius="10" p="2" mb="5">
            <Flex direction="row">
              <Text fontSize={24} bold w="80%">
                Study - Golang
              </Text>
              <Flex direction="column" w="20%">
                  <Button bg="primary.300" px="1" mb="4" h="7">Study</Button>
                  <Button bg="light.300" borderRadius="100%" size="50">   </Button>
                </Flex>
            </Flex>
                
            <Text mb="3" color="light.500">
            <p>Learn Golang to improve fundamentals and familiarize with coding.</p> 
            <br/>
            <p>Advantages of Go </p>
            <p>Go has advantages over other languages, including: </p>
            <br/>
            <p>Supports concurrency at the language level with fairly easy application</p>
            <p>Supports data processing with multiple processors at the same time 'parallel processing' </p>
            <p>Have a garbage collector </p>
            <p>The compilation process is very fast </p>
            <p>It's not a hierarchical programming language and it's not strict OOP, giving developers the freedom to how to write code. </p>
            <br/>
            <p>Listing Material : </p>
            <br/>
            <p>1.  Installation </p>
            <p>2.  Setup Go Modules </p>
            <p>3.  Setup Gopath and Workspace </p>
            <p>4.  Go Command </p>
            <p>5.  Hello World </p>
            <p>6.  Variable </p>
            <p>7.  Tipe DataKonstanta </p>
            <p>8.  Operator </p>
            <p>9.  Condition </p>
            <p>10. Loops </p>
            </Text>
          </View>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
