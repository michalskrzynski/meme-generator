import React from "react";
import memeData from "../meme-data";

export default function Main() {
  let [memes, setMemes] = React.useState(memeData.data.memes);

  const getMemeImageUrl = () => {
    return memes[Math.floor(Math.random() * memes.length)].url;
  };

  let [meme, setMeme] = React.useState({
    url: getMemeImageUrl(),
    topText: "",
    bottomText: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setMeme( prevMeme => ({ ...prevMeme, [name]: value }) );
  }

  function newImageButtonClicked() {
    setMeme((previousMeme) => {
      return {
        ...previousMeme,
        url: getMemeImageUrl(),
      };
    });
  }

  return (
    <main>
      <div className="content--grid">
        <div>
          <input
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            placeholder="Shut up"
          />
        </div>
        <div>
          <input
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            placeholder="and take my money"
          />
        </div>
        <div className="content--row2">
          <button id="newImageButton" onClick={newImageButtonClicked}>
            Get a new image
          </button>
        </div>
      </div>
      <div className="content--image">
        <img src={meme.url} />
        <span className="content--text content--line1">{meme.topText}</span>
        <span className="content--text content--line2">{meme.bottomText}</span>
      </div>
    </main>
  );
}
