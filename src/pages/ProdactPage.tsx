import react, { useContext } from "react";
import { useProdacts } from "../hooks";
import { IProdact } from "../models";
import { ModalContext } from "../context/ModaContext";
import { Loader } from "../conmponents/Loader";
import { ErrorMessage } from "../conmponents/ErrorMessage";
import { Prodact } from "../conmponents/Prodact";
import { Modal } from "../conmponents/Modal";
import { CreateProdact } from "../conmponents/CreateProdact";

export function ProdactPage() {
  const { loading, error, prodacts, addProdact } = useProdacts();
  const { modal, open, close } = useContext(ModalContext);

  function createHandler(prodact: IProdact) {
    close();
    addProdact(prodact);
  }

  return (
    <div className="containe r mx-auto max-w-2xl mt-2">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {prodacts.map((prodact) => (
        <Prodact prodact={prodact} key={prodact.id} />
      ))}
      {modal && (
        <Modal title="Create a new prodact" onClose={close}>
          <CreateProdact onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 pb-2 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        +
      </button>
    </div>
  );
}
