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

const joinStore = create(set => ({
  ...initialState,
  setField: (field: keyof typeof initialState, value: any) =>
    set({ [field]: value }),
}));

export default joinStore;
