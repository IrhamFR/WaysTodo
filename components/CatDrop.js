import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from './Dropdown';

const CatDrop: FC = () => {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'Study', value: '1' },
    { label: 'Home Work', value: '2' },
    { label: 'Work Out', value: '3' },
  ];

  return (
    <View style={styles.container}>
      {/* {!!selected && (
        <Text>
          Selected: label = {selected.label} and value = {selected.value}
        </Text>
      )} */}
      <Dropdown label="Category" data={data} onSelect={setSelected} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default CatDrop;