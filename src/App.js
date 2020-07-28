import React, { useState } from "react";
import { Box, Typography, Select, makeStyles, Button } from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

export default function App() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 250,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [minutos, setMinutos] = useState("");
  const [plano, setPlano] = useState("");

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

  function values() {
    alert(
      `DDD de origem: ${origem}\nDDD de destino: ${destino}\nMinutos: ${minutos}\nPlano: ${plano}`
    );
  }

  return (
    <Box
      maxWidth="1000px"
      margin="0 auto"
      display="flex"
      flexDirection="column"
      height="-webkit-fill-available"
      justifyContent="center"
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box margin={3} textAlign="center">
          <Typography variant="h6" color="primary">
            <Box fontFamily="Montserrat">
              Calcule o custo da sua ligação com o FaleMais :)
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
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Selecione o DDD de origem
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={origem}
                onChange={selectOrigem}
              >
                <MenuItem value={11}>011</MenuItem>
                <MenuItem value={16}>016</MenuItem>
                <MenuItem value={17}>017</MenuItem>
                <MenuItem value={18}>018</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Selecione o DDD de destino
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={destino}
                onChange={selectDestino}
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
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Selecione o tempo da ligação
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={minutos}
                onChange={selectMinutos}
              >
                <MenuItem value={20}>20 minutos</MenuItem>
                <MenuItem value={80}>80 minutos</MenuItem>
                <MenuItem value={100}>100 minutos</MenuItem>
                <MenuItem value={200}>200 minutos</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Selecione o plano
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={plano}
                onChange={selectPlano}
              >
                <MenuItem value={"FaleMais30"}>FaleMais 30</MenuItem>
                <MenuItem value={"FaleMais60"}>FaleMais 60</MenuItem>
                <MenuItem value={"FaleMais120"}>FaleMais 120</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box mt={4}>
          <Button
            variant="outlined"
            color="primary"
            disableElevation
            onClick={values}
            size="medium"
          >
            Calcular
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        mt={2}
        alignItems="center"
        justifyContent="space-evenly"
        height="150px"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle2" color="primary">
            <Box fontFamily="Montserrat" fontWeight="bold">
              Valor com o FaleMais
            </Box>
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="h6" color="primary">
              <Box fontFamily="Montserrat" fontWeight="bold">
                R$50,00
              </Box>
            </Typography>
            <CheckCircleOutlineRoundedIcon style={{ color: "#2ea52c" }} />
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="subtitle2" color="primary">
            <Box fontFamily="Montserrat">Valor sem o FaleMais</Box>
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography variant="h6" color="primary">
              <Box fontFamily="Montserrat">R$100,00</Box>
            </Typography>
            <HighlightOffIcon style={{ color: "#e22828" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
