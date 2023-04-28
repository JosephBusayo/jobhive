const React = require('react');
const Common = require('./layouts/common')
const Nav = require('./layouts/navbar')
const Footer = require('./layouts/footer')



function Home(props) {
    const { display } = props; //paased dispaly prop from route
    const show = display ? '' : 'none';

    const handleDelete = (id) => {
        if (!id) {
            console.error('Invalid job ID:', id);
            return;
        }
        let endpoint = `/jobs/delete/${id}`

        fetch(endpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((data) => window.location.href = data.redirect)
            .catch(error => {
                console.log(error);
            });
    }



    return (
        <Common>
            <Nav
                NavDisplay={display}
            />
            <div className="header-wrapper">
                <h2 className="header-text">Admin Dashboard</h2>

                <a href="/jobs/add" style={{ display: show }} ><button className="btn add-btn">&#43;Add new job</button> </a>
            </div>

            <section className='job'>
                {props.jobs.map((job) => (

                    <section key={job._id} className='job-detail-container'>
                        <h2 className='job-title'>{job.title}</h2>

                        <div className='job-loc-wrapper'>
                            <div className='loc-icon'><img src="/img/loc-image.png" alt="loc-icon" /></div>
                            <p className='job-loc'>{job.company}</p>
                        </div>

                        <div className='job-tag-wrapper'>
                            <div className='tag-icon'><img src="/img/tag-image.png" alt="tag-icon" /></div>
                            <p className='job-tag'>{job.tag}</p>
                        </div>

                        <p className='job-type'>{job.type}</p>

                        <div className='job-salary'>{job.salary}</div>
                        <p className='job-date'>
                            Posted
                            {/* {new Date(job.createdAt).toLocaleDateString()} */}
                            {Math.floor((new Date() - new Date(job.createdAt)) / (1000 * 60 * 60 * 24))}
                            <pan> days ago</pan>
                        </p>


                        <div style={{ display: show }}>
                            <a href={`jobs/detail/${job.id}`}>
                                {`More details>>>>`}
                            </a>
                        </div>

                        <div className='edit-delete-wrapper' style={{ display: show }}>
                            <div className='edit'>
                                <a href={`/jobs/${job.id}/edit`}>
                                    <img src="/img/edit.png" alt="edit-icon" />
                                </a>
                            </div>

                            <a onClick={handleDelete(job.id)}>
                                <button value='DELETE' className="delete-btn">
                                    <div className='delete'><img src="/img/delete.png" alt="delete-icon" /></div>
                                </button>
                            </a>
                        </div>
                    </section>
                ))}

            </section>
            <Footer />
        </Common>
    );
}

module.exports = Home;