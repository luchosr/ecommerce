import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collecionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collecionUrlParam]
  );
