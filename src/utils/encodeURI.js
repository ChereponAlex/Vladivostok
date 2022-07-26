function encodeURI(str) {
    return str.replace(/ /g, '+')
}

export default encodeURI;