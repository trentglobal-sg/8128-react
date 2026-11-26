export default function DisplaySum(props) {
    return <div style={{
        border:"1px solid black",
        width:"60px",
        height:"60px"
    }}>
        Total: {parseInt(props.n1) + parseInt(props.n2)}

    </div>
}