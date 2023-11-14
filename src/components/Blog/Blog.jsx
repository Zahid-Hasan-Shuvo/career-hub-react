import React from 'react';

const Blog = () => {
    return (
        <div>
           <h1 className='text-2xl font-bold text-center mt-7'>
           Welcome to blog page
           </h1>
<div className='ml-16'>

<h3 className='text-green-500 font-semibold'>1.When use context api?</h3>
We can use Context API to store the current theme of your application and make it available to all components.This way, whenever the user switches the theme all components will be updated with the new theme.

<h3 className='text-green-500 font-semibold'>2.What is custom hook?</h3> 
A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.

<h3 className='text-green-500 font-semibold'>3.What is useRef? And Why should it uses?</h3> 
The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.

<h3 className='text-green-500 font-semibold'>4.What is useMemo? And Why should it uses?</h3> 
useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.
</div>
        </div>
    );
};

export default Blog;