const FILTER_ALL = 'FILTER_ALL';
const FILTER_LOW = 'FILTER_LOW';
const FILTER_MEDIUM = 'FILTER_MEDIUM';
const FILTER_HIGH = 'FILTER_HIGH';


const FILTER_BY_PRICE = [
    {
        key: FILTER_ALL,
        title: 'Any Price'
    },
    {
        key: FILTER_LOW,
        title: 'Up to $15'
    },
    {
        key: FILTER_MEDIUM,
        title: '$15 - $30'
    },
    {
        key: FILTER_HIGH,
        title: '$30+'
    }
];


export { FILTER_BY_PRICE, FILTER_ALL };