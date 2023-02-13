import "./App.css";
import Body from "./components/Body";
import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import Header from "./components/Header";

import TimersDashboard from "./components/TimersDashboard";
import { TimerContextProvider } from "./context/TimerContext";

export default function App() {
  return (
    <div>
      <h1>Day-61 - Custom Hook</h1>
      <ChangeTheme />
      <Header />
      <Body />
      <Footer />

      {/* <TimerContextProvider>
        <TimersDashboard />
      </TimerContextProvider> */}
    </div>
  );
}
