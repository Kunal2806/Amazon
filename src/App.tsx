import Card from "./component/Card";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Data from "./cardData/data.json";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {Data.map((_post) => (
          <Card item={_post.item} title={_post.title} price={_post.price} />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
