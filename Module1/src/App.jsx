import './App.css'
import Person from '../../components/Person/Person'
import Header from '../../components/Header/Header';
//import List from '../../components/List/List';
import Button from '../../components/Button/Button';
import List from '../../components/List/List';

function App() {
  const cars = ["BMW X3", "Audi Q3 Sportback", "Ferrari 812", "Lamborgini Huran", "Bugati Veron"]
  return (
    <div>
      <Header title="ReactJS Assignment"/>
      <Person name="Sam" age="18"/>
      <List cars={cars}/>
      <Button/>
    </div>
  )
}

export default App;
