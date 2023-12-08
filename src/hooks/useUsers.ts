import { useEffect, useState } from "react";
import UserService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
  //4. const connect = () => console.log("Connecting");
  // const disconnect = () => console.log("Disconnecting");

  // useEffect(() => {
  //   connect();
  //   return () => disconnect();
  // });
  // in strict mode, react renders each component twice. For the 2nd time , the react unmounts the first
  // component and then mounts it again and therefore cleanup is performed.

  // const [category, setCategory] = useState("");

  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // get -> Promise ->response /error
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = UserService.getAll<User>();
    request
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    // .finally(() => {
    //   setLoading(false);
    // }); Its not possible to see the loading effect with react strict mode but in real time, it is used

    return () => cancel();
  }, []);

  return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
