import React, { forwardRef, memo } from 'react';
import { TextInput } from 'react-native';

type InputProps = React.HTMLProps<HTMLInputElement>;

type Props = InputProps & {
  className?: string;
};

const Input = forwardRef<HTMLInputElement, React.PropsWithChildren<Props>>(
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
