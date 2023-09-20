import React, { useState } from "react";
import { IProdact } from "../models";

interface ProdactProps {
  prodact: IProdact;
}

export function Prodact({ prodact }: ProdactProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-blue-300" : "bg-yellow-400";

  const btnClasses = ["py-2 px-4 border", btnBgClassName];
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={prodact.image} className="w-1/6" alt={prodact.title} />

      <p>{prodact.title}</p>

      <span className="font-bold mb-2">{prodact.price}</span>

      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "More" : "Hide"}
      </button>

      {details && (
        <div>
          <p>{prodact.description}</p>
        </div>
      )}
      <p>
        Rate: <span style={{ fontWeight: "bold" }}>{prodact.rating?.rate}</span>
      </p>
    </div>
  );
}
