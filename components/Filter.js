import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  filterShowAll,
  filterMemorized,
  filterNeedPractice,
} from '../redux/actionsCreator';
const Filter = () => {
  const dispatch = useDispatch();
  const myFilterStatus = useSelector((state) => state.filterStatus);
  const getTextStyle = (statusName) => {
    if (statusName === myFilterStatus) return styles.buttonStyle2;
    return styles.buttonStyle;
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 6,
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        onPress={() => {
          dispatch(filterShowAll());
        }}
        style={getTextStyle('SHOW_ALL')}>
        <Text style={{color: 'white', fontSize: 22}}>Show All</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(filterMemorized());
        }}
        style={getTextStyle('MEMORIZED')}>
        <Text style={{color: 'white', fontSize: 22}}>Memorized</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(filterNeedPractice());
        }}
        style={getTextStyle('NEED_PRACTICE')}>
        <Text style={{color: 'white', fontSize: 22}}>NP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'gray',
    height: 50,
    borderRadius: 3,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle2: {
    backgroundColor: 'green',
    height: 50,
    borderRadius: 3,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Filter;
