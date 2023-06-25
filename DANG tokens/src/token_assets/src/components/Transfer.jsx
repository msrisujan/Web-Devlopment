import React from "react";
import { Principal } from "@dfinity/principal";
import { token } from "../../../declarations/token";

function Transfer() {

  const [recipientId, setId] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [isDisabled, setDisabled] = React.useState(false);
  const [feedback, setFeedback] = React.useState("");
  const [isHidden, setHidden] = React.useState(true);
  
  async function handleClick() {

    const recipientPrincipal = Principal.fromText(recipientId);
    const amountToTransfer = Number(amount);
    setDisabled(true);
    setHidden(true);
    const result = await token.transfer(recipientPrincipal, amountToTransfer);
    setFeedback(result);
    setHidden(false);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) => setId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
