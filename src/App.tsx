import React from 'react';
import './App.css';

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role:[number,string];
let anyType :any;
let unknownType : unknown; // recommended instead of any

let printName: (name:string) => never; //void returns undefied and never doesnt return anything

// function printName(name:string){
//   console.log(name)
// }

// printName("ronko")

// type Person = {
//   name: string;
//   age? : number;
// }

// let person:Person= {
//   name : "ROnko",
// };

// let lotsOfPeople: Person[];

interface Person {
  name : string;
  age? : number;
}

interface Guy extends Person {
  proffesion : string;
}

function App() {
  return (
    <div className="App">

      <h1>22.08.2023 Typescript tutorial</h1>

    </div>
  );
}

export default App;
