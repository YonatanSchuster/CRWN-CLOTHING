import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories; // the category's slice of the Redux store

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categorySlice) => categorySlice.categories //The only time where this will run is if this category slice object that we get back from this selector is different
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
