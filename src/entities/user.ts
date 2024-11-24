export interface User {
  id: string;
  name: string;
  email: string;
  nickname: string;
  social?: string;
  introduce?: string;
  thumbnailPath?: string;
  password: string;
}
