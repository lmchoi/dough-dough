import React from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import repo from '../helpers/Repository';

export function HomeScreen() {
  const loafRecords = repo.loadLoafRecords();
  const navigation = useNavigation();

  return (
    <View>
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
      <Button
        title="Tartine Country Bread"
        onPress={() => navigation.navigate('Recipe')}
      />
    </View>
  );
}

