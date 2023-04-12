const React = require('react');
const Common = require('./common')


function Navbar(props) {
    return (
        <Common>
            <div className="nav">
                <div className="logo-wrapper">
                    <p>J</p>
                    <div className="logo-image"> <img src="/img/hive.png"/> </div> 
                    <p>bhive</p>
                </div>

                <div className="nav-btn-wrapper">
                    <a href="/auth/login"> <button className="btn login">Login</button> </a>
                    <a href="/auth/register"> <button className="btn register">Register</button> </a>
                </div>
            </div>

        </Common>
    );
}

module.exports = Navbar;