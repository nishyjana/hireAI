import React from 'react';
import { useHistory } from 'react-router-dom';
import { SIGNIN } from '../constants/PathConstants';
import SideBarElements from './SideBarElements';

export default function Sidebar() {
    const history = useHistory();
    return (
        <div className="w-full bg-hireAI h-screen text-white">
            <div className="p-10 pb-2 ">LOGO</div>
            <SideBarElements />
            <div
                className={`mb-3 py-2 ml-2 w-full mt-32`}
                role="button"
                tabIndex={0}
                onClick={() => {
                    localStorage.clear();
                    setTimeout(() => {
                        localStorage.clear();
                        history?.push(SIGNIN);
                    }, 500);
                }}
            >
                <div className="flex flex-row  h-10 mx-6 pt-2">
                    <img src="images\Logout.svg" className="w-7" alt="" />

                    <div className="mx-5 mt-1 font-poppins text-sm">LOGOUT </div>
                </div>
            </div>
        </div>
    );
}
