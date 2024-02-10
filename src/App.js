import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchTrending}/>

      <Row isPoster={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="Trending" fetchUrl={requests.fetchTrending} />

      <Row title="Action" fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
