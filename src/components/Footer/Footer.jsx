import React from 'react';
import logo from '../../assets/icons/social.png'

const Footer = () => {
    return (
        <div className='grid grid-cols-5 gap-3 mt-7 bg-black rounded p-16 '>
            <div className='text-white' >
             <h2 className='font-bold text-white mb-4'>CareerHub</h2>
             <p className='text-zinc-400 mb-3'> There are many variations of passage of Uses. But the majority have suffered alternation in some form  </p>
            <img src={logo} alt="" />
            </div>


<div className='text-white'>
    <h1 className='font-bold text-white mb-4 '>Company</h1>
    <p className='text-zinc-400 mb-3'>About Us</p>
    <p className='text-zinc-400 mb-3'>Work</p>
    <p className='text-zinc-400 mb-3'>Latest News</p>
    <p className='text-zinc-400 mb-3'>Careers</p>
</div>

<div className='text-white'>
    <h1 className='font-bold mb-4 text-white'>Product</h1>
    <p className='text-zinc-400 mb-3'>Prototype</p>
    <p className='text-zinc-400 mb-3'>Plan & Pricing</p>
    <p className='text-zinc-400 mb-3'>Customers</p>
    <p className='text-zinc-400 mb-3'>Integrations</p>
</div>

<div className='text-white'>
    <h1 className='font-bold text-white mb-4 '>Support</h1>
    <p className='text-zinc-400 mb-3'>Help Desk</p>
    <p className='text-zinc-400 mb-3'>sales</p>
    <p className='text-zinc-400 '>Become a partner</p>
    <p className='text-zinc-400 '>Developers</p>
</div>
<div className='text-white'>
    <h1 className='font-bold mb-4 '>Contact</h1>
    <p className='text-zinc-400 mb-3'>524 Broadway, NYC</p>
    <p className='text-zinc-400 mb-3'>+17777-978-5570</p>
 
</div>


        </div>
    );
};

export default Footer;