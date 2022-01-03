import React from 'react'
import Post from './Post';

export default function Posts() {
    return (
        <div class="grid grid-cols-3">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}
