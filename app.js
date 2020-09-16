const title = 'My First React Element!';

const desc = 'I just learned how to create a react node and render it to the DOM';

const myTitleID = 'main-title';
const name = 'Guil';
//{} the Curly braces let JSX know you are writing JavaScript wooo
// className is actually JSX's version of CSS's
const header = (
    <header>
        <h1 id={myTitleID}>{ name }'s First React Element!</h1>
        <p className={}>{desc}</p>
        <input value={10 * 20}/>
    </header>
)

//function header, uppercase like Java
function Header() {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}


//render html element
ReactDOM.render(
    header,
    document.getElementById('root')
);

console.log(title);