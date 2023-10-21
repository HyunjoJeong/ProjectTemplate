// * primary, secondary is mainly for button color
// * dark is mainly for text color in secondary button
// ! background is base background color but NOT ESSENTIAL
// * https://www.figma.com/file/RQBbRqAAlL8e5JrqycKc6V/ADS-Foundations-(Community)?node-id=2%3A23&mode=dev

type color = 'red' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'neutral';
type base = { primary?: string; secondary?: string; dark?: string; background?: string };
type Colors = Record<color, base & { [key: number]: string }>;

export const colors: Colors = {
  red: {
    // * usage: Critical/Error Message.. etc
    primary: '#D21C1C',
    secondary: '#F8E2E2',
    dark: '#970C0C',
    background: '#FCF3F3',
    700: '#BF2600',
    600: '#DE350B',
    500: '#FF5630',
    400: '#FF7452',
    300: '#FF8F73',
    200: '#FFBDAD',
    100: '#FFEBE6'
  },
  yellow: {
    // * usage: Warning Message.. etc
    primary: '#DF7B00',
    secondary: '#FCECDA',
    dark: '#BA5D00',
    background: '#FEF7F1',
    700: '#FF8B00',
    600: '#FF991F',
    500: '#FFAB00',
    400: '#FFC400',
    300: '#FFE380',
    200: '#FFF0B3',
    100: '#FFFAE6'
  },
  green: {
    // * usage: Success Message.. etc
    primary: '#28A138',
    secondary: '#E1EFE2',
    dark: '#2D7738',
    background: '#F2F8F2',
    700: '#006644',
    600: '#00875A',
    500: '#36B37E',
    400: '#57D9A3',
    300: '#79F2C0',
    200: '#79F2C0',
    100: '#E3FCEF'
  },
  teal: {
    background: '#E6FCFF',
    700: '#008DA6',
    600: '#00A3BF',
    500: '#00B8D9',
    400: '#00C7E6',
    300: '#79E2F2',
    200: '#B3F5FF',
    100: '#E6FCFF'
  },
  blue: {
    // * usage: Inform Message.. etc
    primary: '#0172CB',
    secondary: '#DEF0FC',
    dark: '#005AA3',
    background: '#F1F8FE',
    700: '#0747A6',
    600: '#0052CC',
    500: '#0065FF',
    400: '#2684FF',
    300: '#4C9AFF',
    200: '#B3D4FF',
    100: '#DEEBFF'
  },
  purple: {
    background: '#EAE6FF',
    700: '#403294',
    600: '#5243AA',
    500: '#6554C0',
    400: '#8777D9',
    300: '#998DD9',
    200: '#C0B6F2',
    100: '#EAE6FF'
  },
  neutral: {
    background: '#F4F5F7',
    900: '#091E42',
    800: '#172B4D',
    700: '#253858',
    600: '#344563',
    500: '#42526E',
    400: '#505F79',
    300: '#5E6C84',
    200: '#6B778C',
    100: '#7A869A',
    90: '#8993A4',
    80: '#97A0AF',
    70: '#A5ADBA',
    60: '#B3BAC5',
    50: '#C1C7D0',
    40: '#DFE1E6',
    30: '#EBECF0',
    20: '#F4F5F7',
    10: '#FAFBFC',
    0: '#FFFFFF'
  }
};
