const React = require('react');
const Common = require('./common')


function Footer(props) {
    return (
        <Common>
            <div className="footer">
                <p>This is just a personal project, jobs here are not real</p>
                <p>&copy; Jospeh Busayo</p>
            </div>

        </Common>
    );
}

module.exports = Footer;