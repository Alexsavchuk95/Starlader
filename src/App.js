import React from 'react';
import Header from './components/Header/Header';
import Frame from './components/Frame/Frame';
import Results from './components/Results/Results';
import Stages from './components/Steges/Stages';
import stage from './components/Steges/StagesList';
import data from './components/Results/Matches/Matches';

const App = () => (
  <>
  <Header/>
  <Frame/>
  <Results items={data}/>
  <Stages items={stage}/>
  </>
);

export default App;
