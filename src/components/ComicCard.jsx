

export default function ComicCard (comic)  {
    console.log(comic);
    return (
        
        <div className="col" key={comic.id}>
            <div className="comic-card text-light text-uppercase">
                <div className="comic-card-head">
                    <img className="img-fluid" src={comic.thumb} alt="comic"/></div>
                        <div className="comic-card-body">{comic.series}</div>
                </div>
                            
            </div>
        
    )
    
}