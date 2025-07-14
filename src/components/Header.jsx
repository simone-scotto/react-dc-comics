export default function Header() {
    return(
        <nav className="navbar bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                <img className="w-75" src="/img/dc-logo.png" alt="dc-logo"/>
                </a>
                <ul className="nav text-uppercase">
                    <li className="nav-item ">
                        <a className="nav-link " href="#">Characters</a>
                    </li>
                    <li className="nav-item border">
                        <a className="nav-link active" href="#">Comics</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Movies</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#">TV</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Games</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Collectibles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Videos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Fans</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Shop</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
        );
}   

