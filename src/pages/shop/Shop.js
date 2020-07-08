import React from "react";
import { Route } from "react-router-dom";

import Collection from "../collection/Collection";
import CollectionsOverview from "../../components/collectionsOverview/CollectionsOverview";
import { firestore } from "../../firebase/firebase.utils";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      console.log(snapshot);
    });
  }
  render() {
    const { match } = this.props;
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
  }
}

export default Shop;
