import { CSSProperties } from 'react';

const Button = ({
  primary,
  backgroundColor,
  label,
  size
}: {
  primary?: boolean;
  backgroundColor?: CSSProperties['backgroundColor'];
  label: string;
  size?: 'small' | 'medium' | 'large';
}) => {
  return (
    <button
      css={{
        backgroundColor: backgroundColor,
        padding: size === 'small' ? '10px' : '20px',
        color: 'red',
        border: 'none'
      }}
    >
      {label}
    </button>
  );
};

export default Button;
