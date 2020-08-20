import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Menu(props){
    return(
     
      <View style={styles.container}>
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#c53030'}]} 
        onPress={() => {props.setBackColor('#c53030')}}
        >
          <Text style={styles.text}>Inglês</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#4429ba'}]} 
        onPress={() => {props.setBackColor('#4429ba')}}
        >
          <Text style={styles.text}>Português</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#c1bf40'}]} 
        onPress={() => {props.setBackColor('#c1bf40')}}
        >
          <Text style={styles.text}>Matemática</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#c17140'}]} 
        onPress={() => {props.setBackColor('#c17140')}}
        >
          <Text style={styles.text}>Geografia</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#5c3822'}]} 
        onPress={() => {props.setBackColor('#5c3822')}}
        >
          <Text style={styles.text}>História</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#21946d'}]} 
        onPress={() => {props.setBackColor('#21946d')}}
        >
          <Text style={styles.text}>Biologia</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#486441'}]} 
        onPress={() => {props.setBackColor('#486441')}}
        >
          <Text style={styles.text}>Física</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#736d6a'}]} 
        onPress={() => {props.setBackColor('#736d6a')}}
        >
          <Text style={styles.text}>Filosofia</Text>
        </TouchableOpacity>
  
      </View>
     
    );
}