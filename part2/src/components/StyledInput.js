import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StyledInput = ({ value, onChangeText, placeholder, onClear }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color="#7B61FF" />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear}>
          <Icon name="close" size={24} color="#7B61FF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#7B61FF',
    borderRadius: 30,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});

export default StyledInput;
