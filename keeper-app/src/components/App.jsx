import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App() {
    return (
        <div>
        <Header />
        {notes.map(newnote => (
            <Note
            key={newnote.key}
            title={newnote.title}
            content={newnote.content}
            />
        ))}
        <Footer />
        </div>
    );
}

export default App;