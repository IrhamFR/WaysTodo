import React, { useState } from "react";

import {
  Text,
  HStack,
  Center,
  NativeBaseProvider,
  VStack,
  FormControl,
  Button,
  Input,
  Flex,
  View,
  Select,
} from "native-base";
import Profile from "../components/Profile";
import { Fontisto } from '@expo/vector-icons';
import NavbarFooter from "../components/NavbarFooter";


export default function ListTodo ({ navigation }) {
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);
  };
  return (
    <>
    <NativeBaseProvider >
      <Center ml="10" mr="10">
        <VStack space={2} alignItems="" w="100%" mb="4">
          <HStack alignItems="center" mt="5">   
            <Text fontSize="3xl" w="75%" bold my="5">
              Hi, Irham
            </Text>
            <Flex w="25%" alignItems="end">
              <Profile />
            </Flex>
          </HStack>
            
          <FormControl my="3">
            <Input
              type="text"
              placeholder="Search"
              bold
              bg="muted.200"
              size="md"
            />
          </FormControl>

          <FormControl>
            <Flex direction="row" justifyContent="space-between" w="100%">
              <Input
                type="date"
                placeholder="Choose Date"
                bold
                mr={1}
                bg="muted.200"
                w="30%"
              />
              <FormControl w="30%" bg="muted.200">
                <Select minWidth="30" placeholder="Category" mt="1">
                  <Select.Item label="Study" value="1" />
                  <Select.Item label="Home Work" value="2" />
                  <Select.Item label="Workout" value="3" />
                </Select>
              </FormControl>
              <FormControl w="30%" bg="muted.200">
                <Select minWidth="30" placeholder="Status" mt="1">
                  <Select.Item label="Done" value="1" />
                  <Select.Item label="Undone" value="2" />
                </Select>
              </FormControl>
            </Flex>
          </FormControl>
        

          <View bg="primary.100" borderRadius="10" p="2">
              <Flex direction="row"  w="100%">
                <Flex direction="column" w="80%">
                  <Text mt="2" fontSize={17} bold>
                  Study - Golang
                  </Text>
                  <Text mb="3" fontSize={12} color="light.500" >
                  Learn Golang to improve fundamentals and familiarize with coding.
                  </Text>
                  <Flex direction="row">
                    <Fontisto name="date" size={16} color="black"  /> 
                    <Text fontSize={13}>19 July 2022</Text>
                  </Flex>
                </Flex >  
                <Flex direction="column" w="20%">
                  <Button bg="primary.300" px="1" mb="4" h="7">Study</Button>
                  <Button 
                  borderRadius="100%" 
                  size="50" 
                  style={{
                    backgroundColor: isActive ? 'salmon' : 'gray',
                    color: isActive ? 'white' : 'black',
                  }}
                  onClick={handleClick}>   </Button>
                </Flex>
              </Flex>
          </View>
    
          <View bg="success.100" borderRadius="10" p="2">
              <Flex direction="row"  w="100%">
                <Flex direction="column" w="80%">
                  <Text mt="2" fontSize={17} bold>
                    <s>Home Work - Mathematics</s>
                  </Text>
                  <Text mb="3" fontSize={12} color="light.500" >
                    <s>Do homework math probability</s>
                  </Text>
                  <Flex direction="row">
                    <Fontisto name="date" size={16} color="black"  /> 
                    <Text fontSize={13}>19 July 2022</Text>
                  </Flex>
                </Flex >  
                <Flex direction="column" w="20%">
                  <Button bg="danger.300" px="1" mb="4" h="7">Home Work</Button>
                  <Button bg="light.300" borderRadius="100%" size="50">   </Button>
                </Flex>
              </Flex>
          </View>

          <View bg="danger.100" borderRadius="10" p="2">
              <Flex direction="row"  w="100%">
                <Flex direction="column" w="80%">
                  <Text mt="2" fontSize={17} bold>
                    <s>Study - HTML</s>
                  </Text>
                  <Text mb="3" fontSize={12} color="light.500" >
                    <s>Learn HTML to improve fundamentals and familiarize with coding</s> 
                  </Text>
                  <Flex direction="row">
                    <Fontisto name="date" size={16} color="black"  /> 
                    <Text fontSize={13}>19 July 2022</Text>
                  </Flex>
                </Flex >  
                <Flex direction="column" w="20%">
                  <Button bg="primary.300" px="1" mb="4" h="7">Study</Button>
                  <Button bg="light.300" borderRadius="100%" size="50">   </Button>
                </Flex>
              </Flex>
          </View>

          <View bg="warning.100" borderRadius="10" p="2">
              <Flex direction="row"  w="100%">
                <Flex direction="column" w="80%">
                  <Text mt="2" fontSize={17} bold>
                    Study - Javascript
                  </Text>
                  <Text mb="3" fontSize={12} color="light.500" >
                    Learn javascript to improve fundamentals and familiarize with coding 
                  </Text>
                  <Flex direction="row">
                    <Fontisto name="date" size={16} color="black"  /> 
                    <Text fontSize={13}>19 July 2022</Text>
                  </Flex>
                </Flex >  
                <Flex direction="column" w="20%">
                  <Button bg="primary.300" px="1" mb="4" h="7">Study</Button>
                  <Button bg="light.300" borderRadius="100%" size="50">   </Button>
                </Flex>
              </Flex>
          </View>
        </VStack>
      </Center>
    </NativeBaseProvider>
      {/* <NavbarFooter /> */}
      </>
  );
}