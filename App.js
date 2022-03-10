/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import SectionList from 'react-native/Libraries/Lists/SectionList';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const [items, setItems] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
  ]);

  const DATA = [
    {
      title: 'title1',
      data: ['nameTitle1-1', 'nameTitle1-2', 'nameTitle1-3'],
    },
    {
      title: 'title2',
      data: ['nameTitle2', 'nameTitle2-1'],
    },
    {
      title: 'title3',
      data: ['nameTitle3', 'nameTitle3-1', 'nameTitle3-2'],
    },
    {
      title: 'title4',
      data: ['nameTitle4', 'nameTitle4-1', 'nameTitle4-2'],
    },
  ];

  return (
    <View style={styles.body}>
      {/* <ScrollView> */}
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={DATA}
        renderItem={({item}) => <Text style={styles.text}> {item} </Text>}
        renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.text}> {section.title} </Text>
          </View>
        )}
      />
      <FlatList
        // horizontal
        keyExtractor={(item, index) => index.toString()}
        data={items}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
      {/* <ScrollView style={styles.scroll}>
        {items.map((element, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.text}>{element.item}</Text>
          </View>
        ))}
      </ScrollView> */}
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    borderColor: 'pink',
    borderRadius: 10,
  },

  text: {
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    margin: 10,
    textTransform: 'uppercase',
  },

  item: {
    // backgroundColor: '#4ae1fa',
    backgroundColor: 'green',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default App;
