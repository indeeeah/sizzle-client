import Fontisto from '@expo/vector-icons/Fontisto';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { STATUSBAR_HEIGHT } from '../../shared/constans';

export default function Index() {
  const [email, setEmail] = useState('');

  const onChangeEmail = text => {
    setEmail(text);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5 flex-1 justify-between">
        <View className="gap-5">
          <View className="bg-gray-200 rounded-full flex-row w-10 items-center justify-center">
            <Fontisto
              name="email"
              size={24}
              color="gray"
              style={{
                padding: 8,
              }}
            />
          </View>
          <View className="gap-1">
            <Text className="text-title1 font-semibold">이메일로 계속하기</Text>
            <Text className="text-deepGray">
              이메일로 로그인 하거나 가입하세요.
            </Text>
          </View>
          <TextInput
            value={email}
            onChangeText={onChangeEmail}
            type="email"
            placeholder="이메일 주소"
            className="rounded-md p-4 bg-mediumGray"
            autoCapitalize="none"
            returnKeyType="next"
            inputMode="email"
            autoFocus
          />
        </View>

        <KeyboardAvoidingView
          className="bg-white"
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={
            Platform.OS === 'ios' ? STATUSBAR_HEIGHT + 50 : 20
          }
        >
          <TouchableOpacity className="rounded-full overflow-hidden">
            <Text className="bg-black text-white text-center text-title3 font-bold py-3">
              다음
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
