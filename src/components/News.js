import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    pageSize: 9,
    category: "sports",
  };

  static propTypes = {
    pageSize: PropTypes.number.isRequired,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.updateNews();
  }

  updateNews = async () => {
    this.props.progress(20)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0cefa0183ec14368a1521a0cf177a24e&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.progress(40)
    let parsedData = await data.json();
    this.props.progress(60)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    })
    this.props.progress(100)
  }

  fetchMoreData = async () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      async () => {
        console.log(this.state.page);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0cefa0183ec14368a1521a0cf177a24e&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(
          {
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
          }
          , async () => {
          console.log(this.state.articles.length);
          console.log(this.state.totalResults);
          console.log(this.state.articles.length !== this.state.totalResults)})
        })
      }

  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="flex flex-wrap justify-around my-5">
            {this.state.articles.map((element, index) => {
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
  }
}

export default News;
