import React from 'react';
import {View, StatusBar, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {PanGestureHandler, State} from 'react-native-gesture-handler';


import styles from './styles';
import Bottom from '../../components/bottom';
import Enemy from '../../components/enemy';
import Menu from '../../components/menu';

export default function Main(){
    let offset = 0;
    const translateY = new Animated.Value(0);

    const onGestureEvent = Animated.event(
        [
      
            {
            nativeEvent:{
              translationY: translateY,
                },
            }, alert(translateY),
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
                toValue: opened ? -575 : 0,
                duration:200,
                useNativeDriver:true,
            }).start(() => {
                offset = opened ? -575 : 0;
                translateY.setOffset(offset);
                translateY.setValue(0);
            });
        }
    }

    return(
    <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#1d1d1e"/>
          <View style={styles.imageView}>
          
          <Enemy />
          </View>
          <Bottom> </Bottom>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onHandlerStateChange}
            >
                 <Animated.View
                    style={[{ 
                        position:'absolute',
                        height:'96%',
                        zIndex:50,
                        bottom:-565,
                        alignItems: 'center',
                        opacity: translateY.interpolate({
                            inputRange:[-300,0],
                            outputRange:[1,0.7],
                        }),
                        transform: [{
                            translateY:translateY.interpolate({
                                inputRange:[-575 ,0],
                                outputRange:[-575, 0],
                                extrapolate:'clamp',
                            }),
                        }]
                    }]}
                >
                    <Menu />
                    <Icon name='keyboard-arrow-up' 
          size={30} 
          color='white' 
          style={{zIndex: 60, position:'absolute'}}/>

      
                </Animated.View>
            </PanGestureHandler>
          
    </View>
    );
}