import Button, {
  BluePrimaryButton,
  BlueSecondaryButton,
  GreenPrimaryButton,
  GreenSecondaryButton,
  RedPrimaryButton,
  RedSecondaryButton,
  YellowPrimaryButton,
  YellowSecondaryButton
} from '@/components/atoms/buttons/BaseButtons';

export default function Home() {
  return (
    <>
      <div>hello?</div>
      <Button text="Button" />
      <BluePrimaryButton text="Button" />
      <BlueSecondaryButton text="Button" />
      <GreenPrimaryButton text="Button" />
      <GreenSecondaryButton text="Button" />
      <YellowPrimaryButton text="Button" />
      <YellowSecondaryButton text="Button" />
      <RedPrimaryButton text="Button" />
      <RedSecondaryButton text="Button" />
    </>
  );
}
