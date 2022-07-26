function cutOffUrl(str) {

    return str.split('=').pop().replaceAll(/\+/g, ' ')

}
export default cutOffUrl;