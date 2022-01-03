import React from 'react'

export default function Login() {
    return (
        <div>
            <form>
                <h2 class="text-2xl">Log in</h2>

                <label>Email</label>
                <br></br>
                <input type="email" placeholder='Email'></input>
                <br/>

                <label>Password</label>
                <br></br>
                <input type="password" placeholder='Password'></input>
                <br/>



                <button type='button'>Log in</button>
            </form>

            <a href=''>Register</a>


        </div>
    )
}
