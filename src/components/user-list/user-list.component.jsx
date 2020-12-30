import React from "react";
import withData from "../../with-data";

const UserList = ({data, name, email}) => {
  return (
    <div className="container user-list">
      <h1>Users List</h1>
      {data.map(data => (
        <div key={data.id} className="post">
          <h1>{data.name}</h1>
          <h2>{data.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default withData(UserList);
