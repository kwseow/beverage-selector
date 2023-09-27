/*

Props are data passed into a component
-props are objects used like dictionary

*/

function Box(props) {
    return (<div style={{
        border:"6px solid " + props.borderColor,
        backgroundColor: props.bgcolor
    }}>
        {/* props.children all the children elements nested into the component */}
        {props.children}
    </div>);
}

export default Box;