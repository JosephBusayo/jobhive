const React = require('react');
const Common = require('./layouts/common')
const Nav = require('./layouts/navbar')
const Footer = require('./layouts/footer')


function Addjob(props) {
  return (
    <Common>
      <Nav />
      
      <section className="form-wrapper">
        <form action="/jobs/add" className="job-form" method="POST">
          <input type="text" placeholder="Job Title" id="title" name="title" required />

          <input type="text" placeholder="Company" id="company" name="company" required />

          <input type="text" placeholder="Remote, Onsite, or Hybrid" id="tag" name="tag" required />

          <input type="text" placeholder="Fulltime, Partime or Contract" id="type" name="type" required />

          <input type="text" placeholder="Salray range" id="salary" name="salary" required />

          <textarea rows="4" cols="20" placeholder="Job requirements" id="desc" name="desc"></textarea>
          
          <textarea rows="4" cols="20" placeholder="Expectations" id="todo" name="todo" ></textarea>
    
          <textarea rows="4" cols="20" placeholder="Reuirements" id="req" name="req" ></textarea>
          
          <input type="text" placeholder="Application link" id="link" name="link" required />

          <button className="btn ">Submit</button>
        </form>
      </section>

      <Footer />
    </Common>
  );
}

module.exports = Addjob