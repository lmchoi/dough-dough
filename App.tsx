/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import repo from './components/Repository';

export default function App() {
  const getlastUpdateMessage = () => {
    return doughEvents.length > 0
      ? 'Last Update: ' + doughEvents[doughEvents.length - 1].creationDate
      : '';
  };

  const createEventButton = (eventName: string) => {
    return (
      <Button
        title={eventName}
        onPress={() => {
          repo.saveDoughEvent({name: eventName, creationDate: new Date()});
          setLastUpdateInfo(getlastUpdateMessage());
        }}
      />
    );
  };
  const doughEvents = repo.loadDoughEvents();
  const [lastUpdateInfo, setLastUpdateInfo] = useState(getlastUpdateMessage());

  return (
    <View style={styles.container}>
      <View style={styles.sectionDetails}>
        <Text style={styles.label}>{lastUpdateInfo}</Text>
        <View style={styles.button}>{createEventButton('Feed')}</View>
        <View style={styles.button}>{createEventButton('Mix')}</View>
        <View style={styles.button}>{createEventButton('Bake')}</View>
      </View>
      <View style={styles.sectionList}>
        <FlatList
          data={doughEvents}
          renderItem={({item}) => (
            <Text>{item.name + '   ' + item.creationDate}</Text>
          )}
          keyExtractor={(item, index) => '' + item.id}
        />
      </View>
      <Button
        title="Clear"
        onPress={() => {
          repo.removeAll();
          setLastUpdateInfo(getlastUpdateMessage());
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 128,
    marginHorizontal: 16,
    height: 300,
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
