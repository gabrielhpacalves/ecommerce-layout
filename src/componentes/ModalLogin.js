import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import usuarios from '../itens/usuarios';

// Substitua pelo seu Client ID do Google OAuth 2.0
const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    const user = usuarios.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      console.log('Login bem-sucedido:', user);
  
      // Armazena os dados no localStorage (ou sessionStorage, dependendo da necessidade)
      localStorage.setItem('user', JSON.stringify(user));
      setOpen(false); // Fecha a modal após o login
    } else {
      console.log('Usuário ou senha incorretos');
    }
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen} id="botaoClick" style={{ display: 'none' }} >
          Slide in alert dialog
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>
            <StyledLogo src="/img/logo.png" alt="Logo" />
          </DialogTitle>
          <DialogContent>

            <StyledTextField
              autoFocus
              id="username"
              label="Nome de usuário"
              type="text"
              fullWidth
              variant="standard"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <StyledTextField
              id="password"
              label="Senha"
              type="password"
              fullWidth
              variant="standard"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </DialogContent>
          <StyledDialogActions>
            <StyledButton onClick={handleLogin}>Entrar</StyledButton>
          </StyledDialogActions>

          <DialogContent>
            <StyledOrContainer>
              <StyledLine />
              <StyledOrText>ou</StyledOrText>
              <StyledLine />
            </StyledOrContainer>
            <div style={{ marginTop: "20px" }}>
              <GoogleLogin/>
            </div>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </GoogleOAuthProvider>
  );
}

// Styled Components
const StyledDialogActions = styled(DialogActions)`
  display: flex;
`;

const StyledButton = styled.button`
  width: calc(100% - 30px);
  margin: 0 auto;
  background-color: #0a2240;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  outline: none;
  margin-top: -10px;
`;

const StyledTextField = styled(TextField)`
  && {
    margin: 8px 0;
  }
`;

const StyledOrContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLine = styled.div`
  flex-grow: 1;
  border-bottom: 1px solid #d3d3d3; /* Cor cinza claro */
`;

const StyledOrText = styled.span`
  margin: 0 10px;
  font-weight: bold;
`;

// Logo Centralizado
const StyledLogo = styled.img`
  display: block;
  margin: 0 auto;
  width: 100px;  // Defina o tamanho do logo conforme necessário
  height: auto;
  margin-top: 20px;  
  margin-top: 20px;  
`;
