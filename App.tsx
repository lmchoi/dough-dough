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
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
} from 'react-native';

import realm from './components/realm';

class App extends React.Component {
  doughEvents: any;
  constructor(props: Readonly<{}>) {
    super(props);
    this.doughEvents = realm.objects('DoughEvent');
    this.doughEvents.addListener((name: any, changes: any) => {
      console.log("changed: " + JSON.stringify(changes));
    });
    console.log("registered listener");
  }

  onButtonPress = () => {
    realm.write(() => {
      realm.create('DoughEvent', { name: 'Feed', creationDate: new Date() });
    });
    this.forceUpdate();
  }

  render() {
    const info = realm
      ? 'Number of dough events: ' + this.doughEvents.length
      : 'Loading...';

    const lastUpdateInfo = this.doughEvents.length > 0
      ? 'Last Update: ' + this.doughEvents[this.doughEvents.length - 1].creationDate
      : '';

    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          {info}
        </Text>
        <Text style={styles.sectionTitle}>
          {lastUpdateInfo}
        </Text>
        <Button
          title="Feed"
          onPress={this.onButtonPress}
        />
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
