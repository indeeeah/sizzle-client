import { ChangeEvent, useState } from 'react';
import JoinForm from '../../../widgets/ui/joinForm';
import Input from '../../ui/Input';

type Props = {
  onSubmit: (email: string) => void;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EamilForm({ onSubmit }: Props) {
  const [email, setEmail] = useState('');

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const { text } = event.nativeEvent;
    const isValidEmail = EMAIL_REGEX.test(text);

    if (isValidEmail) {
      setEmail(text);
    } else {
      setEmail('');
    }
  };

  const onSubmitEmail = () => {
    onSubmit(email);
  };

  return (
    <>
      <JoinForm
        icon="email"
        title="이메일로 계속하기"
        description="이메일로 로그인 하거나 가입하세요."
        onsubmit={onSubmitEmail}
        disabled={!email}
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
