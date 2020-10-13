import React, {useState} from "react";
import { Button, TextField, Switch, FormControlLabel,  } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf: {valido: true, texto: ""}})
    
  return (
    <form 
        onSubmit={event =>  {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
    }}>
      <TextField
        id="nome"
        value={nome}
        onChange = {(event) => setNome(event.target.value)}
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="sobrenome"
        value={sobrenome}
        onChange = {(event) => setSobrenome(event.target.value)}
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="cpf"
        value={cpf}
        onChange = {(event) => setCPF(event.target.value)}
        onBlur={(event)=>{
            const ehValido = validarCPF(event.target.value);
            setErros({cpf: ehValido})
        }}
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
                checked = {promocoes}
                onChange = {(event) => setPromocoes(event.target.checked)}
                name="Promoções" 
                color="primary" />
            }
            label="Promoções"
      />
        <FormControlLabel
        control={
            <Switch 
                checked = {novidades}
                onChange = {(event) => setNovidades(event.target.checked)}
                name="Novidades" 
                color="primary" />
            }
            label="Novidades"
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
