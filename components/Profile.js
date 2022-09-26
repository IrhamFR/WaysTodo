import React from 'react'
import icon from '../image/profile.png'

import { Image, Center} from 'native-base';

export default function ProfileIcon() {
    return <Center mt="2">
    <Image source={icon} alt="Alternate Text" size="180" style={{width: 100, height: 100, borderRadius: 100/ 2, borderWidth: 3}}  />
  </Center>;
}