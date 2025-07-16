

import comics from "../db/comics"
import services from "../db/services"
import closingLists from "../db/closinglLists";
import ComicCard from  "./ComicCard"
import ServiceList from "./ServiceList";
import ClosingLists from "./ClosingLists";








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
                        {closingLists.map (({id, title, liItems}) => {
                            return <ClosingLists key={id} title={title} liItems={liItems}/>
                        })}
                        {/* <ul>
                            <li><h4 class="text-uppercase">dc comics</h4></li>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">News</a></li>
                        </ul>

                        <ul>
                            <li><h4 class="text-uppercase">shop</h4></li>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>

                        <ul>
                            <li><h4 class="text-uppercase">dc</h4></li>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy Policy (New)</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                            </ul>

                        <ul>
                            <li><h4 class="text-uppercase">sites</h4></li>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul> */}

                    </div>
                    <div className="dc-backbround">
                        <img src="/img/dc-logo-bg.png" alt="sddc" />
                        
                    </div>
                </div>

              
            </section>
        
        </main>
        
    )
} 