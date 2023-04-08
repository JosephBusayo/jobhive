const React = require('react');
const Common = require('./layouts/common')


function Home(props) {
    return (
        <Common>
            <section className='home'>
                {props.jobs.map((job) => (
                    <div key={job._id}>
                        <h2 >{job.title}</h2>
                        <p>{job.desc}</p>
                    </div>
                ))}
            </section>
        </Common>
    );
}

module.exports = Home;