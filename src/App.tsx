import React from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import './main.global.css';
import {Header} from "./shared/Header";

function AppComponent() {
  return (
    <Layout>
        <Header/>
    </Layout>
  );
}

export const App = hot(AppComponent);
