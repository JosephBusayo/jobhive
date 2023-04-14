const React = require('react');
const Common = require('./layouts/common')
const Nav = require('./layouts/navbar')
const Footer = require('./layouts/footer')



function Home(props) {
    const { display } = props; //paased dispaly prop from route
    const show = display ? '' : 'none';


    return (
        <Common>
            <Nav 
                NavDisplay = {display}
            />
            <div className="header-wrapper">
                <h2 className="header-text">Jobs Feed</h2>

                <a href="/jobs/add" style={{display: show}} ><button className="btn add-btn">Add new job</button> </a>
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

                        <section className='edit-delete-wrapper' style={{display: show}}>
                                <div className='edit'><img src="/img/edit.png" alt="edit-icon"/></div>
                                <div className='delete'><img src="/img/delete.png" alt="delete-icon"/></div>
                        </section>
                    </div>
                ))}
            </section>
            <Footer />
        </Common>
    );
}

module.exports = Home;