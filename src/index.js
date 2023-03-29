// write your code here
fetch('http://localhost:3000/ramens')
    .then(res=>res.json())
    .then(data => {
        data.forEach((ramen) => {
            allRamen(ramen)
        })
        ramenDeets(data[0])
        addNewRamen()
    })

const allRamen = (ramen) => {
    const pictures = document.querySelector('div#ramen-menu')
    const ramenPics = document.createElement('img')
    ramenPics.src = ramen.image
    pictures.append(ramenPics)

    ramenPics.addEventListener('click',()=>{
        ramenDeets(ramen)
    })
}

const ramenDeets = (ramen) => {
    currentDetails = ramen
    console.log(ramen)
    const info = document.querySelector('#ramen-detail')
    const bigImg = document.querySelector('.detail-image')
    const name = document.querySelector('.name')
    const restaurant = document.querySelector('.restaurant')
    const rating = document.querySelector('#rating-display')
    const comment = document.querySelector('#comment-display')

    bigImg.src = ramen.image
    name.textContent = ramen.name
    restaurant.textContent = ramen.restaurant
    rating.textContent = ramen.rating
    comment.textContent = ramen.comment
}
const addNewRamen = () => {
    const newRamenForm = document.querySelector('#new-ramen')
    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault()

        // const newName = document.querySelector('#new-name').textContent
        // const newRestaurant = document.querySelector('#new-restaurant').textContent
        // const newImg = document.querySelector('#new-image').textContent
        // const newRating = document.querySelector('#new-rating').textContent
        // const newComment = document.querySelector('#new-comment').textContent

        const newRamen = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target['new-comment'].value
        }

        console.log(newRamen)

        allRamen(newRamen)
    })
}

