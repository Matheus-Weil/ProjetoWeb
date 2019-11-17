import React from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import firebase from 'firebase';
import '../Conexao';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";

class Veiculo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      veiculo: '',
      anoV: '',
      numeroMP: '',
      placa: '',
      informacoesA: '',
    }
    this.Cadastrar = this.Cadastrar.bind(this);
  }

    Cadastrar(e){
      firebase.auth().onAuthStateChanged((user) => {
      if(user){
      firebase.database().ref('usuario').child(user.uid).set({
        veiculo:this.state.veiculo,
        anoV: this.state.anoV,
        numeroMP: this.state.numeroMP,
        placa: this.state.placa,
        informacoesA: this.state.informacoesA
      }.then(() => {
        alert('cadastrado')
      }))

      .then(()=>{
        this.setState({
          
        })
      });
    }
    });
  }
  
  state = {
    squares1to6: "",
    squares7and8: ""
  };
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: this.state.squares7and8 }}/>
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: this.state.squares7and8 }}/>
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square-purple-1.png")}/>
                        <CardTitle tag="h4">Veículo</CardTitle>
                      </CardHeader>
                      <CardBody>
                        <Form className="form" onSubmit={this.Cadastrar}>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus
                            })}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Modelo"
                              type="text"
                              onFocus={e =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ fullNameFocus: false })}
                                onChange={(e) => this.setState({veiculo:e.target.value})}
                              /> 
                          </InputGroup>
						              <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus
                            })}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Capacidade de passageiros"
                              type="number"
                              onFocus={e =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ fullNameFocus: false })}
                                onChange={(e) => this.setState({numeroMP:e.target.value})}
                                /> 
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus
                            })}>
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Ano do veiculo"
                              type="number"
                              onFocus={e =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ fullNameFocus: false })}
                                onChange={(e) => this.setState({anoV:e.target.value})}
                              /> 
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Placa do Veículo"
                              type="text"
                              onFocus={e =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={e =>this.setState({ fullNameFocus: false })}
                              onChange={(e) => this.setState({placa:e.target.value})}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Informações adicionais"
                              type="text"
                              onFocus={e =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={e =>this.setState({ fullNameFocus: false })}
                              onChange={(e) => this.setState({informacoesA:e.target.value})}
                            />
                          </InputGroup>
                          <Button className="btn-round" color="primary" size="lg"tag={Link}to="/dashboard" type='submit'>
                          Cadastrar
                        </Button>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button className="btn-round" color="primary" size="lg"tag={Link}to="/dashboard">
                          Voltar
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
                <div className="register-bg" />
                <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: this.state.squares1to6 }}
                />
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Veiculo;
