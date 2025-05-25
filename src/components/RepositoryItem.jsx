import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const RepositoryItem = ({
  fullName,
  description,
  language,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
  forksCount,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        <View style={styles.info}>
          <Text
            color="textPrimary"
            fontWeight="bold"
            fontSize="subheading"
            style={styles.fullName}
          >
            {fullName}
          </Text>
          <Text color="textSecondary" style={styles.description}>
            {description}
          </Text>
          <View style={styles.languageTag}>
            <Text style={styles.languageText}>{language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsSection}>
        <StatItem label="Stars" value={stargazersCount} />
        <StatItem label="Forks" value={forksCount} />
        <StatItem label="Reviews" value={reviewCount} />
        <StatItem label="Rating" value={ratingAverage} />
      </View>
    </View>
  );
};

const StatItem = ({ label, value }) => (
  <View style={styles.statItem}>
    <Text fontWeight="bold">{formatCount(value)}</Text>
    <Text color="textSecondary">{label}</Text>
  </View>
);

const formatCount = (num) => {
  return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  topSection: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  info: {
    flexShrink: 1,
  },
  fullName: {
    marginBottom: 4,
  },
  description: {
    marginBottom: 8,
  },
  languageTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#0366d6',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  languageText: {
    color: 'white',
    fontSize: 12,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
});

export default RepositoryItem;
