const container = document.querySelector('.container')

// container.children[0].style.color = 'red';

// image Repo link : https://github.com/PokeAPI/sprites/tree/master

function addNewImg(indx){
    const newContainer = document.createElement('div')
    newContainer.classList.add('img-container');

    const createImg = document.createElement('img')
    createImg.src = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${indx}.png?raw=true`
    const createTag = document.createElement('p')
    createTag.textContent = indx;
    newContainer.appendChild(createImg);
    newContainer.appendChild(createTag);
    return newContainer;
}

for(let i=1; i<500; i++){
    container.appendChild(addNewImg(i));
}

// Some coder also do this way:

// let myHTML = ``

// for(let i=0; i<100; i++){
//     myHTML += `
//     <div class="img-container">
//         <img src="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${indx}.png?raw=true" alt="image">
//         <p>${i}</p>
//     </div>
//     `
// }
// container.innerHTML = myHTML;