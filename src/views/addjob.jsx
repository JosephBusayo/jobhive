const React = require('react');
const Common = require('./layouts/common')


function Addjob(props) {
  return (
    <Common>
      <form action="/jobs/add" className="job-form" method="POST">
        <label htmlFor="title">Job title:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="desc">Job desc:</label>
        <input type="text" id="desc" name="desc" required />
        
        <label htmlFor="link">Job Link:</label>
        <textarea id="link" name="link" required></textarea>
  
        <label htmlFor="tag">Job tag:</label>
        <textarea id="tag" name="tag" required></textarea>
        
        <button>Submit</button>
      </form>
    </Common>
  );
}

module.exports = Addjob