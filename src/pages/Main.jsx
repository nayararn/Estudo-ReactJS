import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Select,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import { makeStyles, createStyles, ThemeProvider } from "@material-ui/styles";
import { toCurrency } from "../utils/currency";
import { theme } from "../theme/theme";
import "../App.css";

export default function CalculoTelzir() {
  const useStyles = makeStyles(
    //Definindo styles de alguns componentes com MaterialUI
    createStyles({
      formControl: {
        margin: 10,
        minWidth: 250,
      },
      button: {
        textTransform: "none",
        fontWeight: "bolder",
        color: "#fffffff",
        "&:hover": {
          backgroundColor: "#202f63",
          borderColor: "#202f63",
          boxShadow: "none",
        },
      },
      icon: {
        backgroundColor: "aliceblue",
        width: "75px",
        height: "70px",
        border: "2px solid #335b50",
        borderRadius: "50%",
        marginTop: "-70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      containerValor: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#202f63",
        padding: "17px",
        borderRadius: "9px",
        color: "#ffffff",
        marginBottom: "15px",
      },
      containerSelects: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid #335b50",
        padding: "10px",
        borderRadius: "10px",
        margin: "0 15px",
        backgroundColor: "aliceblue",
      },
    })
  );
  const classes = useStyles();
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [minutos, setMinutos] = useState("");
  const [plano, setPlano] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [valorSemPlano, setValorSemPlano] = useState(0);
  const [valorMinuto, setValorMinuto] = useState(0);
  const [valorComPlano, setValorComPlano] = useState(0);
  const [tarifaIndisponivel, setTarifaIndisponivel] = useState("");

  //Capturando valores selecionados pelo usuário nos selects
  const selectOrigem = (event) => {
    setOrigem(event.target.value);
  };
  const selectDestino = (event) => {
    setDestino(event.target.value);
  };
  const selectMinutos = (event) => {
    setMinutos(event.target.value);
  };
  const selectPlano = (event) => {
    setPlano(event.target.value);
  };

  //Verificando o valor do minuto da ligação com o plano e sem o plano
  useEffect(() => {
    setValorSemPlano(toCurrency(valorMinuto * minutos));

    if (plano === 30 || plano === 60 || plano === 120) {
      if (plano > minutos) {
        setValorComPlano(toCurrency(0));
      } else {
        let excedente = (minutos - plano) * valorMinuto;
        setValorComPlano(toCurrency(excedente + excedente * 0.1));
      }
    }
  }, [minutos, plano, valorMinuto]);

  //Função para calcular valor da ligação
  const valores = () => {
    setMostrarResultado(true);
    if (
      (origem === 11 && destino === 16) ||
      (origem === 18 && destino === 11)
    ) {
      setValorMinuto(1.9);
    } else if (origem === 16 && destino === 11) {
      setValorMinuto(2.9);
    } else if (origem === 11 && destino === 17) {
      setValorMinuto(1.7);
    } else if (origem === 17 && destino === 11) {
      setValorMinuto(2.7);
    } else if (origem === 11 && destino === 18) {
      setValorMinuto(0.9);
    } else {
      setTarifaIndisponivel("Ops, não conseguimos calcular essa tarifa :(");
      setMostrarResultado(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className={classes.root}
        maxWidth="1000px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        height="-webkit-fill-available"
        justifyContent="center"
        alignItems="center"
      >
        <Box className={classes.containerSelects}>
          <Box
            margin={3}
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box className={classes.icon}>
              <CallRoundedIcon
                fontSize="large"
                style={{ color: "#0000008a" }}
              />
            </Box>
            <Typography variant="h6" color="primary">
              <Box fontWeight={600} mt={2}>
                Calcule o custo da sua ligação com o FaleMais da Telzir <br /> e
                aproveite as vantagens!
              </Box>
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Box>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  DDD de origem
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={origem}
                  onChange={selectOrigem}
                  label="DDD de origem"
                >
                  <MenuItem value={11}>011</MenuItem>
                  <MenuItem value={16}>016</MenuItem>
                  <MenuItem value={17}>017</MenuItem>
                  <MenuItem value={18}>018</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  DDD de destino
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={destino}
                  onChange={selectDestino}
                  label="DDD de destino"
                >
                  <MenuItem value={11}>011</MenuItem>
                  <MenuItem value={16}>016</MenuItem>
                  <MenuItem value={17}>017</MenuItem>
                  <MenuItem value={18}>018</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            flexWrap="wrap"
          >
            <Box>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Tempo da ligação
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={minutos}
                  onChange={selectMinutos}
                  label="Tempo da ligação"
                >
                  <MenuItem value={20}>20 minutos</MenuItem>
                  <MenuItem value={80}>80 minutos</MenuItem>
                  <MenuItem value={100}>100 minutos</MenuItem>
                  <MenuItem value={200}>200 minutos</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Plano FaleMais
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={plano}
                  onChange={selectPlano}
                  label="Plano FaleMais"
                >
                  <MenuItem value={30}>FaleMais 30</MenuItem>
                  <MenuItem value={60}>FaleMais 60</MenuItem>
                  <MenuItem value={120}>FaleMais 120</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box mt={4}>
            {origem && destino && minutos && plano !== "" ? (
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                disableElevation
                onClick={valores}
                size="large"
              >
                Calcular
              </Button>
            ) : (
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                disableElevation
                onClick={valores}
                size="large"
                disabled
              >
                Calcular
              </Button>
            )}
          </Box>
        </Box>
        {mostrarResultado === true && (
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            mt={2}
            alignItems="center"
            justifyContent="space-around"
            height="120px"
            width="70%"
          >
            <Box className={classes.containerValor}>
              <Typography variant="subtitle2">
                <Box fontWeight="bold" pr={1}>
                  Valor com o FaleMais
                </Box>
              </Typography>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Typography variant="h6">
                  <Box fontWeight="bold">{valorComPlano}</Box>
                </Typography>
                <CheckCircleOutlineRoundedIcon style={{ color: "#2ea52c" }} />
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={2}
            >
              <Typography variant="subtitle2">
                <Box pr={1}>Valor sem o FaleMais</Box>
              </Typography>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Typography variant="h6">
                  <Box>{valorSemPlano}</Box>
                </Typography>
                <HighlightOffIcon style={{ color: "#e22828" }} />
              </Box>
            </Box>
          </Box>
        )}
        {tarifaIndisponivel !== "" && mostrarResultado === false && (
          <Box
            display="flex"
            flexWrap="wrap"
            mt={2}
            alignItems="center"
            height="50px"
          >
            <Typography variant="h6" color="primary">
              <Box fontWeight="bold" textAlign="center">
                {tarifaIndisponivel}
              </Box>
            </Typography>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}
