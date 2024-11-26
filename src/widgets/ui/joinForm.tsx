import { ReactNode } from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { STATUSBAR_HEIGHT } from '../../shared/constans';

type Props = {
  icon: string;
  title: string;
  description: string;
  onsubmit: () => void;
  disabled?: boolean;
  children: ReactNode;
};

export default function JoinForm({
  icon = 'email',
  title = '',
  description = '',
  onsubmit,
  disabled,
  children,
}: Props) {
  return (
    <>
      <View className="gap-5">
        <View className="bg-gray-200 rounded-full flex-row w-10 items-center justify-center">
          <Fontisto
            name={icon}
            size={24}
            color="gray"
            style={{
              padding: 8,
            }}
          />
        </View>
        <View className="gap-1">
          <Text className="text-title1 font-semibold">{title}</Text>
          <Text className="text-deepGray">{description}</Text>
        </View>
        {children}
      </View>

      <KeyboardAvoidingView
        className="bg-white"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? STATUSBAR_HEIGHT + 50 : 20
        }
      >
        <TouchableOpacity
          className={`rounded-full overflow-hidden ${disabled ? 'bg-divider' : 'bg-black'}`}
          onPress={onsubmit}
          disabled={disabled}
        >
          <Text className="text-white text-center text-title3 font-bold py-3">
            다음
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
  );
}
