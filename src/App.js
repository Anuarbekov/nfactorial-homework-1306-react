import "./App.css";
import iconTg from "./telegram.png";
const {format} = require('date-fns');
const date = new Date();
const time = format(date, 'EEEE, MMMM do, yyyy H:mm a');
console.log(time);
function App() {
  return (
    <>
        <header>
          <img src={iconTg} className="logo" alt=""></img>
          <input></input>
          <h4 className="time">{time}</h4>
        </header>

        <div className="main">
        <div className="img">
          <img src="https://source.unsplash.com/gYl-UtwNg_I/1500x1500" alt="" />
          <h1 className="text">HEY</h1>
        </div>
        <div className="img">
          <img src="https://source.unsplash.com/rFKUFzjPYiQ/1500x1500" alt="" />
          <h1 className="text">LET'S</h1>
        </div>
        <div className="img hi">
          <img
            src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d"
            alt=""
          />
          <h1 className="text">GIVE</h1>
        </div>
        <div className="img">
          <img src="https://source.unsplash.com/ITjiVXcwVng/1500x1500" alt="" />
          <h1 className="text">ALL</h1>
        </div>
        <div className="img">
          <img src="https://source.unsplash.com/3MNzGlQM7qs/1500x1500" alt="" />
          <h1 className="text">YOU CAN</h1>
        </div>
      </div>
    </>
  );
}
export default App;
