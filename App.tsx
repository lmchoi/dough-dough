/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';
import repo from './components/Repository';
import {DoughEvent} from './components/DoughEvent';

class App extends React.Component {
  doughEvents: Realm.Results<DoughEvent>;
  constructor(props: Readonly<{}>) {
    super(props);
    this.doughEvents = repo.loadDoughEvents();
  }

  onButtonPress = () => {
    repo.saveDoughEvent({name: 'Feed', creationDate: new Date()});
    this.forceUpdate();
  };

  render() {
    const lastUpdateInfo =
      this.doughEvents.length > 0
        ? 'Last Update: ' +
          this.doughEvents[this.doughEvents.length - 1].creationDate
        : '';

    return (
      <View style={styles.container}>
        <View style={styles.sectionDetails}>
          <Text style={styles.label}>{lastUpdateInfo}</Text>
          <View style={styles.button}>
            <Button title="Feed" onPress={this.onButtonPress} />
          </View>
        </View>
        <View style={styles.sectionList}>
          <FlatList
            data={this.doughEvents}
            renderItem={({item}) => <Text>{item.name + "   " + item.creationDate}</Text>}
            keyExtractor={(item, index) => '' + item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 128,
    marginHorizontal: 16,
    height: 300,
  },
  sectionList: {
  },
  sectionDetails: {
  },
  label: {
    fontSize: 18,
  },
  button: {
    backgroundColor: 'powderblue',
  },
});

export default App;
