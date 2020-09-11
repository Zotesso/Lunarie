import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    bottomContainer: {
        borderColor:'black',
        borderWidth:3,
        width: 350,
        flex: 0.6,
        flexDirection: 'row',
        bottom:16,
    },

    answerButton: {
        flexDirection: 'row',
        borderColor:'black',
        borderWidth:1,
        flex:1,
        width:344,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap:'wrap',
    },
    
    option: {
        alignSelf: 'flex-start',
        marginRight: 6,
        fontSize: 16,
    },

    textOptions: {
        color: 'white',
        fontSize: 16,
        width:'92%',
        alignSelf: 'flex-start',    
     
    },
})