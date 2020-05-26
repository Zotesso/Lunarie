import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor:'#151717',
        borderColor:'black',
        borderWidth:3,
        width: 355,
        height:'100%',
        borderRadius:20,
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