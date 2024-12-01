import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { JoinScreen } from '../../screens';

export type JoinParamList = {
  join: { tab: number };
};

const Stack = createNativeStackNavigator<JoinParamList>();

const JoinNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitle: '회원가입' }}>
      <Stack.Screen
        name="join"
        component={JoinScreen}
        options={{
          headerShown: false,
        }}
        initialParams={{ tab: 1 }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default JoinNav;
