import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/CardList";
import Quotes from "./components/Quotes";
import Gambar from "./assets/images/gambar1.jpg";
const quotes =
"Disaat payung teduh ku dengar , disitu lah tugastugas terbabat abis";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <CardList name="Davi Ilza Athallah" nim="21120118130072" kelompok="2" isNameBold image={Gambar}/>
    <Quotes author="Orang" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
