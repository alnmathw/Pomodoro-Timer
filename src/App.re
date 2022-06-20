open State;
[@react.component]
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, initialState);

  React.useEffect0(() => {
    let timer = Js.Global.setInterval(() => dispatch(Tick), 1000);
    Some(() => Js.Global.clearInterval(timer));
  });

  <div className="container">
    <Header />
    <Timer seconds={state.seconds} />
    <TimerActions dispatch isTicking={state.isTicking} />
    <EditTime
      phase="Work"
      value={state.workTime}
      onChange={e => dispatch(SetTime(Work, e))}
    />
    <EditTime
      phase="Break"
      value={state.playTime}
      onChange={e => dispatch(SetTime(Play, e))}
    />
  </div>;
};
