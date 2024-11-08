import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import { setCustomText } from 'react-native-global-props';

import AppMain from './src/app/AppMain';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        pretendard: require('./assets/Fonts/Pretendard-Medium.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const customTextProps = {
    style: {
      fontFamily: 'notosans',
    },
  };
  setCustomText(customTextProps);

  return (
    <>
      <AppMain />
    </>
  );
}
