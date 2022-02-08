import './App.css';
import Profile from './component/profile/Profile';
import FullName from './component/profile/FullName';
import Adresse from './component/profile/Adresse';

function App() {
  return (
    <div className="App">
      <Profile />
      <FullName />
      <Adresse />
    </div>
  );
}

export default App;
