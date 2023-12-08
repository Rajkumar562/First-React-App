import { useEffect, useState, useRef } from "react";
import Product from "./components/Product";
import { CanceledError } from "./services/api-client";
import UserService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";
// import axios, { AxiosError, CanceledError } from "axios";

function Back() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    UserService.delete(user.id).catch((e) => {
      setError(e.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Rajkumar" };
    const originalUsers = [...users];
    setUsers([newUser, ...users]);

    UserService.create(newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      }) // the new user added is saved in 'data' with name savedUser,new data added is saved in data
      .catch((e) => {
        setError(e.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    // there are 2 ways to update data, put and patch. put replaces the entire object with the new object while patch updates only the required fields.
    UserService.update(updatedUser).catch((e) => {
      setError(e.message);
      setUsers(originalUsers);
    });
  };
  // Not recommended to use async and await with effect hook
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get<User[]>(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setUsers(response.data);
  //     } catch (error) {
  //       setError((error as AxiosError).message);
  //     }
  //   };
  //   fetchUsers();
  // });

  return (
    // <div>
    //   <select
    //     className="form-select"
    //     onChange={(event) => setCategory(event.target.value)}
    //   >
    //     <option value=""></option>
    //     <option value="Games">Games</option>
    //     <option value="Books">Books</option>
    //   </select>
    //   <Product category={category} />
    // </div>
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((person) => (
          <li
            key={person.id}
            className="list-group-item d-flex justify-content-between"
          >
            {/* d-flex moves buttons to the right side and makes container for them , while justify content distributes space eveny between user names and buttons  */}
            {person.name}
            <div>
              {" "}
              {/*mx-1 means margin horizontal 1. update and delete are wrapped in div because we want both buttons to be aligned properly*/}
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(person)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(person)}
              >
                Delete
              </button>
            </div>
            {/* both buttons are added in div so that it is considered a single div element while making a container and justifying the space between name and buttons */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Back;
