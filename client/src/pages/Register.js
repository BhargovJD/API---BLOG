import React from 'react'

export default function Register() {
    return (
        <div>
        <h2 class="text-2xl">Register</h2>

            <form>
                <label>User name</label>
                <br></br>
                <input type="text" placeholder='username'></input>
                <br/>

                <label>Email</label>
                <br></br>
                <input type="email" placeholder='Email'></input>
                <br/>


                <label>Password</label>
                <br></br>
                <input type="password" placeholder='Password'></input>
                <br/>



                <button type='button'>Register</button>
            </form>



        </div>
    )
}
