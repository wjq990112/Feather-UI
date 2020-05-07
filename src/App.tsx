/**
 * @file App
 */
import React from 'react';
import Button from './components/Button';
import Alert from './components/Alert';

const App: React.FC = () => {
  return (
    <div>
      <Button buttonType="link" href="https://jack-wjq.top" target="_blank">
        Button
      </Button>
      <Button buttonType="primary">Button</Button>
      <Button buttonType="danger" size="large">
        Button
      </Button>
      <Button size="small">Button</Button>
      <Alert />
    </div>
  );
};

export default App;
