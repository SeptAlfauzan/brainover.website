const listData = {
    data: [
        {
            id: 0,
            images: 'https://cdn.dribbble.com/users/13604/screenshots/17198542/media/a5c0ba23b16111fc35b04fd38377f5e2.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
        {
            id: 1,
            images: 'https://cdn.dribbble.com/users/60166/screenshots/16953545/media/6046ed03ade41de8c2eac342c688a348.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
        {
            id: 2,
            images: 'https://cdn.dribbble.com/users/5748976/screenshots/17000975/media/bf8a1a9419081084bf491a6151e4a150.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
        {
            id: 3,
            images: 'https://cdn.dribbble.com/users/5748976/screenshots/16799457/media/89b23074320f6b036627dcb7eb1a0191.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
        {
            id: 4,
            images: 'https://cdn.dribbble.com/users/3028563/screenshots/16998888/media/0846750fb366943bfa6dbc126922c3dc.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
        {
            id: 5,
            images: 'https://cdn.dribbble.com/users/13604/screenshots/16589266/media/2fc36eea4b171a42e0d14709c2ba8a0d.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
    ]
}

export const getDataProjects = async () => JSON.stringify(listData)