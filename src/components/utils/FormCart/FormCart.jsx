import React, { useContext, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import "./FormCart.css";
import Back from "../../../assets/Back.png";
import { ItemsContext } from "../Context/ItemsContext";
import Swal from "sweetalert2";

const FormCart = ({ handleBack }) => {
  const client = {
    name: "",
    lastname: "",
    email: "",
    emailcheck: "",
    telnumber: "",
  };
  const {setItems} = useContext(ItemsContext)
  const [clientState, setClientState] = useState(client);
  const [saleId, setSaleId] = useState("");
  const [showSaleId, setShowSaleId] = useState(false);

  const setClient = (e) => {
    const { value, name } = e.target;
    setClientState({ ...clientState, [name]: value });
  };

  const validateForm = (e) => {
    e.preventDefault();

    const telNumberRegex = /^\d+$/; 

    if (!telNumberRegex.test(clientState.telnumber)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, ingrese su numero telefonico.",
      });
    } else if (clientState.email !== clientState.emailcheck) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Los email no coinciden.",
      });
    } else {
      submitForm();
    }
  };


  const submitForm = async () => {
    const docRef = await addDoc(collection(db, "sales"), {
      clientState,
      timestamp: serverTimestamp()
    });
    setSaleId(docRef.id);
    setClientState(client);
    localStorage.removeItem("cart");
    setItems([]);
  };

  const showId = () => {
    setShowSaleId(true);
  };

  return (
    <div className="form-cart-container">
      <div className="fc-container">
        <h1>Confirma tu compra!</h1>
        <div className="back-container">
          <img src={Back} alt="" onClick={handleBack} />
        </div>
        <form action="" className="formSubmit" onSubmit={validateForm}>
          <div className="input-container">
            <input
              type="text"
              className="input-style"
              name="name"
              placeholder="Nombre"
              onChange={setClient}
              value={clientState.name}
              required
            />
            <div className="bg-input"></div>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input-style"
              name="lastname"
              placeholder="Apellido"
              onChange={setClient}
              value={clientState.lastname}
              required
            />
            <div className="bg-input"></div>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input-style"
              name="email"
              placeholder="Email"
              onChange={setClient}
              value={clientState.email}
              required
            />
            <div className="bg-input"></div>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input-style"
              name="emailcheck"
              placeholder="Repita su email"
              onChange={setClient}
              value={clientState.emailcheck}
              required
            />
            <div className="bg-input"></div>
          </div>
          <div className="input-container">
            <input
              type="text"
              className="input-style"
              name="telnumber"
              placeholder="Telefono"
              onChange={setClient}
              value={clientState.telnumber}
              required
            />
            <div className="bg-input"></div>
          </div>
          <button onClick={showId} className="button-add" type="submit">
            Confirmar compra
          </button>
        </form>
      </div>
      {saleId && showSaleId ? (
        <div className="fb-container">
          <p className="fbId">
            Felicidades, obtuviste tu primer Pokemon! <br /> Este es tu código de
            compra: {saleId}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default FormCart;
