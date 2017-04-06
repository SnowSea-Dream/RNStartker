import { StyleSheet } from 'react-native';
import { Styles, Fonts, Colors, Metrics } from '@theme/';

export default StyleSheet.create({
  tabBarStyle: {
    ...Styles.center,
    borderTopWidth: 1,
    borderColor: Colors.borderPrimary,
  },
  titleStyle: {
    ...Fonts.style.regular,
    color: Colors.textPrimary,
  },
  badgeContainer: {
    ...Styles.center,
    marginTop: 17,
    marginRight: 5,
    width: 14,
    height: 14,
    backgroundColor: Colors.brandPrimary,
    borderRadius: 7,
  },
  badgeTextStyle: {
    ...Fonts.style.regular,
    fontSize: Fonts.size.mini,
    color: Colors.textSecondary,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  tabIconsContainer: {
    ...Styles.center,
    width: Metrics.screenWidth / 12,
    height: Metrics.screenWidth / 12,
  },
  an10naBody: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: Colors.borderPrimary,
    backgroundColor: Colors.backgroundSecondary,
  },
  shareDescriptionText: {
    ...Fonts.style.listItemDescriptionText,
    textAlign: 'center',
    width: Metrics.buttonWidth,
  },
  frontContainer: {
    flex: 1,
    width: Metrics.screenWidth,
    backgroundColor: Colors.textThird,
  },
  image: {
    height: 200,
    width: Metrics.screenWidth,
    alignItems: 'center',
    backgroundColor: Colors.greycolor,
  },
});
