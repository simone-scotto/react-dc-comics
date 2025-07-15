const services = [{
    src:"/img/buy-comics-digital-comics.png",
    title:  "digital comics"
}
,{
    src: `/img/buy-comics-merchandise.png`,
    title:  "dc merchandise"
},{
    src:"/img/buy-comics-shop-locator.png",
    title:  "subscription"
},{
    src:"/img/buy-comics-subscriptions.png",
    title:  "digital comics"
},{
    src:"/img/buy-dc-power-visa.svg",
    title:  "comic shop locator"
}]


import comics from "../db/comics"





export default function Main () {
    return (
        <main>
            <section className="jumbo ">

            </section>
            <section className="comics container">
                <div className="row row-cols-6 g-4">
                    {comics.map((comic) => (
                        
                            <div className="comic-card">
                                <div className="comic-card-head">
                                    <img className="img-fluid" src={comic.thumb} alt="comic"/></div>
                                <div className="comic-card-body">{comic.series}</div>
                            </div>
                            
                            
                        
                        ))}
                    
                </div>
            </section>
            <section className="bg-primary">
                <div className="container">
                    <ul className="services-list">
                        

                            {services.map((service) => (
                                <li className="services-list-items"><a href="#">
                                   <img src={service.src} alt="#" /> 
                                    {service.title}
                                </a>

                                </li>
                            ))}
                        </ul>                    
                    
                </div>
            </section>
            <section className="lists-section ">
                <div className="container">

               
                    <div className="closing-lists text-light">
                        <ul>
                            <li><h3>dc comics</h3></li>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>news</li>
                        </ul>
                        <ul>
                            <li><h3>shop</h3></li>
                            <li>Shop DC</li>   
                            <li>Shop DC Collectibles</li>                   
                        </ul>
                        <ul>
                            <li><h3>dc</h3></li>
                            <li>Terms Of Use</li>
                            <li>Privacy Policy (New)</li>
                            <li>Ad Choiices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul>
                            <li><h3>sites</h3></li>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li> 
                            <li>DC Power Visa</li>                         
                        </ul>
                    </div>
                    <div className="dc-backbround">
                        <img src="./img/dc-logo-bg-png" alt="sddc" />
                        
                    </div>
                </div>

              
            </section>
        
        </main>
        
    )
} 