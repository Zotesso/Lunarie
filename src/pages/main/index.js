import React, {useState, useEffect} from 'react';
import {View, StatusBar, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {PanGestureHandler, State} from 'react-native-gesture-handler';
import api from '../../services/api';

import styles from './styles';
import Bottom from '../../components/bottom';
import Enemy from '../../components/enemy';
import Menu from '../../components/menu';

export default function Main(){
    let offset = 0;
    const translateY = new Animated.Value(0);

    const [backColor, setBackColor] = useState('#333');
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState([]);

    const onGestureEvent = Animated.event(
        [
      
            {
            nativeEvent:{
              translationY: translateY,
                },
            },
       ],
       {useNativeDriver: true},
    );

    function onHandlerStateChange(event){
        if(event.nativeEvent.oldState == State.ACTIVE){
            const {translationY} = event.nativeEvent;
            let opened = false;

            offset += translationY;
            
            if(translationY <= -100){
                opened = true;
            } else {
                translateY.setValue(offset);
                translateY.setOffset(0);
                offset = 0;
            }

            Animated.timing(translateY, {
                toValue: opened ? -655 : 0,
                duration:200,
                useNativeDriver:true,
            }).start(() => {
                offset = opened ? -655 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }

    async function loadQuestion(){
        if (loading){
            return;
        }

        setLoading(true);
        const response = await api.get('/questions/Matemática/1');
        setQuestion(response.data[0]);

        setLoading(false);
    }
    useEffect(() => {
         loadQuestion();
    }, []);

    function verifyIfCurrectAnswer(answer){
        if(answer === question['rightAnswer']){
            alert('Acertou!');
        }
        else{
            alert('Erouuu!');
        }
    }

    return(
    <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#1d1d1e"/>
          <View style={styles.imageView}>
          
          <Enemy 
          backColor={backColor}
          questionDialog={question['questionDialog']}
          />

          </View>
          <Bottom
            backColor={backColor}
            firstOption={question['fisrtOption']}
            secondOption={question['secondOption']}
            thirdOption={question['thirdOption']}
            fourthOption={question['fourthOption']}
            verifyIfCurrectAnswer={verifyIfCurrectAnswer}
          />
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}
            >
                 <Animated.View
                    style={[{ 
                        position:'absolute',
                        height:'96%',
                        zIndex:50,
                        bottom:'-90%',
                        alignItems: 'center',
                        opacity: translateY.interpolate({
                            inputRange:[-300,0],
                            outputRange:[1,0.7],
                        }),
                        transform: [{
                            translateY:translateY.interpolate({
                                inputRange:[-650 ,0],
                                outputRange:[-650, 0],
                                extrapolate:'clamp',
                            }),
                        }]
                    }]}
                >
                    <Menu 
                        setBackColor={setBackColor}
                    />
                    <Icon name='keyboard-arrow-up' 
          size={30} 
          color='white' 
          style={{zIndex: 60, position:'absolute'}}/>

      
                </Animated.View>
            </PanGestureHandler>
          
    </View>
    );
}