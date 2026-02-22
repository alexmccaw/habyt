import React from 'react';
import { View, Text } from 'react-native';

// Example reusable component
export const Button = ({ title, onPress }) => (
  <View>
    <Text onPress={onPress}>{title}</Text>
  </View>
);

// Example reusable component
export const Header = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

// Export all components
export { Button, Header };