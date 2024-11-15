import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Navigation + Routing App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 20,
    backgroundColor: '#b2afba',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;