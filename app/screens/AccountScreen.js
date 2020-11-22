import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
  {
    title: "My Hikes",
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: 'email',
      backgroundColor: colors.secondary
    }
  }
]

function AccountScreen(props){
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title='Zachary Guerrin'
          subTitle='z.guerrin@gmail.com'
          image={require('../assets/Zach-headshot2.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={menuItem => menuItem.title}
          renderItem={( {item} ) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon 
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={
          <Icon name='logout' backgroundColor="#ffe66d" />
        }
      />
    </Screen>
  )
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.light
  },  
})