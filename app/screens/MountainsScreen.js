import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const mountains = [
  {
    id: 1,
    title: 'Mt Washington',
    height: 6288,
    image: require('../assets/MtWashington.jpg')
  },
  {
    id: 2,
    title: 'Mt Adams',
    height: 5774,
    image: require('../assets/MtAdams.jpg')
  }
];

function MountainsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={mountains}
        keyExtractor={mountain => mountain.id.toString()}
        renderItem={( {item} ) => (
          <Card
            title={item.title}
            subTitle={item.height + "ft"}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

export default MountainsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,

  }
})