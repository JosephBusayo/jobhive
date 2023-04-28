const React = require('react');
const Common = require('./layouts/common')
const Nav = require('./layouts/navbar')
const Footer = require('./layouts/footer')


function Editjob({ job }) {
    return (
        <Common>
            <Nav />
            <section className="form-wrapper">
                <form action={`/jobs/${job.id}?_method=PUT`} className="job-form" method="POST">
                    <p>{job.title}</p>
                    <input type="text" id="title" name="title" required defaultValue={job.title} />

                    <input type="text" id="company" name="company" required defaultValue={job.company}/>

                    <input type="text" id="tag" name="tag" required defaultValue={job.tag}/>

                    <input type="text" id="type" name="type" required defaultValue={job.type}/>

                    <input type="text" id="salary" name="salary" required defaultValue={job.salary}/>

                    <textarea rows="4" cols="20" id="desc" name="desc" defaultValue={job.desc}></textarea>

                    <textarea rows="4" cols="20" id="todo" name="todo" defaultValue={job.todo}></textarea>

                    <textarea rows="4" cols="20" id="req" name="req" defaultValue={job.req}></textarea>

                    <input type="text" id="link" name="link" required defaultValue={job.link}/>

                    <button className="btn ">Submit</button>
                </form>
            </section>

            <Footer />
        </Common>
    );
}

module.exports = Editjob