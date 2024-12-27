import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Rooms from './Rooms';
import Signup from './Signup';
import Signup2 from './Signup2';
import Login from './Login';
import Addstudent from './Addstudent';
import Room1 from './Room1';
import Room12 from './Room12';
import Room14 from './Room14';
import Room2 from './Room2';
import Room21 from './Room21';
import Room24 from './Room24';
import Room3 from './Room3';
import Room31 from './Room31';
import Room34 from './Room34';
import Room4 from './Room4';
import Room41 from './Room41';
import Room44 from './Room44';
import Room5 from './Room5';
import Room51 from './Room51';
import Room54 from './Room54';
import Room6 from './Room6';
import Room61 from './Room61';
import Room64 from './Room64';
import Room7 from './Room7';
import Room71 from './Room71';
import Room74 from './Room74';
import Room8 from './Room8';
import Room81 from './Room81';
import Room84 from './Room84';
import Testing from './Testing';
import Room94 from './Room94';
import Availablerooms from './Availablerooms';
import WardenLogin from './WardenLogin';
import Home1 from './Home1';
import Rooms2 from './Rooms2';
import Availablerooms2 from './Availablerooms2';
import Roomstu8 from './Roomstu8';
import Roomstu7 from './Roomstu7';
import Roomstu6 from './Roomstu6';
import Roomstu5 from './Roomstu5';
import Roomstu4 from './Roomstu4';
import Roomstu3 from './Roomstu3';
import Roomstu2 from './Roomstu2';
import Roomstu1 from './Roomstu1';
function App() {
  return (
    <div> 
  <BrowserRouter>
    <Routes>
      <Route path='/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v22' element={ <Home/>}/>
      <Route path='/$2a$12$GUbLTBEOUWUg4FSgaPJSousyzQZkyiRr2dmmVt4OwXmDUbCzh9v23' element={ <Home1/>}/>
      <Route path='/rooms' element={<Rooms/>} style={{"marginTop":"90px"}}/>
      <Route path='/rooms2' element={<Rooms2/>} style={{"marginTop":"90px"}}/>
      <Route path='/room1' element={<Addstudent/>}/>
      <Route path='/' element={ <Signup/>}/>
      <Route path='/room2' element={<Addstudent/>}/>
      <Route path='/room3' element={<Addstudent/>}/>
      <Route path='/room4' element={<Addstudent/>}/>
      <Route path='/available' element={<Availablerooms/>}/>
      <Route path='/available2' element={<Availablerooms2/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/users1'  element={<Room1/>}/>
      <Route path='/users11'  element={<Roomstu1/>}/>
      <Route path='/users12'  element={<Roomstu2/>}/>
      <Route path='/users13'  element={<Roomstu3/>}/>
      <Route path='/users14'  element={<Roomstu4/>}/>
      <Route path='/users15'  element={<Roomstu5/>}/>
      <Route path='/users16'  element={<Roomstu6/>}/>
      <Route path='/users17'  element={<Roomstu7/>}/>
      <Route path='/users18'  element={<Roomstu8/>}/>
      <Route path='/create' element={<Room12/>}/>
      <Route path='/update/:id' element={<Room14/>}/>
      <Route path='/users2'  element={<Room2/>}/>
      <Route path='/create2' element={<Room21/>}/>
      <Route path='/update2/:id' element={<Room24/>}/>
      <Route path='/users3'  element={<Room3/>}/>
      <Route path='/create3' element={<Room31/>}/>
      <Route path='/update3/:id' element={<Room34/>}/>
      <Route path='/users4'  element={<Room4/>}/>
      <Route path='/create4' element={<Room41/>}/>
      <Route path='/update4/:id' element={<Room44/>}/>
      <Route path='/users5'  element={<Room5/>}/>
      <Route path='/create5' element={<Room51/>}/>
      <Route path='/update5/:id' element={<Room54/>}/>
      <Route path='/users6'  element={<Room6/>}/>
      <Route path='/create6' element={<Room61/>}/>
      <Route path='/update6/:id' element={<Room64/>}/>
      <Route path='/users7'  element={<Room7/>}/>
      <Route path='/create7' element={<Room71/>}/>
      <Route path='/update7/:id' element={<Room74/>}/>
      <Route path='/users8'  element={<Room8/>}/>
      <Route path='/create8' element={<Room81/>}/>
      <Route path='/update8/:id' element={<Room84/>}/>
      <Route path='/testing' element={<Testing/>}/>
      <Route path='/users9'  element={<Room94/>}/>
      <Route path='/wardenregister' element={<Signup2/>}/>
      <Route path='/wardenlogin' element={<WardenLogin/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
