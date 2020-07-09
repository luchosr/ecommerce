import shopActionsTypes from "./shopTypes";
import Collection from "../../pages/collection/Collection";

export const updateCollections = (collectionsMap) => ({
  type: shopActionsTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
