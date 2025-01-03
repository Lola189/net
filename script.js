const cardWrapper = document.querySelector('.content-cards')
const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector('#search-button')

const films = [
    {
        id: 0,
        title: 'Марсианин 1',
        original: 'The Martian 2015',
        caregory: Фантастика, приключения,
        rating: 7.8,
        link: './film.html',
        image: './images/film.png'
    },
    {
        id: 1,
        title: 'Марсианин 2',
        original: 'The Martian 2015',
        caregory: Фантастика, приключения,
        rating: 7.8,
        link: './film.html',
        image: './images/film.png'
    },
    {
        id: 2,
        title: 'Марсианин 3',
        original: 'The Martian 2015',
        caregory: Фантастика, приключения,
        rating: 7.8,
        link: './film.html',
        image: './images/film.png'
    },
]

const render = (array) => {
    cardWrapper.innerHTML = ''

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="${item.link}" class="content-cards__item">
                <div class="content-cards__item--img">
                    <img src="${item.image}" alt="film">
                </div>
                <div class="content-cards__item--title">
                    <h5>${item.title},</h5>
                    <span>${item.original}</span>
                </div>
                <p class="content-cards__item--description">
                    ${item.caregory}
                </p>
                <p class="content-cards__item--rating">
                    ${item.rating}
                </p>
            </a>`)
    })
}

searchButton.addEventListener('click', () => {
    render(films.filter((item) => item.title.includes(searchInput.value)));
})

render(films)
