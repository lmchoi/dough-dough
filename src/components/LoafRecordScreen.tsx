import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import repo from '../helpers/Repository';
import {useRoute} from '@react-navigation/native';

export function LoafRecordScreen() {
  const route: any = useRoute();
  const {loafRecordId} = route.params;

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
          repo.saveDoughEvent({
            name: eventName,
            creationDate: new Date(),
            loafRecord: loafRecord,
          });
          setLastUpdateInfo(getlastUpdateMessage());
        }}
      />
    );
  };

  const loafRecord = repo.loadLoafRecord(loafRecordId);
  const doughEvents = loafRecord.steps;
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
            <Text key={'' + item.id}>
              {item.name + '   ' + item.creationDate}
            </Text>
          )}
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
