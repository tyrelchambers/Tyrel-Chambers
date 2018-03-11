import React, { Component } from 'react';

import './Resources.scss';

export default class Resources extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }
  componentDidMount() {
    const visible = !this.state.visible;
    setTimeout(() => {
      this.setState({visible});
    }, 100)
  }

  render() {
    const { visible } = this.state;
    const pageVisible = visible ? "fade-enter-active" : "fade-enter"

    const photography = [
      {
        title: 'Unsplash',
        icon: <i className="fas fa-camera"></i>,
        url: 'https://unsplash.com/',
        description: 'Great for finding beautiful landscape images'
      },
      {
        title: 'Gratisography',
        icon: <i className="fas fa-camera"></i>,
        url: 'https://gratisography.com/',
        description: 'Provides goofy pictures for a light feel'
      },
      {
        title: 'Subtle Patterns',
        icon: <i className="fas fa-camera"></i>,
        url: 'https://www.toptal.com/designers/subtlepatterns/',
        description: 'Find subtle texture patterns'
      }
    ]

    const tutorials = [
      {
        title: 'Codecademy',
        icon: <i className="fas fa-graduation-cap"></i>,
        url: 'https://www.codecademy.com/',
        description: 'Use interactive tutorials to build your skills'
      },
      {
        title: 'FreeCodeCamp',
        icon: <i className="fas fa-graduation-cap"></i>,
        url: 'https://www.codecademy.com/',
        description: 'In depth tutorials from a wide range of languages'
      },
      {
        title: 'Code Fights',
        icon: <i className="fas fa-graduation-cap"></i>,
        url: 'https://codefights.com/',
        description: 'Practice your skills with others'
      },
      {
        title: 'Code Wars',
        icon: <i className="fas fa-graduation-cap"></i>,
        url: 'https://www.codewars.com/',
        description: 'Use challenges to hone your skills'
      },
      {
        title: 'Go Lang',
        icon: <i className="fas fa-graduation-cap"></i>,
        url: 'https://golang.org/',
        description: 'A good resource for learning Go Lang'
      },
      {
        title: 'Css-Tricks',
        icon: <i className="fas fa-graduation-cap"></i>,
        url: 'https://css-tricks.com/',
        description: 'Learn about common Html and CSS tricks (very useful)'
      },
      {
        title: 'Udemy',
        icon: <i className="fas fa-graduation-cap"></i>,
        url: 'https://www.udemy.com/',
        description: 'My favourite tool for getting high quality video courses on a variety of topics'
      },
      {
        title: 'Lynda',
        icon: <i className="fas fa-graduation-cap"></i>,
        url: 'https://www.lynda.com/',
        description: 'Another great tool for video courses'
      }
    ]

    const codeResources = [
      {
        title: 'Codrops',
        icon: <i className="fas fa-code"></i>,
        url: 'https://tympanus.net/codrops/',
        description: 'Complex examples of cool code design and behaviour'
      },
      {
        title: 'Bulma',
        icon: <i className="fas fa-code"></i>,
        url: 'https://bulma.io/',
        description: 'Light weight CSS framework'
      },
      {
        title: 'Font Awesome',
        icon: <i className="fas fa-code"></i>,
        url: 'https://fontawesome.com/',
        description: 'Fantastic resource for finding icons'
      },
      {
        title: 'Google Fonts',
        icon: <i className="fas fa-code"></i>,
        url: 'https://fonts.google.com/',
        description: 'Resource for fonts'
      },
      {
        title: 'CSS Matic',
        icon: <i className="fas fa-code"></i>,
        url: 'https://www.cssmatic.com/',
        description: 'Handy little resource for gradients and shadows'
      },
      {
        title: 'Coggle',
        icon: <i className="fas fa-code"></i>,
        url: 'https://coggle.it/',
        description: 'Mind mapping tool to help organize your projects'
      },
      {
        title: 'Codepen',
        icon: <i className="fas fa-code"></i>,
        url: 'https://codepen.io/',
        description: 'Sandbox playground for testing and writing quick code'
      }
    ]

    const sourceControl = [
      {
        title: 'Github',
        icon: <i className="fas fa-cloud-upload-alt"></i>,
        url: 'https://github.com/',
        description: 'Powerful tool for storing your code'
      },
      {
        title: 'Gitlab',
        icon: <i className="fas fa-cloud-upload-alt"></i>,
        url: 'https://gitlab.com',
        description: 'A great tool for version control, with private repo\'s'
      }
    ]

    const cheatSheets = [
      {
        title: 'Emmet',
        icon: <i className="fas fa-file"></i>,
        url: 'https://docs.emmet.io/cheat-sheet/',
        description: 'Cheat sheet for a powerful coding tool'
      },
      {
        title: 'PostgreSQL',
        icon: <i className="fas fa-file"></i>,
        url: 'https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546',
        description: 'Cheat sheet for PostgreSQL'
      }
    ]

    const colourPickers = [
      {
        title: 'Material.io',
        icon: <i className="fas fa-paint-brush"></i>,
        url: 'https://material.io/guidelines/style/color.html#color-color-palette',
        description: 'Colour picker'
      },
      {
        title: 'Flat UI Color Picker',
        icon: <i className="fas fa-paint-brush"></i>,
        url: 'http://www.flatuicolorpicker.com/',
        description: 'Find beautiful flat colours.'
      },
      {
        title: 'Adobe Color Wheel',
        icon: <i className="fas fa-paint-brush"></i>,
        url: 'https://color.adobe.com/create/color-wheel/?base=2&rule=Analogous&selected=4&name=My%20Color%20Theme&mode=rgb&rgbvalues=1,0.8120800903086206,0.050000000000000044,0.91,0.4345013792222775,0.04550000000000004,1,0,0,0.6540623557406823,0.04550000000000004,0.91,0.11441763017496764,0.2319640517053544,1&swatchOrder=0,1,2,3,4',
        description: 'Tool for finding the right colour combinations'
      }
    ]

    const articles = [
      {
        title: 'How to setup up Nginx server blocks on Ubuntu 14.04',
        icon: <i className="fas fa-book"></i>,
        url: 'https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-14-04-lts',
        description: 'Learn how to configure Nginx on your Ubuntu 14.04 server'
      },
      {
        title: 'Good UI',
        icon: <i className="fas fa-book"></i>,
        url: 'http://goodui.org/',
        description: 'A good resource for learning Good UI'
      },
      {
        title: 'Sass Guidelines',
        icon: <i className="fas fa-book"></i>,
        url: 'https://sass-guidelin.es/',
        description: 'Learn important formatting for Sass'
      },
      {
        title: 'How To Be A Programmer',
        icon: <i className="fas fa-book"></i>,
        url: 'https://github.com/braydie/HowToBeAProgrammer/blob/master/README.md',
        description: 'Get an in-depth look at becoming a programmer'
      },
      {
        title: 'Create a Web Design Style Guide',
        icon: <i className="fas fa-book"></i>,
        url: 'https://designmodo.com/create-style-guides/',
        description: 'Learn how to create a design style guide'
      },
      {
        title: 'Angular 2 HTTP Requests with Observables',
        icon: <i className="fas fa-book"></i>,
        url: 'https://scotch.io/tutorials/angular-2-http-requests-with-observables',
        description: 'While a bit outdated, this resource can help explain the idea behind observables'
      },
      {
        title: 'Getting Started with Redux',
        icon: <i className="fas fa-book"></i>,
        url: 'https://egghead.io/courses/getting-started-with-redux',
        description: 'Video resource for learning Redux'
      },
      {
        title: 'Devise',
        icon: <i className="fas fa-book"></i>,
        url: 'http://devise.plataformatec.com.br/#starting-with-rails',
        description: 'Guide for the Devise gem'
      },
      {
        title: 'Building a Rails and Simple Form Contact Form',
        icon: <i className="fas fa-book"></i>,
        url: 'https://rubyonrailshelp.wordpress.com/2014/01/08/rails-4-simple-form-and-mail-form-to-make-contact-form/',
        description: 'An article that helped guide me to making a contact for in Rails'
      },
      {
        title: 'Building a Web App with Go Lang',
        icon: <i className="fas fa-book"></i>,
        url: 'http://blog.scottlogic.com/2017/02/28/building-a-web-app-with-go.html',
        description: 'Guide to building your own web app with Go Lang'
      },
      {
        title: 'FreeCodeCamp Guide',
        icon: <i className="fas fa-book"></i>,
        url: 'https://guide.freecodecamp.org/',
        description: 'In-depth guide to various programming elements'
      },
      {
        title: 'Simple React Router Guide',
        icon: <i className="fas fa-book"></i>,
        url: 'https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf',
        description: 'Simple guide to building out your React Router'
      },
      {
        title: ' 37 Best Sites to Learn Something New',
        icon: <i className="fas fa-book"></i>,
        url: 'https://entrepreneurs.maqtoob.com/the-37-best-websites-to-learn-something-new-895e2cb0cad4#.8e0i2le4f',
      }
    ]

    const servers = [
      {
        title: 'DigitalOcean',
        icon: <i className="fas fa-server"></i>,
        url: 'https://www.digitalocean.com/',
        description: 'Find affordable servers to host your websites'
      }
    ]

    const communication = [
      {
        title: 'Slack',
        icon: <i className="fas fa-comments"></i>,
        url: 'https://slack.com/',
        description: 'Incredibly useful tool for team communication'
      },
      
    ]

    const designSoftware = [
      {
        title: 'Affinity Photo',
        icon: <i className="fas fa-desktop"></i>,
        url: 'https://affinity.serif.com/en-gb/photo/',
        description: 'My preferred choice of photo editing software'
      },
      {
        title: 'Affinity Designer',
        icon: <i className="fas fa-desktop"></i>,
        url: 'https://affinity.serif.com/en-gb/',
        description: 'My preferred choice of vector design software'
      },
      {
        title: 'Adobe Illustrator',
        icon: <i className="fas fa-desktop"></i>,
        url: 'https://www.adobe.com/ca/products/illustrator.html?sdid=KKQML&mv=search&s_kwcid=AL!3085!3!227016237334!e!!g!!adobe%20illustrator&ef_id=Wnju7AAAAJq3SxvV:20180205235524:s',
        description: 'Subscription based vector design'
      },
      {
        title: 'Adobe Photoshop',
        icon: <i className="fas fa-desktop"></i>,
        url: 'https://www.adobe.com/ca/products/photoshop.html',
        description: 'Subscription based photo editing'
      },
      {
        title: 'Sketch',
        icon: <i className="fas fa-desktop"></i>,
        url: 'https://www.sketchapp.com/',
        description: 'Mac OS based prototyping tool'
      },
      {
        title: 'Invision',
        icon: <i className="fas fa-desktop"></i>,
        url: 'https://www.invisionapp.com/',
        description: 'Prototyping tool'
      }
    ]

    const projectManagement = [
      {
        title: 'Jira',
        icon: <i className="fas fa-comments"></i>,
        url: 'https://www.atlassian.com/software/jira?aceid=&adposition=1t1&adgroup=9124126102&campaign=189395542&creative=246574799455&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p19481529617&gclid=EAIaIQobChMIvuK2z_SM2QIVVrXACh3sCgPgEAAYASAAEgIuhvD_BwE&gclsrc=aw.ds',
        description: 'Fully rounded project management software'
      },
      {
        title: 'Trello',
        icon: <i className="fas fa-comments"></i>,
        url: 'https://trello.com/',
        description: 'Simple Kanban software for easy project management'
      }
    ]

    const books = [
      {
        title: 'Crushing It!',
        author: 'Gary Vaynerchuck',
        img: require('../../images/crushingit.jpg'),
        url: 'https://www.amazon.ca/Crushing-Great-Entrepreneurs-Business-Influence-ebook/dp/B072DV2GHG/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1517777443&sr=1-1&keywords=crushing+it'
      },
      {
        title: 'ReWork',
        author: 'Jason Fried, David Heinemeler Hansson',
        img: require('../../images/rework.jpeg'),
        url: 'https://www.amazon.ca/Rework-Jason-Fried/dp/0307463745/ref=sr_1_1?s=books&ie=UTF8&qid=1517779185&sr=1-1&keywords=rework'
      },
      {
        title: 'Practical Modern Javascript',
        author: 'Nicolas Bevacqua',
        img: require('../../images/practicaljs.jpg'),
        url: 'https://www.amazon.ca/Practical-Modern-JavaScript-Dive-Future/dp/149194353X/ref=sr_1_1?ie=UTF8&qid=1517778485&sr=8-1&keywords=practical+modern+javascript'
      },
      {
        title: 'The Rails 5 Way',
        author: 'Obie Fernandez',
        img: require('../../images/rails5.jpg'),
        url: 'https://www.amazon.ca/Rails-5-Way-4th/dp/0134657675/ref=sr_1_1?s=books&ie=UTF8&qid=1517778549&sr=1-1&keywords=rails+5+way'
      },
      {
        title: 'You Don\'t Know JS: Up & Going',
        author: 'Kyle Simpson',
        img: require('../../images/ydkjs.jpg'),
        url: 'https://www.amazon.ca/You-Dont-Know-JS-Going/dp/1491924462/ref=sr_1_2?s=books&ie=UTF8&qid=1517778620&sr=1-2&keywords=you+dont+know+js'
      },
      {
        title: 'You Don\'t Know JS: Scopes & Closures',
        author: 'Kyle Simpson',
        img: require('../../images/ydkjs2.jpg'),
        url: 'https://www.amazon.ca/You-Dont-Know-JS-Closures/dp/1449335586/ref=sr_1_4?s=books&ie=UTF8&qid=1517778620&sr=1-4&keywords=you+dont+know+js'
      },
      {
        title: 'You Don\'t Know JS: Async & Performance',
        author: 'Kyle Simpson',
        img: require('../../images/ydkjs3.jpg'),
        url: 'https://www.amazon.ca/You-Dont-Know-JS-Performance/dp/1491904224/ref=sr_1_6?s=books&ie=UTF8&qid=1517778620&sr=1-6&keywords=you+dont+know+js'
      },
      {
        title: 'You Don\'t Know JS: ES6 & Beyond',
        author: 'Kyle Simpson',
        img: require('../../images/ydkjs4.jpg'),
        url: 'https://www.amazon.ca/You-Dont-Know-JS-Beyond/dp/1491904240/ref=sr_1_5?s=books&ie=UTF8&qid=1517778620&sr=1-5&keywords=you+dont+know+js'
      },
      {
        title: 'You Don\'t Know JS: this & Object Prototype',
        author: 'Kyle Simpson',
        img: require('../../images/ydkjs5.jpg'),
        url: 'https://www.amazon.ca/You-Dont-Know-JS-Prototypes/dp/1491904151/ref=sr_1_3?s=books&ie=UTF8&qid=1517778620&sr=1-3&keywords=you+dont+know+js'
      },
      {
        title: 'You Don\'t Know JS: Types & Grammar',
        author: 'Kyle Simpson',
        img: require('../../images/ydkjs6.jpg'),
        url: 'https://www.amazon.ca/You-Dont-Know-JS-Grammar/dp/1491904194/ref=sr_1_1?s=books&ie=UTF8&qid=1517778620&sr=1-1&keywords=you+dont+know+js'
      }     
    ]

    return(
      <div className={"resource-wrapper container " + pageVisible}>
        <h1 className="text-center loud-title">A Curated List of Helpful Resources</h1>
        <p className="text-center">Here you will find a list of my own personal bookmarks, books I love and think you should get, and anything else I believe you will enjoy. I will try to keep this update to date with any new resources I find! I hope this helps you out!</p>
        <p className="text-center">Have something you think belongs on this list? Send me an email with a link and the name of the tool or book/article to <a href="mailto:tyrel@keyspark.io">tyrel@keyspark.io</a></p>
        <h1>Photography</h1>
        <ul className="resource-list photography">
          {photography.map((value, key) => {
            return(
              <li className="resource-styled resource" key={key}>
                <a href={value.url}>
                  {value.icon}
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </a>
              </li>
            );
          })}
        </ul>

        <h1>Tutorials</h1>
        <ul className="resource-list tutorials">
          {tutorials.map((value, key) => {
              return(
                <li className="resource-styled resource" key={key}>
                  <a href={value.url}>
                    {value.icon}
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </a>
                </li>
              );
            })}
        </ul>

        <h1>Code Resources</h1>
        <ul className="resource-list code-resources">
          {codeResources.map((value, key) => {
              return(
                <li className="resource-styled resource" key={key}>
                  <a href={value.url}>
                    {value.icon}
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </a>
                </li>
              );
            })}
        </ul>

        <h1>Source Control</h1>
        <ul className="resource-list source-control">
          {sourceControl.map((value, key) => {
              return(
                <li className="resource-styled resource" key={key}>
                  <a href={value.url}>
                    {value.icon}
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </a>
                </li>
              );
            })}
        </ul>

        <h1>Cheat Sheets</h1>
        <ul className="resource-list cheat-sheets">
          {cheatSheets.map((value, key) => {
              return(
                <li className="resource-styled resource" key={key}>
                   <a href={value.url}>
                    {value.icon}
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </a>
                </li>
              );
            })}
        </ul>

        <h1>Colour Pickers</h1>
        <ul className="resource-list colour-pickers">
          {colourPickers.map((value, key) => {
              return(
                <li className="resource-styled resource" key={key}>
                  <a href={value.url}>
                    {value.icon}
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </a>
                </li>
              );
            })}
        </ul>

        <h1>Articles</h1>
        <ul className="resource-list books-and-articles">
          {articles.map((value, key) => {
              return(
                <li className="resource-styled resource" key={key}>
                   <a href={value.url}>
                    {value.icon}
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </a>
                </li>
              );
            })}
        </ul>

        <h1>Servers/VPS</h1>
        <ul className="resource-list servers-vps">
          {servers.map((value, key) => {
              return(
                <li className="resource-styled resource" key={key}>
                   <a href={value.url}>
                    {value.icon}
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </a>
                </li>
              );
            })}
        </ul>

        <h1>Communication</h1>
        <ul className="resource-list communication">
          {communication.map((value, key) => {
              return(
                <li className="resource-styled resource" key={key}>
                   <a href={value.url}>
                    {value.icon}
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </a>
                </li>
              );
            })}
        </ul>

        <h1>Design Software</h1>
        <ul className="resource-list design-software">
          {designSoftware.map((value, key) => {
              return(
                <li className="resource-styled resource" key={key}>
                  <a href={value.url}>
                    {value.icon}
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </a>
                </li>
              );
            })}
        </ul>

        <h1>Project Management</h1>
        <ul className="resource-list project-management">
          {projectManagement.map((value, key) => {
              return(
                <li className="resource-styled resource" key={key}>
                   <a href={value.url}>
                    {value.icon}
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </a>
                </li>
              );
            })}
        </ul>

        <h1>Books</h1>
        <ul className="resource-list books">
          {books.map((value, key) => {
              return(
                <li className="resource" key={key}>
                  <a href={value.url}>
                    <img src={value.img} alt=""/>
                  </a>
                  <h3>{value.title}</h3>
                  <p>{value.author}</p>
                
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}