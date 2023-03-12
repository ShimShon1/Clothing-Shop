export default function ItemPage(props){
    console.log(props)

    return (
        <>
            <div>I'm some item ok?</div>
            <img  src={props.image} alt=""/>
        </>
    )
}