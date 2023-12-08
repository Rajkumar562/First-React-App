// import { Fragment } from "react";
// import { MouseEvent } from "react";

import { useState } from "react";
// import './List.css';

// { items: [], heading: string}
interface Props {
  items: string[];
  headingName: string;
  onSelect: (item: string) => void;
}

function List({ items, headingName, onSelect }: Props) {
  //   fruits = [];

  //   if (fruits.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No element present in the array</p>
  //       </>
  //     );

  //Event Handler
  // const handClick = (event: MouseEvent) => console.log(event);

  //Hook, tells that state changes over time
  // useState();

  // selectedIndex (variable) arr[0] is a variable, setselectedIndex (arr[1]) is an updater function,
  // updates arr[0]
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{headingName}</h1>
      {/* {fruits.length === 0 ? <p>No element present in the array</p> : null} */}
      {items.length === 0 && <p>No element present in the array</p>}
      {
        // true && 'app' is app, true with anything is given value of element
      }
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelect(item);
            }}
          >
            {item}
          </li> //Giving id(unique key) to each item of the array
        ))}
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}

export default List;
