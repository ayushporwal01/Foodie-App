/**
 * <div id="parent">
 *    <div id="child1">
 *       <h1>Heading 1</h1>
 *       <h2>Heading 2</h2>
 *    </div>
 *    <div id="child2">
 *       <h1>Heading 1</h1>
 *       <h2>Heading 2</h2>
 *    </div>
 * </div>
 *
 * ReactElement(Object) ⇒ HTML(Browser Understands)
 **/

const parent = React.createElement(
  "div",
  { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h2", {}, "I'm an h2 tag")
    ]) 
  ] 
);

console.log(parent); //Object

const root = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);
