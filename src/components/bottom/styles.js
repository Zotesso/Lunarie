import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    bottomContainer: {
        borderColor:'black',
        borderWidth:3,
        width: 350,
        flex: 0.72,
        flexDirection: 'row',
        bottom:20,
    },

    answerButton: {
        borderColor:'black',
        borderWidth:1,
        flex:1,
        width:100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    optionsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        flexGrow:1,
        flex:1,
    },
    
    textOptions: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
        
    },
})