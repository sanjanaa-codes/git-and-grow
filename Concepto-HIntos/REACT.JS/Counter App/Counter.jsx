npx create-react-app counter_app
cd counter_app

Problem Statement  

- You will create a simple Counter component that:
- Displays the current number.
- Includes two buttons: one to add 1 to the number and one to subtract 1 from the number.
- Uses React's useState hook to keep track of the number's state and update it accordingly.

Step 1: Create the React App  

1.  Open the Project Folder  

- Click on the Explorer icon displayed below.
- Select Open Folder from the options.
- Navigate to and click on your Project Folder
2.  Opening a new terminal   

- Click on the Terminal menu.
- From the dropdown, select New Terminal.

3.  After opening the new terminal, the terminal panel will appear as shown below, defaulting to the project directory.


4.  Run the following command to create the React app named counter_app: 
npx create-react-app counter_app

5. The installation process may take some time. Once completed, navigate to the project folder using the following command:  
cd counter_app

Step 2: Start the React Development Server  

1. Use the following command to start the development server and test the app: npm start
2. You can now view the counter_app in your browser by navigating to localhost:<exposed port> (eg:3000).  
3. After successfully installing the React app, the project structure will appear as shown below.  

Step 3: Set Up the App Component  

1. The App.js file is located in the src folder. It already contains some code; delete the existing code.  
2. Import the necessary modules:

Import useState from React. This hook will allow us to manage the counter state.
Import the App.css file to apply styles to the app. The necessary code is already included in the App.css file. 

You should have the following imports: 
import { useState } from 'react';
import './App.css';

Step 4: Initialize the State

Inside the App function, use the useState hook to create a state variable called num with an initial value of 0. useState returns an array with two elements:
The current state (num).
A function to update that state (setNum).

const [num, setNum] = useState(0);

Now, you have the state set up, and you can use num to display the current number and setNum to update it when a button is clicked.  

Step 5: Render the Current Number  

 Inside the JSX of the App component, render the current number using {num}
<h1>Current number: {num}</h1>

Step 6:  Add Event Handlers for Buttons  

Create two buttons:

One button will call setNum(num + 1) when clicked to increase the number.
Another button will call setNum(num - 1) when clicked to decrease the number.

<button onClick={() => setNum(num + 1)}>Add 1</button>
<button onClick={() => setNum(num - 1)}>Subtract 1</button>

Step 7:  Wrap Everything in JSX  

Finally, wrap all your JSX inside the return statement to render the updated number and the buttons

return (
  <>
    <h1>Current number: {num}</h1>
    <button onClick={() => setNum(num + 1)}>Add 1</button>
    <button onClick={() => setNum(num - 1)}>Subtract 1</button>
  </>
);

import { useState } from 'react';  // Import the useState hook from React to manage state in the component
import './App.css';  // Import the CSS file for styling the app

function App() {
  // Declare a state variable 'num' and a function 'setNum' to update the value of 'num'.
  // Initial value of num is set to 0.
  const [num, setNum] = useState(0);

  return (
    // The main container for the app content
    <div className="app-container">
      {/* Display the current value of the 'num' variable */}
      <h1 className="counter-heading">Current Number: {num}</h1>
      
      {/* Container for buttons, to allow adding or subtracting 1 */}
      <div className="button-container">
        {/* Button to increment the 'num' value by 1 */}
        <button 
          className="counter-button" 
          onClick={() => setNum(num + 1)}  // onClick calls setNum with num + 1 to increment the value
        >
          Add 1
        </button>
        
        {/* Button to decrement the 'num' value by 1 */}
        <button 
          className="counter-button" 
          onClick={() => setNum(num - 1)}  // onClick calls setNum with num - 1 to decrement the value
        >
          Subtract 1
        </button>
      </div>
    </div>
  );
}

// Export the App component to be used in other parts of the app
export default App;

/* App.css */

/* Centering the app content */
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
  font-family: Arial, sans-serif;
}

/* Style the heading */
.counter-heading {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

/* Style the buttons container */
.button-container {
  display: flex;
  gap: 10px;
}

/* Style for buttons */
.counter-button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Hover effect for buttons */
.counter-button:hover {
  background-color: #0056b3;
}

/* Style for buttons on active state */
.counter-button:active {
  background-color: #004085;
}

Step 9: view the  output

1. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.  
2. In your browser, enter the following URL format, replacing <exposed port> with the actual port number displayed in the terminal when the server was initially started: http://localhost:<exposed port>.
3. After entering the URL correctly, the webpage will load, displaying a preview of the webpage as shown below.  


Step 10: Close the server after completing the lab: 

Once you’re done with the lab, make sure to close the server to free up the port:  
You can stop the server by pressing Ctrl + C in the terminal.

Key Takeaways:  

useState Hook: Learners should understand how to create and manage state in functional components using useState.
Event Handling: They will practice using event handlers (such as onClick) to trigger state updates.
Conditional Rendering: This app involves dynamic rendering based on state, so learners will get hands-on practice with it.
React Basics: This lab reinforces basic React concepts such as state, props, and functional components.


