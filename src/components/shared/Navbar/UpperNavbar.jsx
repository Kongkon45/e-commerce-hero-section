import React from 'react';

const UpperNavbar = () => {
    return (
        <div className='bg-secondary-100 py-[5px] container flex items-center justify-between'>
            <div className='flex items-center gap-[35px]'>
                <div>
                    <select className='bg-secondary-100 text-primary' value="language">
                        <option>Select Language</option>
                        <option>English</option>
                        <option>Bangla</option>
                    </select>
                </div>
                <p className='text-sm font-normal leading-normal text-black'>Help Center</p>
                <p className='text-sm font-normal leading-normal text-black'>Helpline: 0964781656</p>
            </div>
            <div className='flex items-center gap-[35px]'>
                <p className='text-sm font-normal leading-normal text-black'>Become a Seller</p>
                <p className='text-sm font-normal leading-normal text-black'>Order Track</p>
                <p className='text-sm font-normal leading-normal text-primary cursor-pointer hover:underline'>Sign up / Login</p>
            </div>
        </div>
    );
};

export default UpperNavbar;