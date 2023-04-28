const React = require('react');
const Common = require('./layouts/common')
const Nav = require('./layouts/navbar')
const Footer = require('./layouts/footer')



function Detail(props) {
    const { display, job, title } = props; //paased dispaly prop from route
    const show = display ? '' : 'none';


    return (
        <Common>
            <Nav NavDisplay={display} />

            <section className='detail'>
                <section className='detail-upper'>
                    <h2 className='job-title detail-title'>{job.title}</h2>
                    <div className='job-loc-wrapper'>
                        <div className='loc-icon'><img src="/img/loc-image.png" alt="loc-icon" /></div>
                        <p className='job-loc' style={{fontSize: '20px'}} >{job.company}</p>
                    </div>

                    <div style={{display: 'flex', justifyContent: 'space-between'}}> 
                        <div className='job-tag-wrapper'>
                            <div className='tag-icon'><img src="/img/tag-image.png" alt="tag-icon" /></div>
                            <p className='job-tag' style={{fontSize: '2opx'}} >{job.tag}</p>
                        </div>

                        <p style={{fontSize: '18px'}} >Posted 3 days ago</p>
                    </div>
                </section>


                <section className='detail-lower'>
                    <div>
                        <h5>Job Type</h5>
                        <p className='job-type'>{job.type}</p>
                    </div>
                    <div>
                        <h5>Job Description</h5>
                        <p>{job.desc}</p>
                    </div>
                    <div>
                        <h5>What you'll do</h5>
                        <p>{job.todo}</p>
                    </div>
                    <div>
                        <h5>Requirements</h5>
                        <p>{job.req}</p>
                    </div>
                    <div className='job-salary'>{job.salary}</div>

                </section>
            </section>
            <Footer />
        </Common>
    );
}

module.exports = Detail;