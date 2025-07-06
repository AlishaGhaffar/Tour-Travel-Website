import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google maps.</p>

            <div className="tripcard">
                <TripData 
                image = {Trip1}
                heading = "Trip in Indonesia"
                text = "Indonesia is a beautiful country in Southeast Asia made up of thousands of islands. It is known for its rich culture, diverse traditions, and friendly people. The country has amazing natural wonders like beaches, mountains, volcanoes, and rainforests. Indonesia is home to famous places like Bali, Jakarta, and Yogyakarta. It has many beautiful temples, colorful festivals, and delicious food. People from all over the world visit to see its wildlife, such as orangutans and Komodo dragons."
                />
                <TripData 
                image = {Trip2}
                heading = "Trip in Malaysia"
                text = "Malaysia is a beautiful country in Southeast Asia known for its diversity and charm. It has modern cities, peaceful villages, and stunning natural scenery. Kuala Lumpur, the capital, is famous for the Petronas Twin Towers and lively markets. Malaysia is home to beautiful beaches, tropical rainforests, and amazing wildlife. The country has a rich mix of cultures, including Malay, Chinese, and Indian traditions. This diversity is seen in its colorful festivals, delicious food, and warm hospitality."
                />
                <TripData 
                image = {Trip3}
                heading = "Trip in France"
                text = "France is a beautiful country in Europe, famous for its art, history, and culture. Its capital, Paris, is known as the “City of Light” and is home to the Eiffel Tower, Louvre Museum, and charming streets. France is also known for its delicious food, including bread, cheese, and pastries. The countryside is full of vineyards, mountains, and picturesque villages. Many people visit France to enjoy its fashion, festivals, and romantic atmosphere."
                />

            </div>
        </div>
    );
}

export default Trip