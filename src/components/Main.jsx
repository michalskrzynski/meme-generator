import React from "react";
import memeData from '../meme-data';


export default function Main() {

  let [memes, setMemes] = React.useState(memeData.data.memes);

  const getMemeImageUrl = () => {
    return memes[ Math.floor( Math.random() * memes.length ) ].url;
  }

  let [meme, setMeme] = React.useState( { 
    url: getMemeImageUrl(),
    topText: '',
    bottomText: '' 
  } );

  
  function newImageButtonClicked() {
    setMeme( previousMeme => {
      return {
        ...previousMeme, 
        url: getMemeImageUrl()
      }
    } );
  }


  return (
    <main>
      <div className="content--grid">
        <div><input type="text" name="line1" id="memeLine1" placeholder='Shut up' /></div>
        <div><input type="text" name="line2" id="memeLine2" placeholder='and take my money'/></div>
        <div className="content--row2"><button id="newImageButton" onClick={newImageButtonClicked}>Get a new image</button></div>
      </div>
      <img className="content--image" src={meme.url} />
    </main>
  )
}