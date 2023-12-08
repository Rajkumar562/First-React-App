import { useState } from "react";
import produce from "immer";

const Update = () => {
  const [drink, setDrink] = useState({
    name: "Starbucks",
    price: 400,
  });

  const handleClick = () => {
    // const newDrink = {
    //   name: drink.name,
    //   price: 450,
    // };
    // setDrink(newDrink);

    setDrink({ ...drink /* copies all properties of drink*/, price: 450 });
    // changing the state without creating the new object
  };

  // a new object has to be created with different value to update the price of drink, directly changing the property
  // will not do anything as the object remains same and react does not update as the DOM as there is no change in its
  // component

  return (
    <div>
      <button onClick={handleClick}>Click for Price </button>
      <br />
      {drink.price}
    </div>
  );
};

//   UPDATE NESTED OBJECTS
// const Update = () => {
//   const [change, setChange] = useState({
//     name: "Rajkumar",
//     address: {
//       city: "Ghaziabad",
//       Pincode: 201005,
//     },
//   });

//   const handleClick = () => {
//     setChange({ ...change, address: { ...change.address, Pincode: 221005 } });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}> Check pincode</button>
//       {change.address.Pincode}
//     </div>
//   );
// };

//   UPDATE ARRAYS
// const Update = () => {
//   const [tags, setTags] = useState(["hello", "hi", "good morning"]);

//   const handleClick = () => {
//     // Add
//     setTags([...tags, "good night"]);

//     // Remove
//     setTags(tags.filter((justcheck) => justcheck !== "hi"));

//     // Update
//     setTags(tags.map((tag) => (tag === "hello" ? "helloWorld" : tag)));
//   };
// };

//   UPDATE ARRAY OBJECTS
// const Update = () => {
//   const [bugs, setBugs] = useState([
//     { id: 1, type: "blackout", fixed: false },
//     { id: 2, type: "crash", fixed: false },
//   ]);
//   const handleClick = () => {
// setBugs(
//   bugs.map((findBug) =>
//     findBug.id === 1 ? { ...findBug, fixed: true } : findBug
//   )
// );

// UPDATING USING IMMER
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((findBug) => findBug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.type} {bug.fixed ? "Fixed" : "New "}{" "}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click for Price </button>
//       <br />
//     </div>
//   );
// };

export default Update;
