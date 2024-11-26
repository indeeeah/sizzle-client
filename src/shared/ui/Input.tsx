import React, { forwardRef, memo } from 'react';
import { TextInput } from 'react-native';

//TODO: TextInput type any 제거 해야 합니다.
type InputProps = any;

type Props = InputProps & {
  className?: string;
};

const Input = forwardRef<InputProps, React.PropsWithChildren<Props>>(
  ({ ...props }, ref) => {
    const { className } = props;

    return (
      <TextInput
        {...props}
        {...{ ref }}
        className={`${className} outline-none rounded-md p-4 bg-mediumGray`}
      />
    );
  },
);

export default memo(Input);
