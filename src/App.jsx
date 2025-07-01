import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MissionSection from './components/MissionCard/MissionSection';
import { missions } from './data/spacexData';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        {missions.map((mission, _) => (
          <MissionSection key={mission.id} mission={mission} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
