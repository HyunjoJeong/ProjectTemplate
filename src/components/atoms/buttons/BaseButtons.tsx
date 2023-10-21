import { CSSProperties } from 'react';
import { colors } from '@/styles/colors';

export const Button = ({
  text,
  color,
  backgroundColor,
  padding,
  borderRadius,
  onClick
}: {
  text: string;
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  padding?: CSSProperties['padding'];
  borderRadius?: CSSProperties['borderRadius'];
  onClick?: () => void;
}) => {
  return (
    <button
      css={{
        color: color || colors.neutral[900],
        backgroundColor: backgroundColor || colors.neutral.background,
        padding: padding || '10px',
        border: 'none',
        borderRadius: borderRadius || '6px'
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

type ButtonProps = {
  text: string;
  padding?: CSSProperties['padding'];
  borderRadius?: CSSProperties['borderRadius'];
  onClick?: () => void;
};

export const BluePrimaryButton = ({ text, padding, borderRadius, onClick }: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.blue.primary}
      color="#FFF"
    />
  );
};

export const RedPrimaryButton = ({ text, padding, borderRadius, onClick }: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.red.primary}
      color="#FFF"
    />
  );
};

export const YellowPrimaryButton = ({ text, padding, borderRadius, onClick }: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.yellow.primary}
      color="#FFF"
    />
  );
};

export const GreenPrimaryButton = ({ text, padding, borderRadius, onClick }: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.green.primary}
      color="#FFF"
    />
  );
};

export const BlueSecondaryButton = ({ text, padding, borderRadius, onClick }: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.blue.secondary}
      color={colors.blue.dark}
    />
  );
};

export const RedSecondaryButton = ({ text, padding, borderRadius, onClick }: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.red.secondary}
      color={colors.red.dark}
    />
  );
};

export const YellowSecondaryButton = ({ text, padding, borderRadius, onClick }: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.yellow.secondary}
      color={colors.yellow.dark}
    />
  );
};

export const GreenSecondaryButton = ({ text, padding, borderRadius, onClick }: ButtonProps) => {
  return (
    <Button
      text={text}
      padding={padding}
      borderRadius={borderRadius}
      onClick={onClick}
      backgroundColor={colors.green.secondary}
      color={colors.green.dark}
    />
  );
};
