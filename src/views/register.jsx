const React = require('react');
const Common = require('./layouts/common')


function Register(props) {
    return (
        <Common >
            <section className="register-wrapper">
                <div className='register'>
                    <h2 className='login-title'>Create an account</h2>

                    <div className=''>
                        <p>Sign In with Github</p>
                        <div className=''><img src="../loc-image.png" alt="" /></div>
                    </div>

                    <form action="/auth/register" className="form-wrapper auth-form" method="POST">
                        <input className="input" placeholder="Email" name="email" />
                        <input className="input" placeholder="Password" name="password" />
                        <button className="btn continue">Continue</button>
                    </form>

                </div>
            </section>
        </Common>
    );
}

module.exports = Register;
