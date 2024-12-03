import { useState } from 'react';
import JoinForm from '../../../widgets/ui/joinForm';
import Input from '../../ui/Input';
import { Profile } from '../../../entities/user';
import { NAME_REGEX } from '../../lib';

type Props = {
  onSubmit: (profile: Profile) => void;
};

export default function ProfileForm({ onSubmit }: Props) {
  const [profile, setProfile] = useState<Profile>({
    name: '',
    nickname: '',
    introduce: '',
  });

  const handleProfileInput = (text: string, type: string) => {
    switch (type) {
      case 'name':
        text = text.replace(NAME_REGEX, '');
        break;
      case 'nickname':
        text = text.replace(NAME_REGEX, '');
        break;
      case 'introduce':
        text = text.replace(/^[가-힣a-zA-Z0-9.,!? ]{1,20}$/, '');

        break;
      default:
        throw new Error(`Unsupported type: ${type}`);
    }

    setProfile(prev => ({ ...prev, [type]: text }));
  };

  const onSubmitProfile = () => {
    const { name, nickname, introduce } = profile;
    if (!name || !nickname || !introduce) {
      return;
    }

    onSubmit(profile);
  };

  return (
    <>
      <JoinForm
        icon="person"
        title="프로필을 입력하세요"
        description="아래 정보로 커뮤니티를 이용하실 수 있습니다."
        onsubmit={onSubmitProfile}
        disabled={!profile.name || !profile.nickname}
      >
        <Input
          placeholder="이름"
          autoCapitalize="none"
          autoFocus
          maxLength={10}
          value={profile.name}
          onChangeText={(text: string) => handleProfileInput(text, 'name')}
        />
        <Input
          placeholder="닉네임"
          autoCapitalize="none"
          maxLength={10}
          value={profile.nickname}
          onChangeText={(text: string) => handleProfileInput(text, 'nickname')}
        />
        <Input
          placeholder="자기소개 한줄"
          autoCapitalize="none"
          maxLength={20}
          value={profile.introduce}
          onChangeText={(text: string) => handleProfileInput(text, 'introduce')}
        />
      </JoinForm>
    </>
  );
}
