function UserList({ users }) {
  return (
    <>
      <h1>User List</h1>
      {users.length > 0 ? (
        <ul>
            {users.map((user) =>(
                <li key={user.id}>
                     {user.name} ({user.email})
                </li>
            ))}
        </ul>
      ): (<p>No users found.</p>)}
      
    </>
  );
}

export default UserList;
