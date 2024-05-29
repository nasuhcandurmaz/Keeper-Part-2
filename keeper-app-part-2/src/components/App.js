import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((notAlma) => (
        <Note key={notAlma.id} baslik={notAlma.title} noted={notAlma.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
