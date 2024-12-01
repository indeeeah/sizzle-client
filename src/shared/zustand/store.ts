import { User } from '../../entities/user';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserField = {
  updateUser: (user: Partial<User>) => void;
};

const initialState: User = {
  id: '',
  name: '',
  email: '',
  nickname: '',
  social: 'KAKAO',
  introduce: '',
  thumbnailPath: '',
  password: '',
};

const joinStore = create<UserField>()(
  persist(
    set => ({
      updateUser: async (value: Partial<User>) => {
        set(state => ({
          ...state,
          ...initialState,
          ...value,
        }));
        await AsyncStorage.setItem(
          'userStore',
          JSON.stringify({ ...initialState, ...value }),
        );
      },
    }),
    {
      name: 'userStore',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default joinStore;
