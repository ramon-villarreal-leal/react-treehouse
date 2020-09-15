const title = <h1>My First React Element!</h1>


const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it into the DOM'
);

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

//render html element
ReactDOM.render(
    header,
    document.getElementById('root')
);

console.log(title);