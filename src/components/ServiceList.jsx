export default function ServiceList (service) {
    console.log(service);
    return (
        <li className="services-list-items" key={service.id}>
            <a href="#">
                <img className="me-2" src={service.src} alt="#" /> 
                {service.title}
            </a>

        </li>
    )
    
}