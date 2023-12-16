import './App.css'
import { useState } from 'react';

import Person from '../../components/Person/Person'
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';

function App() {
  const cars = ["BMW X3", "Audi Q3 Sportback", "Ferrari 812", "Lamborgini Huran", "Bugati Veron"]
  return (
    <div>
      <Header title="ReactJS Assignment"/>
      <Person name="Sam" age="18"/>
      <List cars={cars}/>
    </div>
  )
}

export default App;
