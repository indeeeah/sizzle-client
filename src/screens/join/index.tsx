import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { User } from '../../entities/user';
import EmailPage from '../../shared/join/email';

export default function Index() {
  const [userForm, setUserForm] = useState<User>({
    email: '',
    introduce: '',
    name: '',
    nickname: '',
    social: 'KAKAO',
    thumbnailPath: '',
  });

  const setEmail = (email: string) => setUserForm({ ...userForm, email });
  console.log('userForm', userForm);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5 flex-1 justify-between">
        <EmailPage onSubmit={setEmail} user={userForm} />
      </View>
    </SafeAreaView>
  );
}
