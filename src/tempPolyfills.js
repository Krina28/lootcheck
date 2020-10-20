//react 16+ version needs enzyme adapter
//global request animation frame function that React now depends on.
const requestAnimationFrame = global.requestAnimationFrame = callback => {
    setTimeout(callback, 0);
}

export default requestAnimationFrame;