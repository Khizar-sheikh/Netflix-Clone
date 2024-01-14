import './App.css';
import requests from './Request/request';
import Row from './Components/Row';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINAL" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rate" fetchURL={requests.fetchTopRated} />
      <Row title="Action movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentation movies" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;