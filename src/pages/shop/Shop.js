import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/previewCollection/PreviewCollection";

const Shop = (props) => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
