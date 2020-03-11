import React, { Component } from 'react';
import './Main.css'

class Main extends Component {
    render() {
        if (this.props.data){
            var name = this.props.data.name
            var city = this.props.data.address.city
            var occupation = this.props.data.occupation
            var linkedin = this.props.data.social.linkedin.url
            var github = this.props.data.social.github.url
            var twitter = this.props.data.social.twitter.url
            var profilepic = "./images/" + this.props.data.image
            var resume = this.props.data.resumedownload
        }
        return (
            <div className="container">
                <div class="row">
                    <div className="text-left col-6">
                            <div id="hello">
                                <h1 className="text-align-bottom">Hello.</h1>
                            </div>
                        
                            <div id="name">
                                <h2>My name is {name}</h2>
                            </div>

                            {/* <div className="container">
                                <img id="profile-pic" src={profilepic} className="col-12 rounded-circle" alt="Profile Picture"></img>
                            </div> */}
                        
                        
                        <div id="about">
                            <p>
                            I am a {city} based {occupation}.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua <a href={linkedin} target="_blank">LinkedIn</a>.
                            </p>
                            <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                            doloremque laudantium, <a href={github} target="_blank">Github</a> totam rem aperiam, eaque ipsa quae ab illo inventore 
                            veritatis et quasi architecto <a href={twitter} target="_blank">Twitter</a> beatae 
                            vitae dicta sunt explicabo.
                            </p>
                            <p>
                            Excepteur sint occaecat <a href={resume} target="_blank">Resume</a> cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main