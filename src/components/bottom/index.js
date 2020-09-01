import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Bottom(props){
    return(
        //Answer Options
          <View style={[styles.bottomContainer, {backgroundColor: props.backColor}]}>
              <View >

                <TouchableOpacity 
                onPress={() => {props.verifyIfCurrectAnswer(props.firstOption)}}
                style={[styles.answerButton, {backgroundColor: props.backColor}]}>
                    <Text style={{color: 'white'}}>A</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {props.verifyIfCurrectAnswer(props.secondOption)}}
                style={[styles.answerButton, {backgroundColor: props.backColor}]}>
                    <Text style={{color: 'white'}}>B</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {props.verifyIfCurrectAnswer(props.thirdOption)}}
                 style={[styles.answerButton, {backgroundColor: props.backColor}]}>
                    <Text style={{color: 'white'}}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {props.verifyIfCurrectAnswer(props.fourthOption)}}
                 style={[styles.answerButton, {backgroundColor: props.backColor}]}>
                    <Text style={{color: 'white'}}>D</Text>
                </TouchableOpacity>

             </View>

                <View style={styles.optionsContainer}>
                    <Text style={styles.textOptions}>{props.firstOption}</Text>
                    <Text style={styles.textOptions}>{props.secondOption}</Text>
                    <Text style={styles.textOptions}>{props.thirdOption}</Text>
                    <Text style={styles.textOptions}>{props.fourthOption}</Text>
                </View>
          </View>
    );
}