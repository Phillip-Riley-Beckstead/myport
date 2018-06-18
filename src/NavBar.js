import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component{
    render(){
        return(
            <div>


                <nav>

                    <a><Link to="/"><button>Home</button></Link></a>

                    <a><Link to="/AboutMe"><button>About Me</button></Link></a>

                    <a><Link to="/ContactMe"><button>Contact Me</button></Link></a>

                    <a><Link to="/WorkHistory"><button>WorkHistory</button></Link></a>


                </nav>

            </div>
        )
    }
}
export default NavBar
