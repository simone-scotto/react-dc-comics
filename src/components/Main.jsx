

import comics from "../db/comics"
import services from "../db/services"
import ComicCard from  "./ComicCard"
import ServiceList from "./ServiceList";








export default function Main () {
    return (
        <main>
            <section className="jumbo ">
                <span className="lable text-uppercase">current series</span>
            </section>
            <section className="comics container">
                <div className="row row-cols-6 g-4">
                    {comics.map(({id, thumb, series}) => {

                        return <ComicCard key={id} thumb={thumb} series={series} />                                              
                                    
                    })}

                        
                    
                </div>

                <button className=" card-btn text-uppercase">load more</button>
            </section>
        {/*     <TestComponents name= "simone">

</TestComponents> */}
            <section className="services">
                <div className="container">
                    <ul className="services-list text-uppercase">
                        

                            {services.map(({id, src, title}) => {
                                return <ServiceList key={id} src={src} title={title} />
                            })}
                        </ul>                    
                    
                </div>
            </section>
            <section className="lists-section ">
                <div className="container">

               
                    <div className="closing-lists text-light">
                        <ul>
                            <li><h4 className="text-uppercase">dc comics</h4></li>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>news</li>
                            
                        </ul>
                        <ul>
                            <li><h4 className="text-uppercase">shop</h4></li>
                            <li>Shop DC</li>   
                            <li>Shop DC Collectibles</li>                   
                        </ul>
                        <ul>
                            <li><h4 className="text-uppercase">dc</h4></li>
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
                            <li><h4 className="text-uppercase">sites</h4></li>
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