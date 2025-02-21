﻿import React from "react";
import classnames from "classnames";
import Optgroup from "../components/Optgroup";
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

class Rota extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
	  horario: '',
	  descricao: '',
	  veiculo: '',
    }
	
	this.Cadastrar = this.Cadastrar.bind(this);
	
	var user = firebase.auth().currentUser;
	if (user) {
		firebase.database().ref("veiculo").on("value", function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				let idProprietario = childSnapshot.child('proprietario').val();
				if (user.uid == idProprietario) {
					
					let key = childSnapshot.key;
					let modelo = childSnapshot.child('modelo').val();
					
				}
			});
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
	}
	
	this.opcoes = [
		{value: '1', label: 'bmw'},
		{value: '2', label: 'celta'},
	];
	
  }
	
  Cadastrar() {

	var user = firebase.auth().currentUser;
	if (user) {
		firebase.database().ref('rota').push().set({
                nome:this.state.nome,
				motorista:user.uid,
				horario:this.state.horario,
				descricao:this.state.descricao,
				veiculo:this.state.veiculo,
        })
	    .then(()=>{
			this.setState({
				nome:'',
				horario:'',
				descricao:'',
				veiculo:'',
			})
	    });
	}
	
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
                          <CardTitle tag="h4">Rota</CardTitle>
                        </CardHeader>
                        <CardBody>
						
							
						
						
						
                          <Form className="form" >
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
                                  placeholder="Nome"
                                  type="text"
                                  onChange={(e) => this.setState({nome:e.target.value})}
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
                              <Input placeholder="Horário"
                                  onChange={(e) => this.setState({horario:e.target.value})}
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
                              <Input placeholder="Descrição"
                                  onChange={(e) => this.setState({descricao:e.target.value})}
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
							  
							<Input type="select" onChange={(e) => this.setState({veiculo:e.target.value})}>
								<Optgroup optionsList={this.opcoes}/>
							</Input>
                            </InputGroup>
                            <Button type="button" onClick={this.Cadastrar}>
							  Cadastrar {this.state.nome}
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

export default Rota;