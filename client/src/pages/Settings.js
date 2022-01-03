import React from 'react'

export default function Settings() {
    return (
        <div>
            <div>

                <div>Update your acoount</div>
                <a href='' class="text-red-500">Delete Account</a>

                <hr/>
                <div class="bg-white rounded overflow-hidden mr-4">
                    <h3>Profile photo</h3>
                        <img src='dp.jpg' class="w-full h-12 w-12 ">

                        </img>
                    </div>

                    <div>
                    <form>
                <label>User name</label>
                <br></br>
                <input type="text" placeholder='username'></input>
                <br/>

                <label>Email</label>
                <br></br>
                <input type="email" placeholder='Email'></input>
                <br/>

                <label>Change Dp</label>
                <br></br>
                <input type="file"></input>
                <br/>

                <label>Password</label>
                <br></br>
                <input type="password" placeholder='Password'></input>
                <br/>



                <button type='button'>Update</button>
            </form>
                    </div>

            </div>
        </div>
    )
}
