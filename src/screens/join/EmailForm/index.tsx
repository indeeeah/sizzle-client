import { SafeAreaView, View } from 'react-native';
import { useStore } from 'zustand';

import joinStore from '../../../shared/zustand/store';
import EamilForm from '../../../shared/join/email';

export default function EamilPage() {
  const { setField } = useStore(joinStore);

  const handleEmail = (email: string) => {
    console.log('email', email);
    setField('email', email);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5 flex-1 justify-between">
        <EamilForm onSubmit={handleEmail} />
      </View>
    </SafeAreaView>
  );
}
