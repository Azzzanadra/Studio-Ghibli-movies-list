let film = document.querySelectorAll('.film')

film.forEach(button => button.addEventListener('click',getFilm))


function getFilm(){

    fetch(`https://ghibliapi.herokuapp.com/films`)
        .then(res => res.json()) //parse response as JSON
        .then(data =>{
            console.log(data)
            for(i=0;i<data.length;i++){
                if(this.innerText === data[i].title){
                    document.querySelector('#en').innerText = data[i].title;
                    document.querySelector('#jap').innerText = data[i].original_title;
                    document.querySelector('#cover').src = data[i].image;
                    document.querySelector('#banner').src = data[i].movie_banner;
                    document.querySelector('p').innerText = data[i].description;
                    document.querySelector('#director').innerText = `Director: ${data[i].director}`;
                    document.querySelector('#producer').innerText =`Producer: ${data[i].producer}`;
                    document.querySelector('#release').innerText =`Release date: ${data[i].release_date}`;
                }
            }

            }
        )
        .catch(err =>{
            console.log(`error ${err}`)
        })
}