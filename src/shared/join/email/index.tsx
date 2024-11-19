import { ChangeEvent } from 'react';
import { User } from '../../../entities/user';
import JoinForm from '../../../widgets/ui/joinForm';
import Input from '../../ui/Input';

type Props = {
  user: User;
  onSubmit: (email: string) => void;
};

export default function EmailPage({ user, onSubmit }: Props) {
  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const { text } = event.nativeEvent;
    onSubmit(text);
  };

  return (
    <>
      <JoinForm
        icon="email"
        title="이메일로 계속하기"
        description="이메일로 로그인 하거나 가입하세요."
        onsubmit={onSubmit}
      >
        <Input
          type="email"
          placeholder="이메일 주소"
          autoCapitalize="none"
          returnKeyType="next"
          inputMode="email"
          autoFocus
          onChange={handleEmail}
        />
      </JoinForm>
    </>
  );
}
