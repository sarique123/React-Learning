// const heading1 = React.createElement("h1",{id : "heading", xyz : "abc" },"Hello world from React!"); // It is the core thing of react ,so it comes from first library 
// const root = ReactDOM.createRoot(document.getElementById("root"));     // It is done by second library

// root.render(heading1);  // This render method is just create the h1 element and put it into the html file


// console.log(heading1)  // React.createElement is react element basically a javascript object


// const heading = React.createElement("h1",{},"Namaste from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



////////////////////////////////////////////////////////////////////

// <div id="parent">
//     <div id="child">
//         <h1> I am a h1 tag</h1>
//     </div>
// </div>


// const divParent = React.createElement("div",{id : "parent"},
//     React.createElement("div",{id : "child"},
//         React.createElement("h1",{},"I am a h1 tag")
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"))    // It is used to create the root inside react
// root.render(divParent)

// console.log(divParent)


/////////////////////////////////////////////////////////////////////

// <div id="parent">
//     <div id="child">
//         <h1> I am a h1 tag</h1>
//         <h2> I am a h2 tag</h2>
//     </div>
// </div>


// const divParent = React.createElement("div",{id : "parent"}, 
//     React.createElement("div",{id : "child"},
//         [React.createElement("h1",{},"I am a h1 tag") ,
//         React.createElement("h2",{},"I am a h2 tag")
//         ]
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(divParent)

// console.log(divParent)


///////////////////////////////////////////////////////////////////////


// <div id="parent">
//     <div id="child1">
//         <h1> I am a h1 tag</h1>
//         <h2> I am a h2 tag</h2>
//     </div>
//     <div id="child2">
//         <h1> I am a h1 tag</h1>
//         <h2> I am a h2 tag</h2>
//     </div>
// </div>



const parent = React.createElement("div",{id : "parent"},
    [
        React.createElement("div",{id : "child1"},
            [
                React.createElement("h1",{},"I am a h1 tag"),
                React.createElement("h2",{},"I am a h2 element")
            ]
        ),
        React.createElement("div",{id : "child2"},
            [
                React.createElement("h1",{},"I am a h1 tag"),
                React.createElement("h2",{},"I am a h2 element")
            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(root)



//  render method override all the thing of the given root example div..


