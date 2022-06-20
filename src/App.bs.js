'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var State$Pomodoro = require("./State.bs.js");

function App(Props) {
  var match = React.useReducer(State$Pomodoro.reducer, State$Pomodoro.initialState);
  var dispatch = match[1];
  React.useEffect((function () {
          var timer = setInterval((function (param) {
                  return Curry._1(dispatch, /* Tick */3);
                }), 1000);
          return (function (param) {
                    clearInterval(timer);
                    
                  });
        }), []);
  return React.createElement("div", undefined, React.createElement("div", undefined, String(match[0].seconds)), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Stop */1);
                    })
                }, "Stop"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Start */0);
                    })
                }, "Start"), React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* Reset */2);
                    })
                }, "Reset"));
}

var make = App;

exports.make = make;
/* react Not a pure module */
