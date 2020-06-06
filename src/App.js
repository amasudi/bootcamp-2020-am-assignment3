import React from "react";
import "./MyCssFile.css";

function App({ myName, sirName, myAge, sirAge }) {
  return (
    <div>
      <h1>My React App</h1>
      <div className="main-container">
        Hello World by <strong>{myName}</strong>
        <div>
          I am not {sirName}, my name is {myName}. I am {sirAge - myAge} younger
          than {sirName}, his age is {sirAge} and my age is just {myAge}.
        </div>
        <div>
          <h2>Ordered List Example</h2>
          <ol>
            <li>this is ordered list item</li>
            <li>this is ordered list item</li>
            <li>this is ordered list item</li>
          </ol>
        </div>
        <div>
          <h3>Un-Ordered List Example</h3>
          <ul>
            <li>this is un-ordered list item</li>
            <li>this is un-ordered list item</li>
            <li>this is un-ordered list item</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
