import React, { Component } from 'react';
import $ from 'jquery';

import './InstagramFeed.scss';

export default class InstragramFeed extends Component {
  componentDidMount() {
    let token = '34287536.a6ef9f9.5b2574fa31eb4fb0b3fbe86646b54af8';
    
    $.ajax({
      method: 'GET',
      url: 'https://api.instagram.com/v1/users/34287536/media/recent/?access_token=' + token,
      dataType: 'json',
      data: JSON.stringify(this.url),
      success: (data) => {
        for(var i = 0; i < 10; i++) {
          $('.insta-list').append(`
            <li class="insta-img">
              <a class="no-decoration" href="${data.data[i].link}">
                <img src="${data.data[i].images.standard_resolution.url}" alt="Instagram Image" />
                <div class="insta-description">
                  <div class="insta-header">
                    <h4>@${data.data[i].user.username}</h4>
                    <p>${data.data[i].likes.count} Liked</p>
                  </div>
                  <div class="insta-caption">
                    <p>${data.data[i].caption.text}</p>
                    <span class="tags">
                    ${data.data[i].tags.map((item) => `
                      <p>#${item}</p>
                    `).join("")}
                    </span>
                  </div>
                </div>
              </a>
            </li>
          `);
        } 
      }
    })

  }
  render() {
    
    return (
      <div className="insta-feed container">
        <h2 className="text-center loud-title">Instagram Feed</h2>
        <p className="text-center">I post random things on my Instagram. I'm sure at some point they'll become more focused, but for now they are everything I find interesting!</p>
        <ul className="insta-list">

        </ul>
      </div>
    );
  }
}