import './App.css'

function Header(){
  return (
      <div className="header">
          <img src="./profile-pic.jpg" alt="Developer Selfie"/>
          <h1>Raluca Alexandra Luchian</h1>
          <p className="title-name">Frontend Developer</p>
          <a href="mailto: ralucaalexandraluchian@gmail.com" target="_blank" rel="noreferrer"> 
              <button className="btn">Email</button> 
          </a>
      </div>
      
  )
}

function About() {
  return (
      <>
          <h3>About</h3>
          <p>I am a frontend developer with a particular interest in keeping things simple and clean. I try to keep up with good practices, and I look forward to new things I could learn. I am my worst critic, always looking for ways to improve my projects and my skills.</p>
      </>
  )
}

function Interests(){
  return (
      <>
          <h3>Interests</h3>
          <p>True crime. Constant Reader (a more chill one compared to Annie Wilkes). Music geek, especially for Taylor Swift and Lana del Rey. Science stuff. Binge watching 2000's medical shows.</p>
      </>
  )
}

function Footer(){
  return (
      <>
          <footer>
              <a href="https://github.com/raluchian" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github fa-fade fa-2xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/raluca-alexandra-luchian-180900251/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin fa-fade fa-2xl"></i>
              </a>
              <a href="https://www.facebook.com/raluchian/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-facebook fa-fade fa-2xl"></i>
              </a>
          </footer>
      </>
  )
}
export {Header, About, Interests, Footer};
