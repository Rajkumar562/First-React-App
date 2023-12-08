// import List from "./components/List";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import { IoLogoWhatsapp } from "react-icons/io";
import Message from "./components/Message";
import Update from "./components/Update";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseTracker from "./expense-tracker/components/ExpenseTracker";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import categories from "./expense-tracker/categories";

// TSX = Type Script With XML
function App() {
  // let fruits = ["Orange", "Mango", "Apple", "Dragonfruit", "Pear", "Papaya"];
  // const handleSelect = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);
  let x = 0;

  const [cartItems, setCartItems] = useState([
    "TV",
    "Refrigerator",
    "SmartPhone",
  ]);

  const [expenses, setExpenses] = useState([
    { id: 1, description: "anything", amount: 12, category: "Groceries" },
    { id: 2, description: "something", amount: 5, category: "Groceries" },
    { id: 3, description: "thing", amount: 10, category: "Groceries" },
    { id: 4, description: "a", amount: 1, category: "Groceries" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      {/* <IoLogoWhatsapp
        color="green"
        size="50"
        onClick={() => console.log("Clicked")}
      ></IoLogoWhatsapp>

      <Like onClickProp={() => console.log("Clicked")}></Like>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Just Checking</Alert>
      )} */}

      {/* <List
        items={fruits}
        headingName="List Of Fruits"
        onSelect={handleSelect}
      ></List> */}

      {/* <Button color="danger" atClick={() => setAlertVisibility(true)}> */}
      {/* react renders when the visibility of the component is changed,thus alert is seen */}
      {/* My Button */}
      {/* </Button> */}

      {/* <Message /> */}

      {/* <Update />

      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} Clear={() => setCartItems([])} />

      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt minus
        ipsum dolorum, doloribus sequi illum magni distinctio voluptatum maiores
        deleniti vel ullam quasi nemo doloremque impedit odio eos! Esse ullam
        dolore quam tempora accusantium eum, dolor sequi doloribus quisquam est
        labore ipsam unde vero ipsa itaque vitae qui laborum. Beatae eligendi
        voluptate nostrum quam amet accusamus dolorem minima mollitia esse
        commodi consequatur modi nam officia enim aperiam tempore ullam facilis,
        repellat molestiae vitae perferendis dolor. Veritatis excepturi eligendi
        eius, alias necessitatibus veniam culpa! Voluptatem suscipit inventore,
        soluta culpa dolorem omnis porro illum unde est nemo, rem et. Nemo, illo
        unde.
      </ExpandableText>

      <Form /> */}

      <div className="mb-5">
        <ExpenseTracker
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>

      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(cat) => setSelectedCategory(cat)} />
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;
