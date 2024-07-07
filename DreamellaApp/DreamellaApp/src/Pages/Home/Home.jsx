import Logo from '../Home/assets/logo.svg'
import CartIcon from '../Home/assets/cart.svg'
import SearchBar from '../../Components/SearchBar/SearchBar'
import "./Home.css"


function Home(){
    const productsLinks = ['All','Mini Perfumes', 'Oil Perfumes', 'Designers Perfumes', 'Arabian Perfumes', 'Deodorants', 'More']
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
                </div>
                <div className="productsNavigation">
                        <ul className='productsLinkWrapper'>
                            {productsLinks.map((product, index) => (
                                <li>{product}</li>
                            ))}
                        </ul>
                </div>
                <div className="productWrapper">
                    <div className="card">
                        <div className="productFrame">
                            <div className="imgWrapper">
                                 <img src="" alt="" />
                            </div>
                            <div className='productName'>
                                <p >Riggs Spray</p>
                            </div>
                            <div className='productPrice'>
                                     <p>N3,500</p> 
                            </div>
                      
                            <button>Add to cart</button>
                        </div>
                        
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Home;