import React from "react";

let count = 0;
const Message = () => {
  console.log(count);
  count++;
  return <div>Message {count}</div>;
};

export default Message;

// react uses strict mode in development mode where it executes each component twice but in production mode strict mode
// is not included thus it executes only once. First time it is used to detect issues with code but 2nd time is used to
// update the interface
