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



import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const resObject = {
  info: {
    id: "637321",
    name: "Pizza Hut",
    cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
    locality: "Hardoi Road",
    areaName: "Daulatganj",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.2,
    parentId: "721",
    avgRatingString: "4.2",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 3.8,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "3.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-07-08 04:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Pizza.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹189",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/pizza-hut-hardoi-road-daulatganj-lucknow-637321",
    type: "WEBLINK",
  },
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
