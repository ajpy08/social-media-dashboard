import React, { Fragment } from 'react'
import './globals.css';
import Header from "./header";
import Overview from './overview';
import TopCardList from "./top-card-list";

function App() {
  return (
  <>
    <Header />
    <TopCardList />
    <Overview />
  </>
  )
}

export default App;
