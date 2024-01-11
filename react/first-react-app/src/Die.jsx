function Die({ numSlides }){
    const roll = Math.floor(Math.random() * numSlides) + 1;
    return <p>{numSlides} - Die roll: {roll}</p>
}

export default Die