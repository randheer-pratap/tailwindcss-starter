import "./App.css";
import Message from "./Message";
import Button from "./Button";
import Div from "./Div";
import DynamicClass from "./DynamicClass";
import FancyButton from "./FancyButton";
import Flex from "./Flex";
import Quotes from "./Quotes";

function App() {
  return (
    <div className="">
      <Message bgColor="orange" label="Try" textColor="white">
        Trying Basics!
      </Message>
      <Div />
      <Button label="Hello" />
      <DynamicClass />
      <FancyButton textLarge={true} label="Submit" rounded="md" color="amber" />
      <FancyButton textLarge={false} label="Hello" rounded="4xl" color="blue" />
      <Flex />
      <Quotes />
    </div>
  );
}

export default App;
