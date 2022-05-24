import React from "react"
import "./Component.css"


function BioC({
        name = "name",
        major = "major",
        interests = "interests",
        bio = "bio",})
{

    if (name ==="Vincent Fleming")
    {
        return (
            <article  className="card_Vincent">
                <div className="card_content">
                    <h3 className="card_title">{name}</h3>
                    <span className="card_subtitle">{major}</span>
                    <span className="card_subtitle">{interests}</span>
                    <p className="card_description">{bio}</p>
                </div>
            </article>
        );
    }
    else if(name ===" ")
  {
      return (
        <article  className="card">
            <div className="card_content">
                <h3 className="card_title">{name}</h3>
                <span className="card_subtitle">{major}</span>
                <span className="card_subtitle">{interests}</span>
                <p className="card_description">{bio}</p>
            </div>
        </article>
    );
   }

}
export default BioC;