const capitalize = (str) => {

    let letters = str.split("")
    let firstLetter = letters.shift()

    letters.unshift(firstLetter.toUpperCase())
    return letters.join("")


};



export default capitalize;