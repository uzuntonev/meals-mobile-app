import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primary}
    />
  );
};

const styles = StyleSheet.create({});

export default CustomHeaderButton;
