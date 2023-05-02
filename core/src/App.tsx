import 'flowbite';
import type { Component } from 'solid-js';
import Button from './components/button';

const App: Component = () => {
  const sayHello = () => window.alert('hello');

  return (
    <div>
      <Button type='primary' onclick={sayHello}>
        Hello
      </Button>
    </div>
  );
};

export default App;
