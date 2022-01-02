import React from "react";
import logo from "./logo.svg";
import "./App.css";
import tw from "twin.macro";
import { TopSection } from "./containers/TopSection";
import { ExploreSection } from "./containers/ExploreSection";
import { BuySection } from "./containers/BuySection";
import { Footer } from "./components/footer";

const AppContainer = tw.div`
  flex
  flex-col
  bg-gray-200
  w-full
  h-full
  overflow-hidden
`;

function App() {
  return (
    <AppContainer>
      <TopSection />
      <ExploreSection />
      <BuySection />
      <Footer />
    </AppContainer>
  );
}

export default App;
