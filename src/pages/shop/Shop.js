import React, { useState } from "react";

import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";

const Shop = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default Shop;
