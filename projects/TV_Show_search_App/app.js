const form = document.querySelector('form');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {
        params: { 
            q: searchTerm
        }
    };
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    showImages(res.data);
})

function showImages(shows){
    shows.forEach(result => {
        if(result.show.image){
            const newImg = document.createElement('img');
            newImg.src = result.show.image.medium;
            document.body.append(newImg);
        }
    });
}