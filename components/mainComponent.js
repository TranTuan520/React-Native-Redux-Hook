import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Item from './itemFlatlistComponent';
import Filter from './Filter';
import Header from './header';
import {toggleIsAdding} from '../redux/actionsCreator';
const mainComponent = () => {
  const globalState = useSelector((state) => state);
  const myFilter = globalState.Filter;
  const myWords = globalState.arrWords;
  const myIsAdding = globalState.isAdding;
  const dispatch = useDispatch();
  const getWordList = () => {
    if (myFilter === 'MEMORIZED') return myWords.filter((e) => e.memorized);
    if (myFilter === 'NEED_PRACTICE')
      return myWords.filter((e) => !e.memorized);
    return myWords;
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1, alignSelf: 'stretch'}}>
      <View
        style={{
          alignItems: 'flex-end',
          borderBottomWidth: 0.5,
          borderColor: 'gray',
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(toggleIsAdding());
          }}
          style={{
            marginVertical: 4,
            marginEnd: 4,
            width: 50,
            height: 50,
            borderRadius: 25,
            borderColor: 'gray',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {myIsAdding ? '-' : '+'}
          </Text>
        </TouchableOpacity>
      </View>
      {myIsAdding ? <Header /> : null}
      <FlatList
        data={getWordList()}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
      <Filter />
    </View>
  );
};

export default mainComponent;
