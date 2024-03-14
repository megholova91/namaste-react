import { Search as SearchImg } from '../assets'

const Search = ({ searchQuery, handleChange, searchRestaurant }) => {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchRestaurant();
        }
    }

    return (
        <div className="search-container">
            <input value={searchQuery} onChange={handleChange} onKeyDown={handleKeyDown} />
            <img src={SearchImg} onClick={searchRestaurant} />
        </div>
    )
}

export default Search;