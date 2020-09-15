const title = React.createElement(
    //type of element you want to create
    //not a real h1 element its an object that describes a dom node
    'h1',
    // second argument is an object
    {id: 'main-title', title: 'This is a title'},
    // 3rd argument passed through is the content or children you are creating
    'My first React element!'
);

console.log(title);