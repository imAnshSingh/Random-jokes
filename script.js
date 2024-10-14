const jokeContainer = document.getElementById("Jokes");
const btn = document.getElementById("btn");

let url = "https://v2.jokeapi.dev/joke/Programming,Dark,Christmas?blacklistFlags=racist,sexist&type=single";

let getJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.textContent = `${item.joke}`;
        });
    }
btn.addEventListener("click", getJoke);
getJoke();