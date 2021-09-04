import React from 'react'
import './Home.css'

const Home = () => {
    return (
      <div className="wrapper fadeInDown">
      <div id="formContent" className="pt-5">
        <form>
          <input type="email" id="email" className="fadeIn second" name="email" placeholder="Email"/>
          <input type="password" id="password" className="fadeIn third" name="password" placeholder="password"/>
          <input type="submit" className="fadeIn fourth" value="Log In"/>
        </form>
        <div id="formFooter">
          {/* <a className="underlineHover" href="/">Forgot Password?</a> */}
        </div>
    
      </div>
    </div>
    )
}

export default Home
