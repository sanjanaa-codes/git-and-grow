12. App.js vs Index.js

App.js → Main component where UI starts.
Index.js → Entry point that renders App into browser DOM.

  // index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

Interview Qs

Q: Difference between App.js and Index.js?
A: App.js defines UI, Index.js mounts it to DOM.
