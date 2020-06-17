import React from "react";
import { Route } from "react-router-dom";

import Collection from "../collection/Collection";
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionsOverview}
      />
    </div>
  );
};

export default Shop;
