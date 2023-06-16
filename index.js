const ability = document.querySelector(".ability");

const getAbilitys = async ( ) => {
    const response = await fetch("./data.json")
    const data = await response.json();
    data.forEach( (element, index) => {
        const item = document.createElement("div");
        item.classList.add(`detail`);
        item.classList.add(`item${index+1}`);
        ability.appendChild(item);
        item.innerHTML = `
            <p class="flex"><img src=${element.icon} alt="">&nbsp; ${element.category}</p>
            <div><b>${element.score}</b> / 100</div>`;
    })
}


getAbilitys( )
