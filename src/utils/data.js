import Axois from 'axios';

const BASE_URL = 'https://pixabay.com/api/?key=';
const KEY = '&key=15900106-2c235e732bb321ca7ec900d93';
const PER_PAGE = '&per_page=12'

const getData = ( query, page ) => {
    return Axois.get( `${BASE_URL}${KEY}&q=${query}&page=${page}${PER_PAGE}` );
}

export default getData;