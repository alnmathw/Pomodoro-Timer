'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var State$Pomodoro = require("./State.bs.js");
var Timer$Pomodoro = require("./Timer.bs.js");
var EditTime$Pomodoro = require("./EditTime.bs.js");
var TimerActions$Pomodoro = require("./TimerActions.bs.js");

function App(Props) {
  var match = React.useReducer(State$Pomodoro.reducer, State$Pomodoro.initialState);
  var dispatch = match[1];
  var state = match[0];
  React.useEffect((function () {
          var timer = setInterval((function (param) {
                  return Curry._1(dispatch, /* Tick */3);
                }), 1000);
          return (function (param) {
                    clearInterval(timer);
                    
                  });
        }), []);
  return React.createElement("div", {
              className: "container"
            }, React.createElement("button", {
                  onClick: (function (param) {
                      return Curry._1(dispatch, /* TogglePhase */4);
                    })
                }, "Switch timer"), React.createElement(Timer$Pomodoro.make, {
                  seconds: state.seconds
                }), React.createElement(TimerActions$Pomodoro.make, {
                  dispatch: dispatch,
                  isTicking: state.isTicking
                }), React.createElement(EditTime$Pomodoro.make, {
                  phase: "Work",
                  value: state.workTime,
                  onChange: (function (e) {
                      return Curry._1(dispatch, /* SetTime */{
                                  _0: /* Work */0,
                                  _1: e
                                });
                    })
                }), React.createElement(EditTime$Pomodoro.make, {
                  phase: "Break",
                  value: state.playTime,
                  onChange: (function (e) {
                      return Curry._1(dispatch, /* SetTime */{
                                  _0: /* Play */1,
                                  _1: e
                                });
                    })
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
