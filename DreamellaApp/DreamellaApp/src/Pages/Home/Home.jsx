import Logo from '../Home/assets/logo.svg'
import CartIcon from '../Home/assets/cart.svg'
import SearchBar from '../../Components/SearchBar/SearchBar'
import "./Home.css"


function Home(){
    return(
        <div className="home">
            <header>
                <nav className='navbar'>
                <object className='logo' type="image/svg+xml" data= {Logo}></object>
                <SearchBar/>
                <div className="loginAndCartWrapper">
                    <h1>Login</h1>
                    <object className='cartIcon' type="image/svg+xml" data= {CartIcon}></object>
                </div>
                </nav>
            </header>
            <main>
                <div className="HeroSection">
                    <div className="websiteInfo">
                        <div className="siteName">
                            <p>Dreamella Emporium</p>
                        </div>
                        <div className="siteSlogan">
                            <p>Enhancing confidence levels</p>
                        </div>
                    </div>
                    <div className="productsNavigation">
                        
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Home;