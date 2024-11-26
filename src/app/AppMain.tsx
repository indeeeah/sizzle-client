import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../shared/tanstackquery/tanstackQuery';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, RouteNames } from '../../routes';
import JoinScreen from '../screens/join/EmailForm';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function main() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={RouteNames.JOIN}
            component={JoinScreen}
            options={{
              headerShown: false,
              title: '회원가입',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
