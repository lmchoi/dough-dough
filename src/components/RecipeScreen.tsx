import React from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import recipe from '@recipes/tartine.json';

export function RecipeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionDetails}>
        <Text style={styles.label}>{recipe.name}</Text>
      </View>
      <View style={styles.sectionList}>
        <FlatList
          data={recipe.steps}
          renderItem={({item}) => <Text>{item.description}</Text>}
          keyExtractor={(item, id) => '' + id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  sectionList: {},
  sectionDetails: {},
  label: {
    fontSize: 18,
  },
  button: {
    backgroundColor: 'powderblue',
  },
});
