import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import AppBarTab from './AppBarTab';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={styles.link}>
          <AppBarTab tabName="Repositories" />
        </Link>
        <Link to="/sign-in" style={styles.link}>
          <AppBarTab tabName="Sign in" />
        </Link>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    backgroundColor: '#24292e',
  },
  link: {
    paddingHorizontal: 10,
  },
});

export default AppBar;
