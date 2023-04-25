import "./App.css";
import Table1 from "./tables/Table";
import Table2 from "./tables/Table2";
import Table3 from "./tables/Table3";
import Table4 from "./tables/Table4";
import Table5 from "./tables/Table5";

function App() {
  return (
    <div className="App">
      <center>
        <h2>
          Users which have income lower than $5 USD and have a car of brand
          “BMW” or “Mercedes”.
        </h2>
      </center>
      <div className="container">
        <Table1 />
      </div>
      <center>
        <h2>Male Users which have phone price greater than 10,000</h2>
      </center>
      <div className="container">
        <Table2 />
      </div>
      <center>
        <h2>
          Users whose last name starts with “M” and has a quote character length
          greater than 15 <br /> and email includes his/her last name
        </h2>
      </center>
      <div className="container">
        <Table3 />
      </div>
      <center>
        <h2>
          Users which have a car of brand “BMW”, “Mercedes” or “Audi” <br/>and whose
          email does not include any digit
        </h2>
      </center>
      <div className="container">
        <Table4 />
      </div>
      <center>
        <h2>
          Show the data of top 10 cities which have the highest number of users
          and their average income
        </h2>
      </center>
      <div className="container">
        <Table5 />
      </div>
    </div>
  );
}

export default App;
