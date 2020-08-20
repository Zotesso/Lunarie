import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor:'#333',
        borderColor:'black',
        borderRightWidth: 3,
        height:'100%',
        justifyContent:'space-evenly',
        alignItems:'center',
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:0.08,
        width:'95%',
        borderColor:'white',
        borderWidth: 1,
        borderRadius: 10,
    },  

    text: {
        fontSize:18,
        color:'white',
    },  
})