import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Favourites from "./components/Favourites";
import { useSelector } from "react-redux";
import { Badge, Container } from "react-bootstrap";

function App() {
  const favouritesLength = useSelector((state) => state.favourites.content.length);
  return (
    <BrowserRouter>
      <>
        <Container className="mt-3">
          <Link to="/favourites"> Preferiti</Link>
          <Badge className="ms-2">{favouritesLength}</Badge>
        </Container>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
