import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
    image: {
      height:'100%',
      width:'100%',
        resizeMode: 'contain',
        bottom:70,
    },

    item: {
        zIndex: 5,
        flexDirection: 'row',
        width: '114%',
        alignSelf: 'center',
     },
     itemIn: {
         marginLeft: 20,
     },
     itemOut: {
        alignSelf: 'flex-end',
        marginRight: 20
     },
     balloon: {
        maxWidth: moderateScale(400, 10),
        paddingHorizontal: moderateScale(1, 2),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20,
     },
     arrowContainer: {
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         bottom: 0,
         zIndex: -1,
         flex: 1
     },
     arrowLeftContainer: {
         justifyContent: 'flex-end',
         alignItems: 'flex-start'
     },
 
     arrowRightContainer: {
         justifyContent: 'flex-end',
         alignItems: 'flex-end',
     },
 
     arrowLeft: {
         left: moderateScale(-6, 0.5),
     },
})