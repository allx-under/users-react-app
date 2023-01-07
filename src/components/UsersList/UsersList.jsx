import { useEffect, useState } from "react";

import getUsers from "../../API/usersAPI";
import User from "../User/User";
import Title from "../Title/Title";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getUsers();
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Title text="List of users" />
      {users.length ? (
        <ul>
          {users?.map((user) => {
            return <User user={user} key={user.id} />;
          })}
        </ul>
      ) : (
        <p>Something went wrong with server. Please reboot your server.</p>
      )}
    </>
  );
};

export default UsersList;
