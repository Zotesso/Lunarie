import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Bottom(){
    return(
        //Answer Options
          <View style={styles.bottomContainer}>
              <View >

                <TouchableOpacity style={styles.answerButton}>
                    <Text style={{color: 'white'}}>A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answerButton}>
                    <Text style={{color: 'white'}}>B</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answerButton}>
                    <Text style={{color: 'white'}}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.answerButton}>
                    <Text style={{color: 'white'}}>D</Text>
                </TouchableOpacity>

             </View>

                <View style={styles.optionsContainer}>
                    <Text style={styles.textOptions}>Gastrópodes, bivalves e cefalópodes.</Text>
                    <Text style={styles.textOptions}>Quilópodes, diplópodes e crustáceos.</Text>
                    <Text style={styles.textOptions}>Hidrozoários, cifozoários e antozoários.</Text>
                    <Text style={styles.textOptions}>Poliquetas, oligoquetas e hirudíneos.</Text>
                </View>
          </View>
    );
}