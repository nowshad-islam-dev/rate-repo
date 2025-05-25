import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ tabName }) => {
  return (
    <Pressable>
      <Text backgroundColor="nav" style={styles.tab}>
        {tabName}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tab: {
    color: '#fff',
    fontWeight: '500',
    paddingLeft: 10,
    paddingBottom: 20,
    paddingTop: 50,
    cursor: 'pointer',
  },
});

export default AppBarTab;
