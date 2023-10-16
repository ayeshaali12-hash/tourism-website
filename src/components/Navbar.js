import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import React, { Component} from 'react';
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Modal, ModalBody, ModalHeader, Col, Row } from 'reactstrap';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  }
  // useState [modal, setModal];
  state = {clicked: false};
  handleClick = ()=> {
    this.setState({clicked: !this.state.clicked});
  }
  render() {
    return (
      <div>
        <div className="">
            <Modal size = "md"
                isOpen={this.state.modal} 
                toggle={this.toggleModal}
                className="modal-wrapper">
                
                
                <ModalHeader
                toggle={this.toggleModal}
                className="modal-header"
                style={{textAlign:"center"}}
                >
                    </ModalHeader>
                    <ModalBody>
                        <form>
                            <Row>
                            <Col lg={12}>
                                    <div >
                                        <h4 style={{textAlign:"center", fontWeight:"bold", color: "#008080"}}>Sign Up</h4>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div style={{height:"100px"}}>
                                        <label htmlFor='name' style={{fontSize:"1.2rem", fontWeight:"bold"}}>Name:</label>
                                        <input style={{height:"50px"}} type='text' className='form-control' placeholder='Enter Name'></input>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div style={{height:"100px"}}>
                                        <label htmlFor='email' style={{fontSize:"1.2rem", fontWeight:"bold"}}>Email:</label>
                                        <input style={{height:"50px"}} type='email' className='form-control' placeholder='Enter Email'></input>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div style={{height:"100px"}}>
                                        <label htmlFor='password' style={{fontSize:"1.2rem", fontWeight:"bold"}}>Password:</label>
                                        <input style={{height:"50px"}} type='password' className='form-control' placeholder='Enter Password'></input>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div style={{ display:"flex", textAlign:"center", justifyContent:"center"}}>
                                      <button style={{marginRight:"10px", backgroundColor:"#008080", color:"#fff"}}>Sign Up</button>
                                      <button style={{marginRight:"10px" , backgroundColor:"#008080" , color:"#fff"}}>Cancel</button>
                                    </div>
                                </Col>
                                
                            </Row>
                        </form>
                    </ModalBody>
            </Modal>
        </div>
        <nav className="NavItems">
            <h1 className="navbar-logo">Travelers</h1>

            <div className="menu-icons" onClick={this.handleClick}>
              <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
            </div>

            <ul className={this.state.clicked?"nav-menu active":"nav-menu"}>
              {MenuItems.map((item,index)=>{
                return(
                  <li key={index} className={item.className} style={{color:"green"}}>
                    <Link to={item.url} className="navbar-link"><i className={item.icon}></i>{item.title}</Link>
                </li>
                )
              })}
              <button  onClick={this.toggleModal}>Sign Up</button>
                

            </ul>

        </nav>
      </div>
    )
  }
}
