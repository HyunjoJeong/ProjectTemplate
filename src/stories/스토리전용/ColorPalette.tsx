import { colors } from '@/styles/colors';
import { CSSProperties } from 'react';

const ColorPalette = () => {
  return (
    <>
      <div css={{ marginBottom: '10px', borderBottom: '3px solid #f0f1f2' }}>
        <div css={{ display: 'flex' }}>
          <p css={{ width: '70px', textAlign: 'center' }}>RED</p>
          <Color color={colors.red[700]} text="700" />
          <Color color={colors.red[600]} text="600" />
          <Color color={colors.red[500]} text="500" />
          <Color color={colors.red[400]} text="400" />
          <Color color={colors.red[300]} text="300" />
          <Color color={colors.red[200]} text="200" />
          <Color color={colors.red[100]} text="100" />
        </div>
      </div>
      <div css={{ marginBottom: '10px', borderBottom: '3px solid #f0f1f2' }}>
        <div css={{ display: 'flex' }}>
          <p css={{ width: '70px', textAlign: 'center' }}>YELLOW</p>
          <Color color={colors.yellow[700]} text="700" />
          <Color color={colors.yellow[600]} text="600" />
          <Color color={colors.yellow[500]} text="500" />
          <Color color={colors.yellow[400]} text="400" />
          <Color color={colors.yellow[300]} text="300" />
          <Color color={colors.yellow[200]} text="200" />
          <Color color={colors.yellow[100]} text="100" />
        </div>
      </div>
      <div css={{ marginBottom: '10px', borderBottom: '3px solid #f0f1f2' }}>
        <div css={{ display: 'flex' }}>
          <p css={{ width: '70px', textAlign: 'center' }}>GREEN</p>
          <Color color={colors.green[700]} text="700" />
          <Color color={colors.green[600]} text="600" />
          <Color color={colors.green[500]} text="500" />
          <Color color={colors.green[400]} text="400" />
          <Color color={colors.green[300]} text="300" />
          <Color color={colors.green[200]} text="200" />
          <Color color={colors.green[100]} text="100" />
        </div>
      </div>
      <div css={{ marginBottom: '10px', borderBottom: '3px solid #f0f1f2' }}>
        <div css={{ display: 'flex' }}>
          <p css={{ width: '70px', textAlign: 'center' }}>BLUE</p>
          <Color color={colors.blue[700]} text="700" />
          <Color color={colors.blue[600]} text="600" />
          <Color color={colors.blue[500]} text="500" />
          <Color color={colors.blue[400]} text="400" />
          <Color color={colors.blue[300]} text="300" />
          <Color color={colors.blue[200]} text="200" />
          <Color color={colors.blue[100]} text="100" />
        </div>
      </div>
      <div css={{ marginBottom: '10px', borderBottom: '3px solid #f0f1f2' }}>
        <div css={{ display: 'flex' }}>
          <p css={{ width: '70px', textAlign: 'center' }}>TEAL</p>
          <Color color={colors.teal[700]} text="700" />
          <Color color={colors.teal[600]} text="600" />
          <Color color={colors.teal[500]} text="500" />
          <Color color={colors.teal[400]} text="400" />
          <Color color={colors.teal[300]} text="300" />
          <Color color={colors.teal[200]} text="200" />
          <Color color={colors.teal[100]} text="100" />
        </div>
      </div>
      <div css={{ marginBottom: '10px', borderBottom: '3px solid #f0f1f2' }}>
        <div css={{ display: 'flex' }}>
          <p css={{ width: '70px', textAlign: 'center' }}>PURPLE</p>
          <Color color={colors.purple[700]} text="700" />
          <Color color={colors.purple[600]} text="600" />
          <Color color={colors.purple[500]} text="500" />
          <Color color={colors.purple[400]} text="400" />
          <Color color={colors.purple[300]} text="300" />
          <Color color={colors.purple[200]} text="200" />
          <Color color={colors.purple[100]} text="100" />
        </div>
      </div>
      <div css={{ marginBottom: '10px', borderBottom: '3px solid #f0f1f2' }}>
        <div css={{ display: 'flex' }}>
          <p css={{ width: '70px', textAlign: 'center' }}>NEUTRAL</p>
          <Color color={colors.neutral[900]} text="900" />
          <Color color={colors.neutral[800]} text="800" />
          <Color color={colors.neutral[700]} text="700" />
          <Color color={colors.neutral[600]} text="600" />
          <Color color={colors.neutral[500]} text="500" />
          <Color color={colors.neutral[400]} text="400" />
          <Color color={colors.neutral[300]} text="300" />
          <Color color={colors.neutral[200]} text="200" />
          <Color color={colors.neutral[100]} text="100" />
          <Color color={colors.neutral[90]} text="90" />
          <Color color={colors.neutral[80]} text="80" />
          <Color color={colors.neutral[70]} text="70" />
          <Color color={colors.neutral[60]} text="60" />
          <Color color={colors.neutral[50]} text="50" />
          <Color color={colors.neutral[40]} text="40" />
          <Color color={colors.neutral[30]} text="30" />
          <Color color={colors.neutral[20]} text="20" />
          <Color color={colors.neutral[10]} text="10" />
        </div>
      </div>
      <div css={{ marginBottom: '10px', borderBottom: '3px solid #f0f1f2' }}>
        <p css={{ width: '70px', textAlign: 'center' }}>BUTTON</p>
        <div css={{ display: 'flex' }}>
          <p css={{ width: '70px', textAlign: 'center' }}>RED</p>
          <Color color={colors.red.primary} text="primary" />
          <Color color={colors.red.secondary} text="secondary" />
          <Color color={colors.red.dark} text="dark" />
          <Color color={colors.red.background} text="background" />
        </div>
        <div css={{ display: 'flex' }}>
          <p css={{ width: '70px', textAlign: 'center' }}>YELLOW</p>
          <Color color={colors.yellow.primary} text="primary" />
          <Color color={colors.yellow.secondary} text="secondary" />
          <Color color={colors.yellow.dark} text="dark" />
          <Color color={colors.yellow.background} text="background" />
        </div>
        <div css={{ display: 'flex' }}>
          <p css={{ width: '70px', textAlign: 'center' }}>GREEN</p>
          <Color color={colors.green.primary} text="primary" />
          <Color color={colors.green.secondary} text="secondary" />
          <Color color={colors.green.dark} text="dark" />
          <Color color={colors.green.background} text="background" />
        </div>
        <div css={{ display: 'flex' }}>
          <p css={{ width: '70px', textAlign: 'center' }}>BLUE</p>
          <Color color={colors.blue.primary} text="primary" />
          <Color color={colors.blue.secondary} text="secondary" />
          <Color color={colors.blue.dark} text="dark" />
          <Color color={colors.blue.background} text="background" />
        </div>
      </div>
    </>
  );
};

export default ColorPalette;

const Color = ({ color, text }: { color: CSSProperties['color']; text: string }) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        width: '70px',
        marginBottom: '4px',
        p: {
          margin: '0px auto',
          width: 'fit-content',
          fontSize: '14px'
        }
      }}
    >
      <div
        css={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: color,
          margin: '2px auto'
        }}
      />
      <p>{text}</p>
    </div>
  );
};
