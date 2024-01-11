function Greeter({person = 'Everyone', from = 'Anonymous'}){
    return <>
        <h1>Hi There! { person }</h1>
        <h2>- { from }</h2>
    </>
}

export default Greeter