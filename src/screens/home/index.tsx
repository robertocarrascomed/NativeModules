import React, {useEffect} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {Container} from '../../components/container';
import {useBatteryLevel} from '../../hooks/useBatteryLevel';

export function Home() {
  const isDarkMode = useColorScheme() === 'dark';
  const {level, getLevel} = useBatteryLevel();

  useEffect(() => {
    getLevel();
  }, [getLevel]);

  return (
    <Container>
      <View style={styles.container}>
        <Header />
        <View
          style={[
            styles.section,
            {
              backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
            },
          ]}>
          <Text
            style={[
              styles.title,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            Home
          </Text>
          <Text
            style={[
              styles.title,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>{`Battery level is ${level}%`}</Text>
        </View>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
