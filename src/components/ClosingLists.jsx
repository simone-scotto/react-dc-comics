import closingLists from "../db/closinglLists"

export default function ClosingLists (list) {
    return (
       
            <ul key={list.id}>
                <li>
                    <h4 className="text-uppercase">{list.title}</h4>
                </li>
                    {list.liItems.map ((liItem, index) => (
                        <li key={index}>
                             <a href="#">{liItem}</a>
                        </li>
                    ))}
             </ul>

                        
    )
}