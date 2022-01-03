import React from 'react'

export default function SinglePostMain() {
    return (
        <div class="m-1 text-center">

            <div class="rounded-md overflow-hidden m-2 h-40">
                <img class="w-full h-50 object-cover" src='customers.jpg'>

                </img>
            </div>

            <div class="text-center"><span class="mr-2">Music</span><span>Life</span></div>

            <div>What is Lorem Ipsum?</div>
            <div>1 hour ago</div>
            <div>Author:<span>Bhargov</span></div>


{/* EDIT DELETE */}
            <div class="flex">
            <a class="mr-4 text-green-900" href=''><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg></a>
            <a href='' class="text-red-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
            </a>
        </div>
        <div class="text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>


        </div>
    )
}
