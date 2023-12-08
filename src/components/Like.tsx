import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClickProp: () => void;
}

/* const [person, setPerson] = useState({
  fullName: "",
  lastName: "",
}); */

const Like = ({ onClickProp }: Props) => {
  // const [check, setcheck] = useState(true);
  const [Like, setLike] = useState(false);
  // the states are stored outside as in array [true,false] and when state is called the value is initialised to Like
  // the states are stored outside so that it is not initialised to false every time the function is called

  const toggle = () => {
    setLike(!Like);
    // Value of Like here is not updated immediately, it is updated after the function is executed
    // React updates state asynchronously. So, if you want to do something after the state has been updated,
    // you need to use useEffect hook. useEffect hook is called after the component has been rendered.
    // console.log(Like);
    onClickProp();
  };

  if (Like) return <AiFillHeart color="#ff6b81" size="40" onClick={toggle} />;
  return <AiOutlineHeart size="40" onClick={toggle} />;
};

export default Like;

//Pure function is the one which when called at any time gives the same output while impure function when called
// at any time gives different output. In react , it is recommended to use pure functions.
