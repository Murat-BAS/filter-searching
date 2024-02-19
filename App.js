import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SearchBar from './src/components/search_bar/searchBar'//Component
import Box from './src/components/box/box'//Component
import musicData from './src/components/data.json'//Data
import mainStyle from './src/components/style'//Main STyle

export default function App() {

  const sentItem = ({item}) => <Box musicTitle = {item}></Box>
  const renderBorder = () => <View style={mainStyle.border}></View>

  const [list, setList] = useState(musicData)

  const searchFunction = ({text}) => {
    const filtredSong=musicData.filter(song => {
      let currentData = song.title.toLowerCase();
      let currentText = text.toLowerCase();

      return (
        currentData.indexOf(currentText) > -1
      )
    })
    setList(filtredSong)
  }

  return (    
    <View style={mainStyle.container}>
      <SearchBar onChangeFunc={searchFunction}/>
      <FlatList
        data={list}
        renderItem={sentItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderBorder} /* this searator allows to add somthing between every veriable, we can define function or tag */
      ></FlatList>
    </View>
  );
}

