import UserCard from "./UserCard"
import Blog from './Blog'


function App() {
  

  return (
    <>
    {/* Exercise 1 UserCard */}
    {/* Exercise 3 UserCard Modify */}
    <UserCard
    name={'Omar Abdiqadir'}
    email={"Omar25@gmail.com"}
    
    />

     <UserCard
    name={'Abdinasir Kadar'}
    email={"abdinasirkadar@gmail.com"}
    
    />

     <UserCard
    name={'Mahamed Sharif'}
    email={"Sharif25@gmail.com"}
    
    />

     <UserCard
    name={'Guled Mohamed'}
    email={"Guled6525@gmail.com"}
    
    />

     <UserCard
    name={'Mustafa Ali'}
    email={"Mustafa58@gmail.com"}
    
    />

    {/* Excises 2 Blog */}
    <Blog/>
    </>


  )
   
}

export default App
