import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function MenuScreen() {
  
    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>Menu</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});