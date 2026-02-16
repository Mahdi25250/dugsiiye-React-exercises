import UserCard from "./UserCard";
import Blog from "./Blog";
import ToggleButton from "./ToggleButton";
import ShoppingCart from "./ShoppingCart";
import UseEffect from "./UseEffect";
import TrackingMouse from "./TrackingMouse";
import CountDown from "./Countdown";
import GitHubUser from "./GitHub";
import UserList from "./UserList";
import LoginForm from "./LoginForm";
import Counter from "./Counter";

function App() {

   const users = [
    {id:1, name:'mc hamouda', email:'hamouda@gmail.com'},
    {id:2, name:'mahdi', email:'mahdi@gmail.com'},
    {id:3, name:'marwan', email:'marwan@gmail.com'},
    {id:4, name:'omar', email:'omar@gmail.com'}
  ]
  return (
    <>
      {/* Exercise 1 UserCard */}
      {/* Exercise 3 UserCard Modify */}
      <UserCard name={"Omar Abdiqadir"} email={"Omar25@gmail.com"} />

      <UserCard name={"Abdinasir Kadar"} email={"abdinasirkadar@gmail.com"} />

      <UserCard name={"Mahamed Sharif"} email={"Sharif25@gmail.com"} />

      <UserCard name={"Guled Mohamed"} email={"Guled6525@gmail.com"} />

      <UserCard name={"Mustafa Ali"} email={"Mustafa58@gmail.com"} />

      {/* Excises 2 Blog */}
      <Blog />

      {/* Exercise 3 Toggle */}
      <ToggleButton />

      {/* Exercise 5 */}
      <ShoppingCart />

      {/* Exercise */}
      <UseEffect />

      {/* Exercise 7 */}
      <TrackingMouse />

      {/*  Exercise 8*/}
      <CountDown/>

      {/* Exercise 9 */}
      <GitHubUser/>

      {/* Exercise 10 */}
      <UserList users={users}/>

      {/* Exercise #11 */}
       <LoginForm/> 

      {/* Exercise #12 */}
       <Counter/>
      
    </>
  );
}

export default App;
