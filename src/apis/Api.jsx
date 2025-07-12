import React, { useEffect, useState } from "react";
import SingleUser from "./SingleUser";

const Api = () => {
  const [users, setUsers] = useState([]);

  const api = "https://api.github.com/users";

  const getData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="grid gap-3 container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {users?.map((item, index) => {
          return <SingleUser {...item} key={item?.id} />;
        })}
      </div>
    </>
  );
};

export default Api;
