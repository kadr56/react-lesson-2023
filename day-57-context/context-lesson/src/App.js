import "./App.css";
import Heading from "./components/Heading";
import Layout from "./components/Layout";
import Section from "./components/Section";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const userName = "Munkhbaatar";
  return (
    <div className="App">
      <h1>Day-57 - React Context</h1>

      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>sub-heading</Heading>
            <Heading>sub-heading</Heading>
            <Heading>sub-heading</Heading>
            <Section level={4}>
              <Heading>sub-sub-heading</Heading>
              <Heading>sub-sub-heading</Heading>
              <Heading>sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;
