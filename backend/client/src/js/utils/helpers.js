export const clearContent = (blockAdd) =>{
    while (blockAdd.firstChild) {
        blockAdd.removeChild(blockAdd.firstChild);
    }
}

export const addZero = (num) => num <= 9 ? `0${num}` : num;

export const addClass = (elements, className) => {
    elements.forEach(item => {
        item.style.color = `${className}!important`;
    });
}
