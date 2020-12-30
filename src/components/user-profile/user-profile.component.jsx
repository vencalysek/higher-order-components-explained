import React from "react";

import withData from '../../with-data'

const UserProfile = ({data, name, email}) => {
  return (
    <div className="container">
      <h1>{name}</h1>
      <h1>{email}</h1>
      Posts:
      {data.map(data => (
        <div key={data.id} className="post">
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      ))}
    </div>
  );
};

export default withData(UserProfile);
 