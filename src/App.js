import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HistoryPage,
  LandingPage,
  LaunchesDetails,
  LaunchesPage,
  RocketDetails,
  RocketsPage
} from './pages';
import { FooterComponent, HeaderComponent } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />
        <div className=" mx-auto min-h-space">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/historyPage" element={<HistoryPage />} />
            <Route path="/launchesPage/:id" element={<LaunchesDetails />} />
            <Route path="/launchesPage" element={<LaunchesPage />} />
            <Route path="/rocketsPage/:id" element={<RocketDetails />} />
            <Route path="/rocketsPage" element={<RocketsPage />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;