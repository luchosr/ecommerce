import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../../components/collectionPreview/CollectionPreview";
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";

import { selectCollections } from "../../redux/shop/shopSelector";
const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default Shop;
