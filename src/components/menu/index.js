import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Menu(props){
    return(
     
      <View style={styles.container}>
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#c53030'}]} 
        onPress={() => {props.setBackColor('#c53030'); props.loadQuestion('Matemática')}}
        >
          <Text style={styles.text}>Matemática</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#4429ba'}]} 
        onPress={() => {props.setBackColor('#4429ba'); props.loadQuestion('Humanas')}}
        >
          <Text style={styles.text}>Ciências Humanas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#47B074'}]} 
        onPress={() => {props.setBackColor('#47B074'); props.loadQuestion('Natureza')}}
        >
          <Text style={styles.text}>Ciências da Natureza</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#EE8A5B'}]} 
        onPress={() => {props.setBackColor('#EE8A5B'), props.loadQuestion('Linguagens')}}
        >
          <Text style={styles.text}>Linguagens, Códigos e suas Tecnologias</Text>
        </TouchableOpacity>
      </View>
     
    );
}