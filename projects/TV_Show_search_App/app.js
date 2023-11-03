const button = document.querySelector('button');
const searchText = document.querySelector('input');
const row = document.querySelector('.row:nth-child(2)');

button.addEventListener('click', async function(){
    const searchTerm = searchText.value;
    const config = {
        params: { 
            q: searchTerm
        }
    };
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    showResults(res.data);
})

function showResults(shows){
    let htmlString = '';

    shows.forEach(result => {
        if(result.show.image){
            htmlString += `
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 p-3 card">
                    <img src="${result.show.image.medium}" class="card-img-top">
                    <div class="card-body">
                        <b>${result.show.name}</b><br>
                        <p>Ratings : ${result.show.rating.average || 0}</p>
                        <a href="${result.show._links.self.href}" class="btn btn-primary" >Watch TV Show</a>
                    </div>
                </div>
            `;
            row.innerHTML = htmlString;
        }
    });
}