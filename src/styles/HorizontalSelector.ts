import { StyleSheet } from 'react-native';

const baseStyle = {
  borderRadius: 5,
  borderWidth: 2,
  flex: 1,
  fontSize: 24,
  margin: 3,
  padding: 5,
  borderColor: '#474C55',
};

const HorizontalSelectorStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  item: {
    ...baseStyle,
    backgroundColor: '#B9B9BA',
  },
  selectedItem: {
    ...baseStyle,
    backgroundColor: '#F26925',
  },
});

export default HorizontalSelectorStyle;
