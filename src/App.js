import logo from './logo.svg';
import './App.css';
import { FullName } from './compornent/FullName.jsx';
import { ContactDetails } from './compornent/ContactDetails.jsx';
import { UserDetails } from './compornent/UserDetails';
import {ShowUser} from "./compornent/ShowUser";
import { ShowStudentDetails } from './compornent/ShowStudentDetails';
import { ArrayIter } from './compornent/ArrayIter';
import { EventHandle } from './compornent/EventHandle';
import { Abc } from './compornent/Abc';
import { EffectHook } from './compornent/EffectHook';
import { Forms } from './compornent/Forms';
import { UseRefTask } from './compornent/UseRefTask';
import { UseEffectTask } from './compornent/UseEffectTask';

function App() {
  return (
    <div>
    <FullName/>
    <ContactDetails/>
    <UserDetails/>
    <ShowUser/>
    <ShowStudentDetails/>
    <ArrayIter/>
    <EventHandle/>
    <EffectHook/>
    <Forms/>
    <Abc/>
    <UseRefTask/>
    <UseEffectTask/>
  </div>
  )
}

export default App;
