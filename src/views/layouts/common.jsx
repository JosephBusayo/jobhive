const React = require("react");


function DefaultLayout(props) {
    return (
        <html>
            <head>
                <title>{props.title}</title>
                <link rel="stylesheet" type="text/css" href="/styles/home.css" />
                <link rel="stylesheet" type="text/css" href="/styles/form.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
            </head>

            <body> {props.children}</body>
        </html>
    );
}

module.exports = DefaultLayout;
