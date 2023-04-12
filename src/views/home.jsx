const React = require('react');
const Common = require('./layouts/common')
const Nav = require('./layouts/navbar')

function Home(props) {
    return (
        <Common>
            <Nav />
            <div className="header-wrapper">
                <h2 className="header-text">Jobs Feed</h2>
                <a href="/jobs/add"><button className="btn add">Add new job</button> </a>
            </div>

            <section className='job'>
                {props.jobs.map((job) => (
                    <div key={job._id}  className='job-detail-container'>
                        <h2 className='job-title'>{job.title}</h2>

                        <div className='job-loc-wrapper'>
                            <div className='loc-icon'><img src="/img/loc-image.png" alt="loc-icon"/></div>
                            <p className='job-loc'>{job.company}</p>
                        </div>

                        <div className='job-tag-wrapper'>
                            <div className='tag-icon'><img src="/img/tag-image.png" alt="tag-icon"/></div>
                            <p className='job-tag'>{job.tag}</p>
                        </div>

                        <p className='job-type'>{job.type}</p>

                        <div className='job-salary'>$2000 - $3000 monthly</div>
                        <p className='job-date'>Posted 3 days ago</p>
                    </div>
                ))}
            </section>
        </Common>
    );
}

module.exports = Home;