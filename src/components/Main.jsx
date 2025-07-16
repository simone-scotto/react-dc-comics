const services = [{
    id: 1,
    src:"/img/buy-comics-digital-comics.png",
    title:  "digital comics"
}
,{
    id: 2,
    src: `/img/buy-comics-merchandise.png`,
    title:  "dc merchandise"
},{
    id: 3,
    src:"/img/buy-comics-shop-locator.png",
    title:  "subscription"
},{
    id: 4,
    src:"/img/buy-comics-subscriptions.png",
    title:  "digital comics"
},{
    id: 5,
    src:"/img/buy-dc-power-visa.svg",
    title:  "comic shop locator"
}]


import comics from "../db/comics"
import ComicCard from  "./ComicCard"








export default function Main () {
    return (
        <main>
            <section className="jumbo ">
                <span className="lable">current series</span>
            </section>
            <section className="comics container">
                <div className="row row-cols-6 g-4">
                    {comics.map(({id, thumb, series}) => {

                        return <ComicCard key={id} thumb={thumb} series={series} />                                              
                                    
                    })}

                        
                    
                </div>

                <span className="card-lable">current series</span>
            </section>
        {/*     <TestComponents name= "simone">

</TestComponents> */}
            <section className="bg-primary">
                <div className="container">
                    <ul className="services-list">
                        

                            {services.map(({id, src, title}) => (
                                <li className="services-list-items" key={id}>
                                    <a href="#">
                                        <img src={src} alt="#" /> 
                                        {title}
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
                        <img src="/img/dc-logo-bg.png" alt="sddc" />
                        
                    </div>
                </div>

              
            </section>
        
        </main>
        
    )
} 