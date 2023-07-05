// const heading = React.createElement('h1', {id:'heading'}, "hello friends how are you");
// console.log(heading)

const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"},[React.createElement("h1", {id:"child1"},"I am childi"),React.createElement("h1", {id:"child2"},"I am child2")]),React.createElement("div", {id:"childern2"},[React.createElement("h1", {id:"child11"},"I am child11"),React.createElement("h1", {id:"child22"},"I am child222")]))

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
        
root.render(parent);