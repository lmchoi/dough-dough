import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import repo from './Repository';

export function HomeScreen() {
  const loafRecords = repo.loadLoafRecords();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title={loafRecords[0].name}
        onPress={() =>
          navigation.navigate('LoafRecord', {
            loafRecordId: loafRecords[0].id,
          })
        }
      />
      <Button
        title={loafRecords[1].name}
        onPress={() => {
          const id = loafRecords[1].id;
          navigation.navigate('LoafRecord', {
            loafRecordId: id,
          });
        }}
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
