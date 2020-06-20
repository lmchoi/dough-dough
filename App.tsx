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
import {StyleSheet, View, Text, Button} from 'react-native';

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
    const info = 'Number of dough events: ' + this.doughEvents.length;

    const lastUpdateInfo =
      this.doughEvents.length > 0
        ? 'Last Update: ' +
          this.doughEvents[this.doughEvents.length - 1].creationDate
        : '';

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{info}</Text>
        <Text style={styles.sectionTitle}>{lastUpdateInfo}</Text>
        <Button title="Feed" onPress={this.onButtonPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  sectionContainer: {
    marginTop: 132,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
