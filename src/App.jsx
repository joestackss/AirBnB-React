import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  // TO KEEP OUR CODE DRYER, YOU CAN USE THE BELOW CODE

  // const cards = data.map((item) => {
  //   return <Card key={item.id} item={item} />;
  // });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
    // <div className="App">

    // </div>
  );
}

export default App;
