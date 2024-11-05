import { SafeAreaView, Text, TextInput, View } from 'react-native';

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <Text className="text-lg">이메일로 계속하기</Text>
        <Text>이메일로 로그인 하거나 가입하세요.</Text>
        <TextInput type="email" placeholder="이메일 주소" />
      </View>
    </SafeAreaView>
  );
}
