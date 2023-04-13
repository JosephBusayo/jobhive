const React = require('react');
const Common = require('./layouts/common')


function Login(props) {
    return (
        <Common >
            <section className="login-wrapper">
                <div className='login'>
                    <h2 className='login-title'>Log in to your account</h2>

                    <div className=''>
                        <p>Sign In with Github</p>
                        <div className=''><img src="../loc-image.png" alt="" /></div>
                    </div>

                    <form action="/auth/login" className="form-wrapper auth-form" method="POST">
                        <input className='input' placeholder='Email' name='email' />
                        <input className='input' placeholder='Password' name='password' />
                        <button className='btn continue'>Login</button>
                    </form>

                    <p> Don't have an account? <a href="/auth/register">Sign Up</a> </p>
                </div>
            </section>
        </Common>
    );
}

module.exports = Login;
