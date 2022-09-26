import React from 'react'
import todo from '../image/todo.png'
import { Image, Center} from 'native-base';

export default function Todo() {
    return <Center>
    <Image source={todo} alt="Alternate Text" size="350" />
    </Center>;
}