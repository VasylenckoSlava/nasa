import {Linking, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Colors} from '../../constans';

const Result = () => {
  const asteroid = useSelector((state) => state.init.asteroid);

  const link = () => {
    Linking.openURL(asteroid.nasa_jpl_url);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>{'Name'}</Text>
      <Text>{asteroid && asteroid.name}</Text>
      <Text style={styles.detailText}>{'Nasa Url'}</Text>
      <Text onPress={link}>{asteroid && asteroid.nasa_jpl_url}</Text>
      <Text style={styles.detailText}>{'Potentially Hazardous Asteroid'}</Text>
      <Text style={styles.detailText}>
        {asteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  detailText: {fontWeight: 'bold', fontSize: 20, marginVertical: 20},
});

export default Result;
