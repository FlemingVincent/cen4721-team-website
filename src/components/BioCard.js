import React from "react";

function BioCard({
  firstName = "first",
  lastName = "last",
  major = "major",
  interests = "interests",
  bio = "bio",
}) {
  return (
    <div className="px-4 py-8 rounded-3xl bg-gray-100">
      <h1 className="text-2xl capitalize font-medium">
        {firstName} {lastName}
      </h1>
      <h1 className="text-lg capitalize">{major}</h1>
      <h1 className="text-md italic">
        Interested in: <span className="text-[#0021A5]">{interests}</span>
      </h1>
      <h1 className="text-sm mt-4">{bio}</h1>
    </div>
  );
}

export default BioCard;
