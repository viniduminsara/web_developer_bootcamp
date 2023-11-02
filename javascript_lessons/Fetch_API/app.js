// fetch('https://swapi.dev/api/people/2/')
// .then((res) => {
//     console.log('Response : ', res.json());
//     return res.json();
// })
// .catch((e) => {
//     console.log('Error : ',e);
// })

const getPersonDetails = async(id) => {
    try {
        let res = await fetch(`https://swapi.dev/api/people/${id}/`); 
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log('Error', error);
    }
}

// getPersonDetails(5);
// getPersonDetails(3);

const getDadJoke = async () => {
    try {
        const config = {
            headers: {Accept: 'application/json'}
        }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return await res.data.joke;
    } catch (e) {
        return "can't get you a joke"
    }
}

const button = document.querySelector('button');
const jokeUL = document.querySelector('#joke');

const addNewJoke = async() => {
    let jokeText = await getDadJoke();
    let newLI = document.createElement('li')
    newLI.append(jokeText);
    jokeUL.append(newLI);
}

button.addEventListener('click', addNewJoke);