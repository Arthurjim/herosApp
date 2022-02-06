let loadImage =()=>({default:''})

try {
    loadImage = require.context('../../assets/heroes',true)
} catch (error) {
    
}
export const heroImages = image =>(loadImage(`./${image}.jpg`).default)