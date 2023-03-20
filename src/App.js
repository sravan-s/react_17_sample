import React from "react";
import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";

import './App.css';

const App = () => {
  return (
      <div className="App">
          <SendbirdApp
              // Add the two lines below.
              appId={''}   // Specify your Sendbird application ID.
              userId={'user002'}        // Specify your user ID.
          />
      </div>
  );
};

export default App;
