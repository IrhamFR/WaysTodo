import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dropdown from './Dropdowns';

const StaDrop: FC = () => {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: 'Done', value: '1' },
    { label: 'Undone', value: '2' },
  ];

  return (
    <View style={styles.container}>
      {/* {!!selected && (
        <Text>
          Selected: label = {selected.label} and value = {selected.value}
        </Text>
      )} */}
      <Dropdown label="Status" data={data} onSelect={setSelected} />
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

export default StaDrop;