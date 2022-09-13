import {
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  BackHandler
} from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from '../styles/register_page_styles'
import RegisterText from '../components/register_page_components/RegisterText'
import RegisterBox from '../components/register_page_components/RegisterBox'
import { useFocusEffect } from '@react-navigation/native'

const RegisterPage = ({ navigation }) => {

  useEffect(() => {
    //Status Bar => Hidden
    StatusBar.setHidden(true);
  });

  // on homepage pressedback action => exit 
  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        BackHandler.exitApp();
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );


  const backgroundLinear = ['#36d1dc', '#5b86e5']
  const start = { x: 0, y: 1 }
  const end = { x: 1, y: 1 }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} touchSoundDisabled={true}>
      <LinearGradient
        colors={backgroundLinear}
        start={start}
        end={end}
        style={styles.registerPage}>
        <RegisterText />
        <RegisterBox navigation={navigation} />
      </LinearGradient >
    </TouchableWithoutFeedback>
  )
}

export default RegisterPage
