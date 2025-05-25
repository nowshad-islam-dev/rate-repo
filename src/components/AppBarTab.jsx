import { StyleSheet } from 'react-native';
import Text from './Text';

const AppBarTab = ({ tabName }) => {
  return (
    <Text fontWeight="bold" style={styles.tab}>
      {tabName}
    </Text>
  );
};

const styles = StyleSheet.create({
  tab: {
    color: '#fff',
    paddingLeft: 10,
    paddingBottom: 20,
    paddingTop: 50,
    cursor: 'pointer',
  },
});

export default AppBarTab;
