import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps={
    pageSize: 10,
    country: "in",
    category: "sports",
  }

  static propTypes={
    pageSize: PropTypes.number.isRequired,
    country: PropTypes.string,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  componentDidMount() {
    this.updateNews();
  }

  
  prevClick = async () => {
    console.log("-")
    console.log(this.state.page-1)
    await this.setState({page: this.state.page -1});
    this.updateNews()
  };
  
  nextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
      console.log("+")
      console.log(this.state.page+1)
      await this.setState({page: this.state.page +1});
      this.updateNews()
    };
  }
  
  updateNews= async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c708afc9a79f4c27bc9c5b40631dd7a2&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({
      loading: true
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false
    });
  }

  render() {
    return (
      <>
        <div className="flex flex-wrap justify-around my-5">
          {!(this.state.loading) && this.state.articles.map((element) => {
            return (
              <NewsItem
                key={element.url}
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

        {this.state.loading && <Spinner/>}

        <div className="flex mx-60 mb-10 justify-between">
          <button
            disabled={this.state.page <= 1}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={this.prevClick}
          >
            &larr; Prev
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={this.nextClick}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
