import React from "react";
import {
    Text,
    HStack,
    Center,
    NativeBaseProvider,
    VStack,
    FormControl,
    Button,
    Input
} from "native-base";
import { TouchableOpacity } from "react-native";
import Todo from "../components/Todo";
import LoginIcon from "../components/LoginIcon";


export default function Register({navigation}) {
    return (
        <NativeBaseProvider>
            <VStack space={2} alignItems=""  mt={100}>
                <Center>
                    <LoginIcon />
                    <HStack alignItems="start" mt="5">
                        <Text fontSize="3xl" bold>Register</Text>
                    </HStack>
                    <FormControl my="3"  w="80%">
                        <Input type="email"
                            placeholder="Email"
                            bold
                            bg="muted.200"
                        />
                    </FormControl>
                    <FormControl mb="3"  w="80%">
                        <Input type="name"
                            placeholder="Name"
                            bold
                            bg="muted.200"
                            size="md"
                        />
                    </FormControl>
                    <FormControl  w="80%">
                        <Input type="password"
                            placeholder="password"
                            bold
                            bg="muted.200"
                            size="md"
                        />
                    </FormControl>
                    <Button variant="danger" bg="error.600" w="80%" mt="10">
                        <Text bold color="white">Register</Text>
                    </Button>

                    <Center>
                    <Text mb="10">
                        Joined us before? 
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <Text color="error.600" bold mt="2">
                              Login
                            </Text>
                        </TouchableOpacity>
                    </Text>
                    </Center>
                </Center>
            </VStack>
        </NativeBaseProvider>
    );
}
