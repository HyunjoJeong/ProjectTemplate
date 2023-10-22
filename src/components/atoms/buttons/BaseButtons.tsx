import { CSSProperties } from 'react';
import { colors } from '@/styles/colors';

export const Button = ({
  text,
  primary,
  color,
  backgroundColor,
  padding,
  margin,
  border,
  borderRadius,
  onClick,
  ...props
}: {
  text: string;
  primary?: boolean;
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  padding?: CSSProperties['padding'];
  margin?: CSSProperties['margin'];
  border?: CSSProperties['border'];
  borderRadius?: CSSProperties['borderRadius'];
  onClick?: () => void;
}) => {
  return (
    <button
      css={{
        color: primary ? '#FFF' : color || colors.neutral.dark,
        backgroundColor: backgroundColor || colors.neutral.background,
        padding: padding || '8px 10px',
        margin: margin || '0px 2px',
        border: border || 'none',
        borderRadius: borderRadius || '6px',
        cursor: 'pointer',
        ':hover': { boxShadow: `0 0 0 1px ${backgroundColor || colors.neutral.background}` },
        ':active': { filter: 'brightness(92%)', boxShadow: 'none' },
        ...props
      }}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;

type ButtonProps = {
  text: string;
  padding?: CSSProperties['padding'];
  margin?: CSSProperties['margin'];
  border?: CSSProperties['border'];
  borderRadius?: CSSProperties['borderRadius'];
  onClick?: () => void;
};

export const BluePrimaryButton = ({
  text,
  padding,
  margin,
  border,
  borderRadius,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.blue.primary}
      primary
      {...props}
    />
  );
};

export const RedPrimaryButton = ({
  text,
  padding,
  margin,
  border,
  borderRadius,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.red.primary}
      primary
      {...props}
    />
  );
};

export const YellowPrimaryButton = ({
  text,
  padding,
  margin,
  border,
  borderRadius,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.yellow.primary}
      primary
      {...props}
    />
  );
};

export const GreenPrimaryButton = ({
  text,
  padding,
  margin,
  border,
  borderRadius,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.green.primary}
      primary
      {...props}
    />
  );
};

export const BlueSecondaryButton = ({
  text,
  padding,
  margin,
  border,
  borderRadius,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.blue.secondary}
      color={colors.blue.dark}
      {...props}
    />
  );
};

export const RedSecondaryButton = ({
  text,
  padding,
  margin,
  border,
  borderRadius,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.red.secondary}
      color={colors.red.dark}
      {...props}
    />
  );
};

export const YellowSecondaryButton = ({
  text,
  padding,
  margin,
  border,
  borderRadius,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.yellow.secondary}
      color={colors.yellow.dark}
      {...props}
    />
  );
};

export const GreenSecondaryButton = ({
  text,
  padding,
  margin,
  border,
  borderRadius,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.green.secondary}
      color={colors.green.dark}
      {...props}
    />
  );
};
