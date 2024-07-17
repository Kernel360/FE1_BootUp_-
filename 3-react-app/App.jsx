import { useEffect } from "react";
import { classChange, idBgChange, queryChange } from "./scripts";

const App = () => {
    useEffect(() => {
        const colors = ["bg-red", "bg-blue", "bg-green"];
        const texts = ["text-bold", "text-italic", "text-strike", "text-underline"];

        function getRandom(array) {
            return Math.floor(Math.random() * array.length);
        }

        console.log("11");
        const container = document.getElementById("container");
        for (let i = 1; i < 17; i++) {
            const newDiv = document.createElement("div");
            // const newP = document.createElement("p");
            const newText = document.createTextNode(i);
            // newP.className = `${texts[getRandom(texts)]}`;
            newDiv.className = `default ${texts[getRandom(texts)]} ${colors[getRandom(colors)]}`;
            newDiv.id = `id_${i}`;
            // newP.appendChild(newText);
            newDiv.appendChild(newText);
            // newDiv.appendChild(newP);
            container.appendChild(newDiv);
        }
    }, []);
    return (
        <div id="app">
            <section id="container"></section>
            <div className="setCss">
                <div className="label">ID</div>
                <input id="idInput" />
                <button onClick={() => idBgChange("bg-red")}>Set BG red</button>
                <button onClick={() => idBgChange("bg-green")}>Set BG green</button>
                <button onClick={() => idBgChange("bg-blue")}>Set BG blue</button>
            </div>
            <div className="setCss">
                <div className="label">class</div>
                <input id="classInput" />
                <button onClick={() => classChange("text-bold")}>Set text bold</button>
                <button onClick={() => classChange("text-italic")}>Set text italic</button>
                <button onClick={() => classChange("text-strike")}>Set text strike</button>
                <button onClick={() => classChange("text-underline")}>Set text underline</button>
            </div>
            <div className="setCss">
                <div className="label">query</div>
                <input id="queryInput" />
                <button onClick={() => queryChange()}>reset style</button>
            </div>
        </div>
    );
};

export default App;
