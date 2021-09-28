import React, { useState } from "react";
import "./styles.css";

var name = "Em😉ji Translator";
var color = "blue";
var emojiDictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes"
};

var emojiBase = Object.keys(emojiDictionary);

export default function App() {
  const [userInput, setUserInput] = useState("");

  function inputChangeHandler(text) {
    var userText = text.target.value;
    var userInput = emojiDictionary[userText];

    if (userInput === undefined) {
      userInput = "Don't know. Sorry.";
    }
    setUserInput(userInput);
  }

  function listItemClickHandler(item) {
    var emoji = emojiDictionary[item];
    setUserInput(emoji);
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}>Welcome to the {name} 😊 </h1>
      <input onChange={inputChangeHandler} />
      <div style={{ padding: "2rem" }}> {userInput} </div>
      <h2> Emoji's we know </h2>
      {emojiBase.map(function (item) {
        return (
          <span
            onClick={() => listItemClickHandler(item)}
            key={item}
            style={{ padding: "0.5rem", fontSize: "1.5rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
