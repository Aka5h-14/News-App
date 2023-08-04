import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    updateNews();
  }, [,props.country]);

  const updateNews = async () => {
    props.progress(20);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    props.progress(40);
    let parsedData = await data.json();
    props.progress(60);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.progress(100);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
  }

  const waitToFetch = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    }

    useEffect(() => {
      waitToFetch();
    }, [page]);
  
  return (
    <>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex flex-wrap justify-around my-5">
          {articles.map((element, index) => {
            return (
              <NewsItem
                key={index}
                title={element.title}
                description={element.description}
                imageUrl={element.urlToImage}
                url={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  pageSize: 9,
  category: "sports",
};

News.propTypes = {
  pageSize: PropTypes.number.isRequired,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
