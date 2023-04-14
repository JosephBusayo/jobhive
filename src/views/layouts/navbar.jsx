const React = require('react');
const Common = require('./common')


function Navbar(props) {
    const { NavDisplay } = props; //this prop is passed from home view not from any route

    return (
        <Common>
                <div className="nav">
                    <a href="/jobs">
                        <div className="logo-wrapper">
                            <p>J</p>
                            <div className="logo-image"> <img src="/img/hive.png"/> </div> 
                            <p>bhive</p>
                        </div>
                    </a>

                    <div>
                        <div className="nav-btn-wrapper" style={{display: NavDisplay ? 'none' : ''}} >
                            <a href="/auth/login"> <button className="btn login-btn">Login</button> </a>
                            <a href="/auth/register"> <button className="btn register-btn">Register</button> </a>
                        </div>

                        <form style={{display: NavDisplay ? '' : 'none'}} action="/auth/logout" className="" method="POST">
                            <button className='btn'>Logout</button>
                        </form>
                    </div>

                </div>
        </Common>
    );
}

module.exports = Navbar;