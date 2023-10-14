import './App.css';
import Sidebar from './components/Menu/Sidebar/Sidebar';
import HomeAbout from './components/HomeAbout/HomeAbout';
import AllProjects from './components/Projects/AllProjects/AllProjects';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <HomeAbout />
      <AllProjects />
    </div>
  );
}

export default App;


// MAIN background-color    => #1E2124 || #010409 (github dark bg)
// dark background-color    => #181A1B
// medium background-color  => #1C1F20
// light background-color   => #202428