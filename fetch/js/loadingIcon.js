document.addEventListener("DOMContentLoaded", ()=>{
    let putHere = document.querySelector(".loading");
    let loadingIcon = document.querySelector(".loading-icon");
    //using timeout so i can see the loading icon
    // setTimeout(() => {
    //     fetcher();
    // }, 5000);
    // function fetcher(){
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then (function(response){
            return response.json();
        })
        .then (function(pokemon){
            loadingIcon.style.display="none";
            putHere.innerHTML = `
            <h1>`+ pokemon.name + `</h1>
            <img src="`+ pokemon.sprites.front_default + `" alt="pokemon">
            <p>`+ pokemon.weight + `</p>
            <p>`+ pokemon.height + `</p>
            <p>`+ pokemon.species.name + `</p>
            <p>`+ pokemon.base_experience + `</p>
            <p>`+ pokemon.abilities[0].ability.name + `</p>
            <p>`+ pokemon.abilities[1].ability.name + `</p>
            `;
        });
    // }
});  