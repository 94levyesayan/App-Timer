import React from "react";
import MainLayout from "./Organism/Mainlayout";
import { store } from "./Store/index";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </div>
  );
};

export default App;
