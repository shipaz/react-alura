import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function DadosEntrega({aoEnviar}) {
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, cidade, estado });
      }}
    >
      <TextField
        value={cep}
        onChange={(e) => {
          setCEP(e.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
        value={endereco}
        onChange={(e) => {
          setEndereco(e.target.value);
        }}
        id="endereço"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>
      <TextField
        value={numero}
        onChange={(e) => {
          setNumero(e.target.value);
        }}
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
        value={estado}
        onChange={(e) => {
          setEstado(e.target.value);
        }}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
        value={cidade}
        onChange={(e) => {
          setCidade(e.target.value);
        }}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      ></TextField>
      <Button variant="contained" color="primary" type="submit" fullWidth>
        FINALIZAR CADASTRO
      </Button>
    </form>
  );
}

export default DadosEntrega;
