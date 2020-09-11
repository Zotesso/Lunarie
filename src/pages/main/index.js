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

    const [questionNumber, setQuestionNumber] = useState(1);
    const [backColor, setBackColor] = useState('#333');
    const [question, setQuestion] = useState([]);
    const [subjects, setSubjects] = useState([4]);
    const [actualSubject, setActualSubject] = useState('Matemática');
    const [answered, setAnswered] = useState(false);
    const [questionImg, setQuestionimg] = useState('');

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
        let actualTotalSubjectQuestions;

        subjects.map((subject) =>{
            if(subject['subject'] === actualSubject){{
                actualTotalSubjectQuestions = subject['total'];
            }}
        })

        if(!(questionNumber > actualTotalSubjectQuestions)){
        const response = await api.get(`/questions/${actualSubject}/${questionNumber}`);

        setQuestion(response.data[0]);
        setQuestionimg(response.data['image_url']);
        }
    }

    useEffect(() => {
        async function loadQuestionsTotalNumber(){
            try{
            const response = await api.get(`/questions/total`);
            let tmpArray = [];
    
            tmpArray = response.data;
        
            setSubjects(tmpArray);
            return response;
            }
            catch(error){
                return error;
            }
        }

        loadQuestionsTotalNumber();
  }, []);

    useEffect(() => {
        setAnswered(false);

        let nextQuestionNumber = questionNumber;
        let actualTotalSubjectQuestions;

        subjects.map((subject) =>{
            if(subject['subject'] === actualSubject){{
                actualTotalSubjectQuestions = subject['total'];
            }}
        })

        if(!isNaN(actualTotalSubjectQuestions)){
            if(actualTotalSubjectQuestions != 1){
                nextQuestionNumber = Math.floor(Math.random() * actualTotalSubjectQuestions) + 1;
            }
        

        if(nextQuestionNumber > actualTotalSubjectQuestions){
            nextQuestionNumber = actualTotalSubjectQuestions;
        }
        setQuestionNumber(nextQuestionNumber);
        }
    }, [actualSubject, answered]);
        
    useEffect(() => {
        loadQuestion();
    }, [questionNumber, actualSubject]);

    function verifyIfCurrectAnswer(answer){
        if(answer === question['rightAnswer']){
            alert('Acertou!');
            setAnswered(true);
        }
        else{
            alert('Erouuu!');
            setAnswered(true);
        }
    }

    return(
    <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#1d1d1e"/>
          <View style={styles.imageView}>
          
          <Enemy 
          backColor={backColor}
          questionDialog={question['questionDialog']}
          image={questionImg}
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
                        bottom:'-92%',
                        alignItems: 'center',
                        opacity: translateY.interpolate({
                            inputRange:[-300,0],
                            outputRange:[1,0.7],
                        }),
                        transform: [{
                            translateY:translateY.interpolate({
                                inputRange:[-350 ,0],
                                outputRange:[-670, 0],
                                extrapolate:'clamp',
                            }),
                        }]
                    }]}
                >
                    <Menu 
                        setBackColor={setBackColor}
                        setActualSubject={setActualSubject}
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