import React, { useState } from "react";
import { IProdact } from "../models";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

const prodactData: IProdact = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 50,
    count: 55,
  },
};

interface CreateProdactProps {
  onCreate: (prodact: IProdact) => void;
}

export function CreateProdact({ onCreate }: CreateProdactProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter a valid title");
      return;
    }

    prodactData.title = value;

    const response = await axios.post<IProdact>(
      "https://fakestoreapi.com/products",
      prodactData
    );
    onCreate(response.data);
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter prodact title..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {error && <ErrorMessage error={error} />}
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:opacity-[0.5]"
      >
        Create
      </button>
    </form>
  );
}
