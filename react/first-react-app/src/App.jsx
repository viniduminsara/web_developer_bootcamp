import './App.css'
import Chicken from './Chicken'
import Die from './Die'
import DoubleDice from './DoubleDice'
import Greeter from './Greeter'
import ListPicker from './ListPicker'
import Slots from './Slots'
import ShoppingList from './ShoppingList'

const data = [
  {name: 'Toffee', qty: 50, completed:true},
  {name: 'Bun', qty: 89, completed:false},
  {name: 'Milk', qty: 13, completed:false},
  {name: 'Chocolate', qty: 21, completed:true}
];

function App() {
  return <div>
    {/* <Greeter person="Bill" from="England"/>
    <Greeter/>
    <Die numSlides={20} /> */}
    {/* <ListPicker values={["red", "blue", "orange", "pink", "teal"]}/>
    <DoubleDice/>
    <DoubleDice/>
    <DoubleDice/> */}
    <Slots val1="💻" val2="💻" val3="💻"/>
    <ShoppingList items={data} />
  </div>
}

export default App
