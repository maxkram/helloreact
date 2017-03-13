var React = require("react");
var ReactDOM = require("react-dom");
var Greeter = require("./components/Greeter");

var name = "Дзюба"

ReactDOM.render(
  <Greeter name={name} message="Вести с полей"/>,
  document.getElementById("app")
);
