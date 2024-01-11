function DoubleDice(){
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    const isWinner = num1 === num2;
    const styles = {color: isWinner ? 'lightgreen' : 'red'}

    return (
        <div className="DoubleDice" style={styles}>
            <h2>Double Dice</h2>
            {isWinner ? <h3>You win!</h3> : null}
            <p>Number 1: {num1}</p>
            <p>Number 2: {num2}</p>  
        </div>
    )
}

export default DoubleDice