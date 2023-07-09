import './App.css';
import {Routes, Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
      </Routes>
    </>
  );
}
export default App;
