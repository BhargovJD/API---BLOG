import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, }  from 'react-router-dom'
import Login from './../pages/Login';


export default function Topbar() {
    const user = true;

    return (
        <div>
            <div class="bg-gray-200 flex justify-center grid grid-cols-3 items-center">

                <div class=" text-4xl">
                    <h2 >Blog App</h2>
                </div>
                <div class="">
                    <div>
                        <ul class="flex justify-center">
                            <li class="mr-4"><Link to="/">Home</Link></li>
                            <li class="mr-4"><Link to="/contact">Contact</Link></li>
                            <li class="mr-4"><Link to="/write">Write</Link></li>            <li class="mr-4"><Link to="/logout">{user && "Logout"}</Link></li>
                        </ul>
                    </div>

                </div>

                <div class=" flex flex-end items-center justify-end">
                    <div class="bg-white rounded overflow-hidden mr-4">
                       {user ? (<img src='dp.jpg' class="w-full h-12 w-12 "></img>):(
                           <>
                            <li class="mr-4"><Link to="/login">Login</Link></li>
                           <li class="mr-4"><Link to="/register">Register</Link></li>
                           </>

                       )
                       }
                    </div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></div>
                </div>

            </div>
        </div>
    )
}
