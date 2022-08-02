import React from "react";
import {hot} from "react-hot-loader/root";

function AppComponent() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
}

export const App = hot(AppComponent);
