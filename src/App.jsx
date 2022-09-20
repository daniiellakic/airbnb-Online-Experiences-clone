import reactLogo from './assets/Airbnb.png';
import Hero from "./components/Hero";
import Raect from "react";
import Navbar from './components/Navbar';
import './App.css';
import Card from './components/Card';
import data from "./data";


function App() {
  const cards = data.map(item => {
    return (
        <Card 
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
})        

return (
    <div>
        <Navbar />
        <Hero />
        <section className="cards-list">
                {cards}
        </section>
    </div>
)
}

export default App
