import './App.css'
import Chicken from './Chicken'
import Die from './Die'
import DoubleDice from './DoubleDice'
import Greeter from './Greeter'
import ListPicker from './ListPicker'

function App() {
  return <div>
    {/* <Greeter person="Bill" from="England"/>
    <Greeter/>
    <Die numSlides={20} /> */}
    <ListPicker values={["red", "blue", "orange", "pink", "teal"]}/>
    <DoubleDice/>
    <DoubleDice/>
    <DoubleDice/>
  </div>
}

export default App
