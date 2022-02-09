import logo from "./logo.svg";
import "./App.css";

function App() {
  const users = [
    { name: "Anowar", age: 23 },
    { name: "Rohan", age: 16 },
  ];
  return (
    <div className="App">
      {users.map((e) => {
        return (
          //we can also create another function and call here like...Userdata(e)
          // also <Userdata  name={e.name} age={e.age}/>
          <div>
            <h1>Hello {e.name}</h1>
            <p>Your age : {e.age}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;

// this is called components
// function Userdata(e) {
//   return (
//     <div>
//       <h1>Hello {e.name}</h1>
//       <p>Your age : {e.age}</p>
//     </div>
//   );
// }
