import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  getAsteroidById,
  getAsteroidRandomly,
} from '../../store/actions/asteroidAction';

import {Colors} from '../../constans';

const Initial = ({navigation}) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const getValue = (value) => setValue(value);

  const randomSearchAsteroid = () => {
    dispatch(getAsteroidRandomly(() => navigation.navigate('Result')));
  };
  const searchById = () => {
    dispatch(getAsteroidById(value, () => navigation.navigate('Result')));
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TextInput
          placeholder={'Enter Asteroid ID'}
          style={styles.textInput}
          placeholderTextColor={'grey'}
          onChangeText={getValue}
        />
        <Button
          title={'Submit'}
          disabled={!value}
          onPress={searchById}
          color={Colors.buttonColor}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={randomSearchAsteroid}>
        <Text>{'Random Asteroid'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    padding: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderRadius: 3,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    height: 40,
    width: '100%',
    marginTop: 25,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});

export default Initial;
