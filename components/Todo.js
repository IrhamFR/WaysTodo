import React from 'react'
import todo from '../image/todo.png'
import text from '../image/text-todo.png'
import { Image, Center} from 'native-base';

export default function Todo() {
    return <Center>
    <Image source={todo} alt="Alternate Text" size="250" />
    <Image source={text} alt="Alternate Text" height={"35"}  width={"210"}/>
  </Center>;
}