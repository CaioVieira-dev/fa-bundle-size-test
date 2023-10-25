import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

export function App() {
  return (
    <>
      <h1>Teste do tamanho do bundle do fontawesome</h1>
      <FontAwesomeIcon icon={faPlus} />
    </>
  );
}

export default App;
