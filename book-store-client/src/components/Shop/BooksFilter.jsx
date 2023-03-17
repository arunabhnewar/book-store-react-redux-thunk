import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusChangedAction } from "../../redux/filters/filtersActionType";

const BooksFilter = () => {
  // Use Selector
  const filters = useSelector(state => state.filters);

  // Dispatch
  const dispatch = useDispatch();
  // Extract data from filter
  const { status } = filters;

  // Status change handler function
  const statusChangeHandler = status => {
    dispatch(statusChangedAction(status));
  };

  return (
    <div className='flex items-center justify-between mb-12'>
      <h4 className='mt-2 text-xl font-bold'>Book List</h4>

      <div className='flex items-center space-x-4'>
        <button
          className='filter-btn active-filter'
          id='lws-filterAll'
          onClick={() => statusChangeHandler("All")}>
          All
        </button>
        <button
          className='filter-btn'
          id='lws-filterFeatured'
          onClick={() => statusChangeHandler("Featured")}>
          Featured
        </button>
      </div>
    </div>
  );
};

export default BooksFilter;
