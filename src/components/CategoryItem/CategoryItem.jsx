import React from 'react';

const CategoryItem = ({category}) => {
    const {logo,category_name,availability}=category
    return (
        <div className='border p-7  border-r-2 rounded mt-2  m-3 text-center'>
          <img className='text-center ml-9' src={logo} alt="" />
            <p>{category_name}</p>
            <p>{availability}</p>
        </div>
    );
};

export default CategoryItem;