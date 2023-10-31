import Button, {
  BluePrimaryButton,
  BlueSecondaryButton,
  GreenPrimaryButton,
  GreenSecondaryButton,
  RedPrimaryButton,
  RedSecondaryButton,
  YellowPrimaryButton,
  YellowSecondaryButton
} from 'atoms/buttons/BaseButtons';

export default function Home() {
  return (
    <main css={{ minHeight: '100vh' }}>
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
    </main>
  );
}
