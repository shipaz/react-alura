import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  
  const validacoes = useContext(ValidacoesCadastro);

  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar) {
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        id="nome"
        value={nome}
        name="nome"
        onChange={(event) => setNome(event.target.value)}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="sobrenome"
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cpf"
        value={cpf}
        onChange={(event) => setCPF(event.target.value)}
        onBlur={validarCampos}
        name="cpf"
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => setPromocoes(event.target.checked)}
            name="Promoções"
            color="primary"
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
            name="Novidades"
            color="primary"
          />
        }
        label="Novidades"
      />
      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
