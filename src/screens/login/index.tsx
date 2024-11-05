import { SafeAreaView, Text, TextInput, View } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5">
        <Fontisto name="email" size={24} color="black" />
        <Text className="text-lg">이메일로 계속하기</Text>
        <Text>이메일로 로그인 하거나 가입하세요.</Text>
        <TextInput type="email" placeholder="이메일 주소" />
      </View>
    </SafeAreaView>
  );
}
