import Part from "./Part"

const Content = (props) => {
    return (
        <>
            <Part part = {props.parts[0]} ex = {props.ex[0]}/>
            <Part part = {props.parts[1]} ex = {props.ex[1]}/>
            <Part part = {props.parts[2]} ex = {props.ex[2]}/>

        </>
    )   
}

export default Content