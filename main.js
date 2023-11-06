document.addEventListener('DOMContentLoaded', function(){
    const name = document.querySelector('#name');
    const username = document.querySelector("#username");
    const repository = document.querySelector("#repository");
    const follower = document.querySelector("#follower");
    const following = document.querySelector("#following");
    const profile = document.querySelector("#profile");
    const avatar = document.querySelector("#avatar");

    fetch('https://api.github.com/users/lutie0920')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        name.innerText = json.name;
        username.innerText = json.login;
        repository.innerText = json.public_repos;
        follower.innerText = json.followers;
        following.innerText = json.following;
        profile.href = json.html_url;
        avatar.src = json.avatar_url;
    })
})