import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const news = [
  {
    id: '1',
    title: 'What is Lorem Ipsum?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  }, {
    id: '2',
    title: 'Why do we use it?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  }, {
    id: '3',
    title: 'Where does it come from?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  }, {
    id: '4',
    title: 'Where can I get some?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  }, {
    id: '5',
    title: 'Variations of Lorem Ipsum ',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
];

class News extends Component {
  componentDidMount() {
    const userToken = localStorage.getItem('userToken');

    if (!userToken) {
      this.props.history.push('login')
    }
  }

  render() {
    return (
      <div className="page-container">
        <div className="title">
          News
        </div>
        <div className="content-container">
          {news.map(singleNews => {
            const shareUrl = `https://google.com/${singleNews}`; // localhost is not valid url

            return (
              <div key={singleNews.id} className="single-news">
                <h3>{singleNews.title}</h3>
                <p>{singleNews.text}</p>
                <Link to={`/news/${singleNews.id}`} className="single-news-link">
                  More...
                </Link>
                <FacebookShareButton
                  url={shareUrl}
                  quote={'Share'}
                  className="share-button">
                  <FacebookIcon
                    size={32}
                    round />
                </FacebookShareButton>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default News;