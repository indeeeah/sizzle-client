import { useState } from 'react';
import JoinForm from '../../../widgets/ui/joinForm';
import Input from '../../ui/Input';
import { Profile } from '../../../entities/user';

type Props = {
  onSubmit: (profile: Profile) => void;
};

export default function ProfileForm({ onSubmit }: Props) {
  const [profile, setProfile] = useState<Profile>({
    name: '',
    nickname: '',
    introduce: '',
  });

  // const handleEmail = (
  //   event: NativeSyntheticEvent<TextInputChangeEventData>,
  // ) => {
  //   const { text } = event.nativeEvent;

  //   const isValidEmail = EMAIL_REGEX.test(text);

  //   if (isValidEmail) {
  //     setEmail(text);
  //   } else {
  //     setEmail('');
  //   }
  // };

  const handleName = (name: string) => {
    setProfile({ ...profile, name: name });
  };

  const handleNickname = (nickname: string) => {
    setProfile({ ...profile, nickname: nickname });
  };

  const handleIntroduce = (text: string) => {
    setProfile({ ...profile, introduce: text });
  };

  const onSubmitProfile = () => {
    onSubmit(profile);
  };

  return (
    <>
      <JoinForm
        icon="person"
        title="프로필을 입력하세요"
        description="아래 정보로 커뮤니티를 이용하실 수 있습니다."
        onsubmit={onSubmitProfile}
        disabled={!profile}
      >
        <Input
          placeholder="이름"
          autoCapitalize="none"
          autoFocus
          onChangeText={handleName}
        />
        <Input
          placeholder="닉네임"
          autoCapitalize="none"
          autoFocus
          onChangeText={handleNickname}
        />
        <Input
          placeholder="자기소개 한줄"
          autoCapitalize="none"
          autoFocus
          onChangeText={handleIntroduce}
        />
      </JoinForm>
    </>
  );
}
