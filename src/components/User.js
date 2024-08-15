import { useState } from "react";

const User = ({ name, location, contact }) => {
    const [count1] = useState(1);
    const [count2] = useState(2);
  return (
    <div className="user-card">
      <h2>Count1 : {count1}</h2>
      <h2>Count2 : {count2}</h2>
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h4>{contact}</h4>
    </div>
  );
};
export default User;
