open Utils
[@react.component]
let make = (~seconds) => 
    <div> <span className = "timer-label"> {seconds |> formatTime |> s} </span> </div>