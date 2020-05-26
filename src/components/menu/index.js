import React from 'react'
import {View,Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Menu(){
    return(
     
      <View style={styles.container}>
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#c53030'}]} 
        onPress={() => {alert('Não desenvolvido ainda :)')}}
        >
          <Text style={styles.text}>Inglês</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#4429ba'}]} 
        onPress={() => {alert('Não desenvolvido ainda :)')}}
        >
          <Text style={styles.text}>Português</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#c1bf40'}]} 
        onPress={() => {alert('Não desenvolvido ainda :)')}}
        >
          <Text style={styles.text}>Matemática</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#c17140'}]} 
        onPress={() => {alert('Não desenvolvido ainda :)')}}
        >
          <Text style={styles.text}>Geografia</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#5c3822'}]} 
        onPress={() => {alert('Não desenvolvido ainda :)')}}
        >
          <Text style={styles.text}>História</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#21946d'}]} 
        onPress={() => {alert('Não desenvolvido ainda :)')}}
        >
          <Text style={styles.text}>Biologia</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#486441'}]} 
        onPress={() => {alert('Não desenvolvido ainda :)')}}
        >
          <Text style={styles.text}>Física</Text>
        </TouchableOpacity>
  
        <TouchableOpacity 
        style={[styles.button, {backgroundColor: '#736d6a'}]} 
        onPress={() => {alert('Não desenvolvido ainda :)')}}
        >
          <Text style={styles.text}>Filosofia</Text>
        </TouchableOpacity>
  
      </View>
     
    );
}