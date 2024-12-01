export interface User extends Profile {
  id: string;
  email: string;
  social?: string;
  thumbnailPath?: string;
  password: string;
}

export interface Profile {
  name: string;
  nickname: string;
  introduce?: string;
}
