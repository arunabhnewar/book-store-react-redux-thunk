import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBook from "../../redux/books/thunk/addBook";
import updateFeatured from "../../redux/books/thunk/upadateFeatured";

const AddBookForm = () => {
  // Use selector
  const editing = useSelector(state => state.editing);

  // Dispatch
  const dispatch = useDispatch();

  // use state
  const [bookInfo, setBookInfo] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  // Editable state
  const [isEditMode, setIsEditMode] = useState(false);

  // Use Effect
  useEffect(() => {
    if (editing?.id) {
      setIsEditMode(true);
      setBookInfo({
        name: editing?.name,
        author: editing?.author,
        thumbnail: editing?.thumbnail,
        price: editing?.price,
        rating: editing?.rating,
        featured: editing?.featured,
      });
    } else {
      setIsEditMode(false);
    }
  }, [editing]);

  // Input data handle function
  const inputsDataHandle = e => {
    // console.log(e.target.name);
    // console.log(e.target.type);

    if (e.target.type === "text" || e.target.type === "number") {
      setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
    } else {
      setBookInfo({ ...bookInfo, [e.target.name]: e.target.checked });
      console.log([e.target.name]);
    }
  };

  // OnSubmit Function
  const submitHandler = e => {
    e.preventDefault();
    dispatch(addBook(bookInfo));
    resetData();
  };

  // Update Book info after editing
  const updatedBookInfo = e => {
    e.preventDefault();
    dispatch(updateFeatured(editing?.id, bookInfo));
  };

  // Reset inputs data
  function resetData() {
    setBookInfo({
      ...bookInfo,
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  }

  // Extract data from book info state
  const { name, author, thumbnail, price, rating, featured } = bookInfo;

  return (
    <div>
      <div className='p-4 overflow-hidden bg-white shadow-cardShadow rounded-md'>
        <h4 className='mb-8 text-xl font-bold text-center'>Add New Book</h4>

        <form
          className='book-form'
          onSubmit={isEditMode ? updatedBookInfo : submitHandler}>
          <div className='space-y-2'>
            <label htmlFor='name'>Book Name</label>
            <input
              required
              className='text-input'
              type='text'
              id='input-Bookname'
              name='name'
              value={name}
              onChange={inputsDataHandle}
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='category'>Author</label>
            <input
              required
              className='text-input'
              type='text'
              id='input-Bookauthor'
              name='author'
              value={author}
              onChange={inputsDataHandle}
            />
          </div>

          <div className='space-y-2'>
            <label htmlFor='image'>Image Url</label>
            <input
              required
              className='text-input'
              type='text'
              id='input-Bookthumbnail'
              name='thumbnail'
              value={thumbnail}
              onChange={inputsDataHandle}
            />
          </div>

          <div className='grid grid-cols-2 gap-8 pb-4'>
            <div className='space-y-2'>
              <label htmlFor='price'>Price</label>
              <input
                required
                className='text-input'
                type='number'
                id='input-Bookprice'
                name='price'
                value={price}
                onChange={inputsDataHandle}
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor='quantity'>Rating</label>
              <input
                required
                className='text-input'
                type='number'
                id='input-Bookrating'
                name='rating'
                min='1'
                max='5'
                value={rating}
                onChange={inputsDataHandle}
              />
            </div>
          </div>

          <div className='flex items-center'>
            <input
              id='input-Bookfeatured'
              type='checkbox'
              name='featured'
              className='w-4 h-4'
              checked={featured}
              onChange={inputsDataHandle}
            />
            <label htmlFor='featured' className='ml-2 text-sm'>
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type='submit' className='submit' id='submit'>
            {isEditMode ? "Update" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
