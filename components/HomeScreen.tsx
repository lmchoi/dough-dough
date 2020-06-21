import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Loaf Record #1"
        onPress={() => navigation.navigate('LoafRecord')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
