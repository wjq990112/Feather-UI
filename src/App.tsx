import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/Button';

function App() {
  return (
    <div>
      <Button type={ButtonType.Link} href="https://jack-wjq.top">
        你好
      </Button>
      <Button type={ButtonType.Primary}>你好</Button>
      <Button type={ButtonType.Danger} size={ButtonSize.Large}>
        test
      </Button>
      <Button size={ButtonSize.Small}>你好</Button>
    </div>
  );
}

export default App;
