const React = require('react');
const Common = require('./common')


function Navbar(props) {
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

                <div className="nav-btn-wrapper">
                    <a href="/auth/login"> <button className="btn login-btn">Login</button> </a>
                    <a href="/auth/register"> <button className="btn register-btn">Register</button> </a>

                    <form action="/auth/logout" className="btn register-btn" method="POST">
                        <button className='btn continue'>Logout</button>
                    </form>
                </div>
            </div>

        </Common>
    );
}

module.exports = Navbar;