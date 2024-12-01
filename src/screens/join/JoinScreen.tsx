import { SafeAreaView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Profile, User } from '../../entities/user';
import EamilForm from '../../shared/join/email';
import ProfileForm from '../../shared/join/profile';

import { RouteNames } from '../../../routes';
import { useLocalStorage } from '../../hooks/useStorage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RouteParams = {
  tab?: number;
};

type JoinRouteProp = RouteProp<{ params: RouteParams }, 'params'>;

type RootStackParamList = {
  [RouteNames.JOIN]: { tab: ProgressTab };
};

enum ProgressTab {
  EMAIL = 1,
  PROFILE = 2,
  THUMBNAIL = 3,
  DONE = 4,
}

interface Progress {
  tab: ProgressTab;
}

const PROGRESS_LIST: Progress[] = [
  { tab: ProgressTab.EMAIL },
  { tab: ProgressTab.PROFILE },
  { tab: ProgressTab.THUMBNAIL },
  { tab: ProgressTab.DONE },
];

type Props = NativeStackNavigationProp<RootStackParamList>;

export default function JoinScreen() {
  const route = useRoute<JoinRouteProp>();
  const navigation = useNavigation<Props>();

  const [storage, setStorage] = useLocalStorage<Partial<User>>('userStore');

  const currentTab = Number(route.params?.tab || 0);
  const progress = PROGRESS_LIST.find(item => item.tab === currentTab);

  const handleEmail = (email: string) => {
    const updatedUser = { ...storage, email };
    navigation.navigate(RouteNames.JOIN, {
      tab: ProgressTab.PROFILE,
    });
    setStorage(updatedUser);
  };

  const handleProfile = (profile: Profile) => {
    const updatedUser = { ...storage, profile: { ...profile } };
    setStorage(updatedUser);
  };

  const renderComponent = (tab: ProgressTab) => {
    switch (tab) {
      case ProgressTab.EMAIL:
        return <EamilForm onSubmit={handleEmail} />;
      case ProgressTab.PROFILE:
        return <ProfileForm onSubmit={handleProfile} />;
      default:
        return <div />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-5 flex-1 justify-between">
        {progress ? renderComponent(progress.tab) : <></>}
      </View>
    </SafeAreaView>
  );
}
