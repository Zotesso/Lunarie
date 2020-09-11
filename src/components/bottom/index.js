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
                    <Text style={[styles.option,{color: 'white'}]}>A)</Text>
                    <Text style={styles.textOptions}>{props.firstOption}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => {props.verifyIfCurrectAnswer(props.secondOption)}}
                style={[styles.answerButton, {backgroundColor: props.backColor}]}>
                    <Text style={[styles.option,{color: 'white'}]}>B)</Text>
                    <Text style={styles.textOptions}>{props.secondOption}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => {props.verifyIfCurrectAnswer(props.thirdOption)}}
                 style={[styles.answerButton, {backgroundColor: props.backColor}]}>
                    <Text style={[styles.option,{color: 'white'}]}>C)</Text>
                    <Text style={styles.textOptions}>{props.thirdOption}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => {props.verifyIfCurrectAnswer(props.fourthOption)}}
                 style={[styles.answerButton, {backgroundColor: props.backColor}]}>
                    <Text style={[styles.option,{color: 'white'}]}>D)</Text>
                    <Text style={styles.textOptions}>{props.fourthOption}</Text>
                </TouchableOpacity>

             </View>

 
          </View>
    );
}