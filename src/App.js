import React, { Component } from "react";
import logo from "./logo.svg";
import instagramLogo from "./insta.png";
import githubLogo from "./githubLogo.png";
import myPhoto from "./me.jpeg";
import "./App.css";

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null, page: 'Home' }
  }

  buttonGroup = () =>{
    return(
      <div style={{marginTop: '5vw', lineHeight:2}}>
        <a className='Home-Button-Group' href='javascript:;' style={{ borderColor: 'orange', color: 'orange', backgroundColor: 'white'}} onClick={this.goToPage("Home")}>Home</a>
        <a className='Home-Button-Group' href='javascript:;' style={{ borderColor: 'orange', color: 'orange', backgroundColor: 'white'}} onClick={this.goToPage("About")}>About Me</a>
        <a className='Home-Button-Group' href='javascript:;' style={{ borderColor: 'orange', color: 'orange', backgroundColor: 'white'}} onClick={this.goToPage("Portfolio")}>Portfolio</a>
        <a className='Home-Button-Group' href='javascript:;' style={{ borderColor: 'orange', color: 'orange', backgroundColor: 'white'}} onClick={(e) => { e.preventDefault(); window.open('https://docs.google.com/document/d/1Es2TRpVITOEojwldB8F0fNuyJkvFzGafw6Q0y1AiYco/edit?usp=sharing', "_blank")}}>Resume</a>
        <a className='Home-Button-Group' href='javascript:;' style={{ borderColor: 'orange', color: 'orange', backgroundColor: 'white'}} onClick={this.goToPage("Contact")}>Contact</a>
      </div>
    )
  }

  goToPage = name => e => {
    e.preventDefault()
    this.setState({page: name})
  }

  render() {
    const { loading, msg } = this.state
    if(this.state.page == 'Home'){
      return (
        <div className="App" style={{ backgroundImage: `url(${require("./bkg2.jpg")})`}}>
            <div className='Intro-Text'>
              <img className='header-image' src={myPhoto} alt="Logo" />
              <h1 className='Regular header-text'>Hi. My name is <span className='Bold' style={{color: 'orange'}}>Javaun Salmon</span>!</h1>.
              <div className="Sub-Intro-Text">
                <h3 className='Bold'>Degree: <span className='Regular'>Bachelors of Science</span></h3>
                <h3 className='Bold'>Study: <span className='Regular'>Management Information Systems</span></h3>
                <h3 className='Bold'>School: <span className='Regular'><a className='School-Link' style={{color: 'orange'}} href="https://www.rit.edu/" target="_blank">Rochester Institute of Technology</a></span></h3>
              </div>
              {this.buttonGroup()}
          </div>
      </div>
      )
    }

    if(this.state.page == 'About'){
      return(
        <div className="App" style={{ backgroundImage: `url(${require("./bkg2.jpg")})`}}>
            <div className='Intro-Text'>
              <h1 className='header-text' style={{color: 'orange', fontFamily: 'Righteous'}}>About Me</h1>.
              <div className="Sub-Intro-Text" style={{marginLeft: '20vw', marginRight: '20vw'}}>
                <p style={{fontSize: '18px'}} >
                  Hi! I am a software developer interested in using technology to improve business processes. My goal as a software developer is to write clean, easily maintained code. I enjoy thinking creatively and critically in order to build efficient software. In my free time, I like to sharpen my skills and learn new technologies.
                </p>
              </div>

            {this.buttonGroup()}
          </div>
      </div>
      )
    }

    if(this.state.page == 'Portfolio'){
      return(
        <div className="App" style={{ backgroundImage: `url(${require("./bkg2.jpg")})`}}>
            <div className='Intro-Text'>
              <h1 className='header-text' style={{color: 'orange', fontFamily: 'Righteous'}}>Portfolio</h1>.
              <div className='grid-container'>
                <div>
                  <a href="https://www.instagram.com/javaun.salmon.apps/" target="_blank"><img src={instagramLogo} style={{width: '100px', height: '100px'}}/></a>
                  <div>
                    <h2 style={{fontSize: '25px', fontFamily: 'Righteous', textDecoration: 'underline'}}>
                      JS Apps
                    </h2>
                    <p style={{fontSize: '18px'}}>
                      This is my instagram page that I built to showcase my freelance web development projects.
                    </p>
                  </div>
                </div>

                <div>
                  <a href="https://github.com/javaun-project" target="_blank"><img src={githubLogo} style={{width: '100px', height: '100px'}}/></a>
                  <div>
                    <h2 style={{fontSize: '25px', fontFamily: 'Righteous', textDecoration:'underline'}}>
                      Github Projects
                    </h2>
                    <p style={{fontSize: '18px'}}>
                      This is my github account where I post small projects that I developed using various web and mobile technologies.
                    </p>
                  </div>
                </div>
              </div>
            {this.buttonGroup()}
          </div>
      </div>
      )
    }

    if(this.state.page == 'Contact'){
      return(
        <div className="App" style={{ backgroundImage: `url(${require("./bkg2.jpg")})`}}>
            <div className='Intro-Text'>
              <h1 className='header-text' style={{color: 'orange', fontFamily: 'Righteous'}}>Let's Chat!</h1>.
              <div className="Sub-Intro-Text" style={{marginLeft: '20vw', marginRight: '20vw'}}>
                <p style={{fontSize: '16px'}}>
                  <strong>Phone:</strong> <a href="tel:3473573035" style={{color: 'orange'}}>(347)-357-3035</a>
                </p>

                <p style={{fontSize: '16px'}}>
                  <strong>Email:</strong> <a href="mailto:javaunsalmon@gmail.com" style={{color: 'orange'}}>javaunsalmon@gmail.com</a>
                </p>

                <p style={{fontSize: '16px'}}>
                  <strong>linkedin:</strong> <a href='https://www.linkedin.com/in/javaun-salmon-77944489/' style={{color: 'orange'}}>Javaun Salmon</a>
                </p>
              </div>

            {this.buttonGroup()}
          </div>
      </div>
      )
    }
  }
}

class App extends Component {
  render() {
    return (

            <Home />

    )
  }
}

export default App
