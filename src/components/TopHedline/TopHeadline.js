import axios from 'axios';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [article,setArticle]= useState([]);
    // useEffect(() =>{
    //     const url ='http://newsapi.org/v2/everything?q=tesla&from=2021-02-07&sortBy=publishedAt&apiKey=a5a580e605584ce9aa187acd50115573'
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setArticle(data.articles))
    // },[])
    useEffect(() =>{
        const url ='http://newsapi.org/v2/everything?q=tesla&from=2021-02-07&sortBy=publishedAt&apiKey=a5a580e605584ce9aa187acd50115573'
       axios(url)
       .then(data=> console.log(data))
      // .then(data=>setArticle(data.data.articles));
       
    },[])

    return (
        <div>
            <h1>Top Headline: {article.length}</h1>
            {
                article.map(article=> <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;