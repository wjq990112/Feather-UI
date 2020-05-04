import React from 'react';
import Button from './components/Button/Button';

function App() {
  return (
    <div>
      <Button buttonType="link" href="https://jack-wjq.top" target="_blank">
        你好
      </Button>
      <Button buttonType="primary">你好</Button>
      <Button buttonType="danger" size="large">
        test
      </Button>
      <Button size="small">你好</Button>
    </div>
  );
}

export default App;
