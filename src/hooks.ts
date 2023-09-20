import { useEffect, useState } from "react";
import { IProdact } from "./models";
import axios, { AxiosError } from "axios";

export function useProdacts() {
  const [prodacts, setProdacts] = useState<IProdact[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addProdact(prodact: IProdact) {
    setProdacts((prev) => [...prev, prodact]);
  }

  async function fetchProdacts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProdact[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProdacts(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProdacts();
  }, []);

  return { prodacts, error, loading, addProdact };
}
