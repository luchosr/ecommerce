import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../components/collectionPreview/CollectionPreview";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";

const Shop = (props) => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
