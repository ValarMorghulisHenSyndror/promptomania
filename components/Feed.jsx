"use client"

import React, {useEffect, useState}  from 'react';
import PromptCardList from './PromptCardList';

function Feed() {
    const [posts, setPosts] = useState([]);

    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("/api/prompt");
            const data = await response.json();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const filterPrompts = (searchtext) => {
        const regex = new RegExp(searchtext, "i")
        return posts.filter((item)=>regex.test(item.creator.username) || regex.test(item.tag) || regex.test(item.prompt))
    }
    
    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value)
        
        setSearchTimeout(
            setTimeout(() => {
                const searchResults = filterPrompts(e.target.value);
                setSearchedResults(searchResults);
            }, 500)
        );
    };

    const handleTagClick = (tagName) => {
        setSearchText(tagName);
        const searchResults = filterPrompts(tagName)
        setSearchedResults(searchResults) 
    }
    

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    className="search_input peer"
                />
            </form>
            {searchText ? (
                <PromptCardList
                    data={searchedResults}
                    handleTagClick={handleTagClick}
                />
            ) : (
                <PromptCardList
                    data={posts}
                    handleTagClick={handleTagClick}
                />
            )}
        </section>
    );
}

export default Feed;