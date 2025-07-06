import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/5.jpg"
import Mountain4 from "../assets/8.jpg"
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>

            <DestinationData 
            className="first-des"
            heading = "Taal Volcano, Batangas"
            text = "Taal Volcano is a famous natural wonder located in Batangas, Philippines. It is known for being a volcano on an island, inside a lake, on another island. The volcano may look small, but it is one of the most active in the country. Over the years, it has erupted many times and changed the surrounding area. Visitors love to see its beautiful crater and the calm waters of Taal Lake around it. Many people ride boats to the island and hike up to see the view from the top. The nearby city of Tagaytay offers a cool climate and perfect spots to see the volcano. Tourists also enjoy local food and the relaxing atmosphere of the place. Taal is both a powerful and peaceful sight to experience. It remains one of the most visited and loved landmarks in the Philippines."
            img1 = {Mountain1}
            img2 = {Mountain2}
            />

            <DestinationData 
            className="first-des-reverse"
            heading = "Mt. Daguldul, Batangas"
            text = "Mt. Daguldul is a beautiful mountain located in San Juan, Batangas. It is a beginner-friendly hike, perfect for nature lovers and adventurers. The trail starts near Laiya Beach and goes through forests and grassy hills. Along the way, you can stop to rest and enjoy fresh buko juice or snacks. The hike offers amazing views of the sea, nearby mountains, and green fields. At the top, you can see the blue waters of Laiya Bay and even Mindoro Island. Many hikers camp overnight on its open grassy ridges. After the climb, people often cool off at the beach or visit nearby waterfalls. The mountain is peaceful, with a mix of trees, flowers, and fresh air. It is a perfect getaway for those looking to relax and enjoy nature’s beauty."
            img1 = {Mountain3}
            img2 = {Mountain4}
            />
        </div>

    )
}

export default Destination;