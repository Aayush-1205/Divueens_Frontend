import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import MyProfilePage from './GauravAndMahak/MyProfilePage';
import Wishlist from './Arpana/Wishlist';
import MyOrder from './Jatin/myOrder';

function ProfilePage() {
    const [isTabActive, setIsTabActive] = useState('myprofile');
    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem('name') || "";
        const email = localStorage.getItem('email') || "";
        const contact = localStorage.getItem('contact') || "";
        const birthday = localStorage.getItem('birthday') || "";
        const gender = localStorage.getItem('gender') || "";

        if (name === "" || email === "" || contact === "" || birthday === "" || gender === "") {
            setIsTabActive('myprofile');
        }
    }, []);

    const handleTabActiveState = (tab) => {
        setIsTabActive(tab);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/"); 
    }

    const renderContent = (tab) => {
        switch (tab) {
            case 'myprofile':
                return <MyProfilePage />;
            case 'wishlist':
                return <Wishlist />;
            case 'myorders':
                return <MyOrder />;
            default:
                return <MyProfilePage />;
        }
    }

    return (
        <div className='flex px-4 lg:px-44 justify-center'>
            <div className='flex flex-col items-center md:items-start mt-4 border border-rose-400 rounded-3xl md:pl-6 gap-6 md:gap-4 md:w-56 w-12 md:h-[28rem]'>
                <h2 className='hidden sm:flex font-semibold pt-4 md:text-[20px]'>My Account</h2>
                <div
                    onClick={() => handleTabActiveState("myprofile")}
                    className={`flex items-start md:items-center mt-8 md:mt-0 md:w-full rounded-full md:rounded-e-xl sm:gap-3 hover:bg-rose-300 hover:text-white p-2 cursor-pointer ${isTabActive === 'myprofile' ? 'bg-rose-300 text-white' : ''}`}>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><CgProfile /></div>
                    <h3 className='hidden md:flex'>My Profile</h3>
                </div>
                <div
                    onClick={() => handleTabActiveState("wishlist")}
                    className={`flex items-start md:items-center md:w-full rounded-full md:rounded-e-xl sm:gap-3 hover:bg-rose-300 hover:text-white p-2 cursor-pointer ${isTabActive === 'wishlist' ? 'bg-rose-300 text-white' : ''}`}>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><FaRegHeart /></div>
                    <h3 className='hidden md:flex'>Wishlist</h3>
                </div>
                <div
                    onClick={() => handleTabActiveState("myorders")}
                    className={`flex items-start md:items-center md:w-full rounded-full md:rounded-e-xl sm:gap-3 hover:bg-rose-300 hover:text-white p-2 cursor-pointer ${isTabActive === 'myorders' ? 'border-b-[2px] border-b-rose-700' : ''}`}>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><RiShoppingCartLine /></div>
                    <h3 className='hidden md:flex'>My Orders</h3>
                </div>
                <div
                    onClick={handleLogout}
                    className='flex items-start md:items-center md:w-full rounded-full md:rounded-e-xl sm:gap-3 hover:bg-rose-300 hover:text-white p-2 cursor-pointer'>
                    <div className='text-[1.2rem] md:text-[1rem] lg:text-[1.5rem]'><MdLogout /></div>
                    <h3 className='hidden md:flex'>Logout</h3>
                </div>
            </div>
            <div className='w-[80%] h-[full] bg-white'>
                {renderContent(isTabActive)}
            </div>
        </div>
    );
}

export default ProfilePage;