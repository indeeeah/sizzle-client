import { create } from 'zustand';
import { User } from '../../entities/user';

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

const joinStore = create<User>(set => ({
  ...initialState,
  setField: (field, value) => set({ [field]: value }),
}));

export default joinStore;
