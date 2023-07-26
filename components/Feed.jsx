"use client"

import React, {useEffect, useState}  from 'react';
import PromptCardList from './PromptCardList';

function Feed() {
    
    const [searchText, setSearchText] = useState("");
    const [posts, setPosts] = useState([]);
    
    const handleSearchChange = (e) => {
        
    };
    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("/api/prompt");
            const data = await response.json();
            setPosts(data);
        };
        console.log("These are the posts ", posts);
        fetchPosts();
    }, []);

    return (
        <section className='feed'>
            <form className="relative w-full flex-center">
                <input type="text" placeholder='Search for a tag or a username' value={searchText} onChange={handleSearchChange} required className='search_input peer'/>
            </form>
            <PromptCardList data={posts} handleTagClick={()=>{}}/>
        </section>
    );
}

export default Feed;