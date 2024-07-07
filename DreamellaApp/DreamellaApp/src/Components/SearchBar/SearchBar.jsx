import SearchBarIcon from '../SearchBar/asset/searchIcon.svg'
import "../SearchBar/SearchBar.css"

function SearchBar(){
    return(
        <div className='searchWrapper'>
            <input type="search" name="" id="" placeholder='Search' className='searchInput' />
            <div className="searchIconContainer">
                           <object className='searchIcon' type="image/svg+xml" data= {SearchBarIcon}></object> 
            </div>

        </div>
    )
}

export default SearchBar