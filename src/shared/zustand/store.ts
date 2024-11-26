import { create } from 'zustand';
import { User } from '../../entities/user';

type UserField = {
  setField: (field: keyof User, value: string) => void;
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

const joinStore = create<UserField>(set => ({
  ...initialState,
  setField: (field: keyof User, value: string) => set({ [field]: value }),
}));

export default joinStore;
