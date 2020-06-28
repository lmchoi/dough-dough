import React from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import repo from '../helpers/Repository';
import recipe from '@recipes/tartine.json';

export function HomeScreen() {
  const loafRecords = repo.loadLoafRecords();
  const navigation = useNavigation();
  console.log(recipe);
  return (
    <View style={styles.container}>
      <FlatList
        data={loafRecords}
        renderItem={({item}) => (
          <Button
            title={item.name}
            onPress={() =>
              navigation.navigate('LoafRecord', {
                loafRecordId: item.id,
              })
            }
          />
        )}
        keyExtractor={(item, _) => '' + item.id}
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
