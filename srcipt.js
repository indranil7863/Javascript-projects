const container = document.querySelector('.container')

// container.children[0].style.color = 'red';



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