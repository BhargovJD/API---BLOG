import React from 'react'

export default function Topbar() {
    return (
        <div>
            <div class="bg-gray-200 flex justify-center grid grid-cols-3 items-center">

                <div class=" text-4xl">
                    <h2 >Blog App</h2>
                </div>
                <div class="">
                    <div>
                        <ul class="flex justify-center">
                            <li class="mr-4">HOME</li>
                            <li class="mr-4">ABOUT</li>
                            <li class="mr-4">WRITE</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>

                </div>

                <div class=" flex flex-end items-center justify-end">
                    <div class="bg-white rounded overflow-hidden mr-4">
                        <img src='dp.jpg' class="w-full h-12 w-12 ">

                        </img>
                    </div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></div>
                </div>

            </div>
        </div>
    )
}
