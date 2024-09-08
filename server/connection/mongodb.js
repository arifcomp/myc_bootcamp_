const mongoose= require('mongoose')
async function mongodbConnect(url) {
    await mongoose.connect(url)
    .then(()=>{console.log("mongo db connected")})
    .catch((err)=>{console.log(`error is:::${err}`)})
}
module.exports = {
    mongodbConnect
}