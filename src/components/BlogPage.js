import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import blogEntries from "../data/blogEntries"
import BlogEntry from "./BlogEntry"


const BlogPage = () => (
    <>
        <Header/>
        <h1> BlogPage </h1>
        {blogEntries.map(blogEntry => (<>
        <h4>{blogEntry.id}</h4>
        <h2>{blogEntry.title}</h2>
        <p>{blogEntry.body}</p>
        </>))
        }
        <Footer/>
    </>
);

export default BlogPage;