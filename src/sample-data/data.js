function randomIdGenerator() {
    return Math.floor(Math.random() * 10000);
}

const data = [
    {
        "id": randomIdGenerator(),
        "nickname": 'Primary',
        "fullName": "Haile Quench",
        "address1": "111 West 53rd St",
        "address2": null,
        "city": "New York",
        "state": "NY",
        "zip": 11201,
        "selected": true
    },
    {
        "id": randomIdGenerator(),
        "nickname": 'Parent\'s Home',
        "fullName": "Bill Truitt",
        "address1": "6984 Fair Oaks Rd",
        "address2": "#207",
        "city": "Arlington",
        "state": "VA",
        "zip": 22204,
        "selected": false
    },
    {
        "id": randomIdGenerator(),
        "nickname": 'Summer Home',
        "fullName": "Weston McCload",
        "address1": "539 University Dr",
        "address2": "#7D",
        "city": "Chicago",
        "state": "Il",
        "zip": 60653,
        "selected": false
    },
    {
        "id": randomIdGenerator(),
        "nickname": 'Winter Home',
        "fullName": "Weston McCload",
        "address1": "533 Tavern Rd",
        "address2": null,
        "city": "San Jose",
        "state": "CA",
        "zip": 11201,
        "selected": false
    },
    {
        "id": randomIdGenerator(),
        "nickname": 'Parent\'s Home',
        "fullName": "Amy Truitt",
        "address1": "6984 Fair Oaks Rd",
        "address2": "#207",
        "city": "Arlington",
        "state": "VA",
        "zip": 22204,
        "selected": false
    },
    {
        "id": randomIdGenerator(),
        "nickname": 'Summer Home',
        "fullName": "Steve McCload",
        "address1": "539 University Dr",
        "address2": "#7D",
        "city": "Chicago",
        "state": "Il",
        "zip": 60653,
        "selected": false
    },
    {
        "id": randomIdGenerator(),
        "nickname": 'Winter Home',
        "fullName": "Jean McCload",
        "address1": "533 Tavern Rd",
        "address2": null,
        "city": "San Jose",
        "state": "CA",
        "zip": 11201,
        "selected": false
    }
]

export default data;