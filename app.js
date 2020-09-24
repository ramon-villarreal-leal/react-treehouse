function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>Your Age: {props.age}</p>
        </div>
    );
}

ReactDOM.render(<Person name="Ramon" age="28" />,
    document.querySelector('#p1'));

ReactDOM.render(<Person name="Laura" age="26" />,
    document.querySelector('#p2'));

ReactDOM.render(<Person name="Laura" age="26" />,
    document.querySelector('#p2'));