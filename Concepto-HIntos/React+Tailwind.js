npm run dev - React Developer Server
__________________________________________________________________________________________________________________
Rendering Components -
  1. Components are rendered in self closing tags
  2. They can be called multiple times

const App = () => {
  return <div>
    <Title />
    <Description />
  </div>;
};

export default App;

const Title = () => {
  return <div>
    Hello World
  </div>
}

const Description = () => {
  return <div>
    This is my first react code
  </div>
}
________________________________________________________________________________________________________________________



