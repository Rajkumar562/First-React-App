import React from "react";
import { useEffect, useState } from "react";

//defined the props inline {category: string}
const Product = ({ category }: { category: string }) => {
  const [prod, setProd] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Products in", category);
    setProd(["Games", "Books"]);
  }, [category]); // when a category is passed , react renders everytime the category changes
  // effect hook is now dependent on the property passed "category"

  return <div>Product</div>;
};

export default Product;
