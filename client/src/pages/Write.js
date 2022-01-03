import React from 'react'

export default function Write() {
    return (
        <div class="text-center mt-10">
            <form>
                <input type="text" placeholder='Title...'></input>
                <br/>
                <input type="text" placeholder='Tel your story...'></input>
                <br/>
                <input type="file"></input>
                <br/>

                <button type='button'>Publish</button>
            </form>
        </div>
    )
}
