import React from "react";
import AddBookForm from "./AddBookForm";
import StoreHeader from "./StoreHeader";

const Shop = () => {
  return (
    <div className='py-12 2xl:px-6'>
      <div className='container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8'>
        <StoreHeader />
        <AddBookForm />
      </div>
    </div>
  );
};

export default Shop;
