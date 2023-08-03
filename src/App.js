import React,{useEffect, useState} from "react";
import "./App.css";

function App() {
  const serverURL = "http://localhost:3001"; //pass this to get requests; will do it tomorrow
  const [articles, setArticles]=useState([]);
  const [loading, setLoading]=useState(true);
  const queryParam = new URLSearchParams({
    q: 'bitcoin',
    searchIn:'', //title,description,content etc
    sortBy:'', //relevancy,popularity,publishedAt
    domains:'', //comma-separated string
    from:'', //2023-08-03
    to:'' //2023-08-03
  })
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${serverURL}?${queryParam}`);
      let response = await res.json();
      setArticles(response?.data?.articles)
    })()
  },[]) 
  useEffect(()=>{
    setLoading(false)
  },[articles])
  
  return(
    <div className="boxCardWrapper" data-testid="news">
      {articles.length == 0 ? <h1 className="loadingText">Loading...</h1>:
       articles.map(item => 
        <a data-testid='news_list' href={item.url} className="linkText">
          <img className="imageCard" src={item.urlToImage}/>
          <div className="contentWrapper">
            <h1>{item?.title}</h1>
            <h2>{item?.content}</h2>
            <h3>{item?.description}</h3>
            <p>Published Date: {item?.publishedAt}</p>
          </div>
          
        </a>
      )}

    </div>
    
    
    
  )
  
  
}

export default App;