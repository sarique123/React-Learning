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

// const parent = React.createElement("div",{id : "parent"},
//     [
//         React.createElement("div",{id : "child1"},
//             [
//                 React.createElement("h1",{},"I am learning React!"),
//                 React.createElement("h2",{},"I am a h2 element in the first page")
//             ]
//         ),
//         React.createElement("div",{id : "child2"},
//             [
//                 React.createElement("h1",{},"I am a h1 tag in Second Paragraph"),
//                 React.createElement("h2",{},"I am a h2 element")
//             ]
//         )
//     ]
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(root)

//  render method override all the thing of the given root example div..

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from "react";
// import ReactDOM from "react-dom/client";

// React.createElement() => is a JS Object => render as a HTML element.

// const heading = React.createElement("h1",{id : "heading"},"React Learning");
// console.log(heading);

// JSX (transpiled before it reaches the JS) - Parcel - Babel
// Transpiling is done by Babel

// JSX => React.createElement() => is a JS Object => render as a HTML element.

//  React Element ->

// const elem = <span>This is span </span>;
// const jsxHeading = (
//   <h1 className="heading"> {elem} React Learning using jsx</h1>
// );
// console.log(jsxHeading);

// React Componenet
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component ->

// const HeadingComponent = () => {
//     return <h1 className="heading">This is React Functional Componenet</h1>
// }

// const Title = () => (
//   <h1 className="heading1">This is React First Functional Component</h1>
// );

// Componenet Composition
// const HeadingComponent = () => (
//   <div id="container">
//     {jsxHeading}
//     <h1 className="heading">This is React Functional Component</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

///////////////////////////////////////////////////////////////////////////////////////////////

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const Grocery = lazy(() => import("./components/Grocery"));

// chunking 
// code splitting
// dynamic bundling
// On demand loading
// lazy loading

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <Grocery />
          </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
