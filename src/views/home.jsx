const React = require('react');



function HelloMessage(props) {
    console.log(props.title);
    return (
        <section>
            {props.jobs.map((job) => (
                <div key={job._id}>
                    <h2 >{job.title}</h2>
                    <p>{job.desc}</p>
                </div>
            ))}
        </section>
    );
}

module.exports = HelloMessage;