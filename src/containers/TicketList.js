import React, { useState, useEffect, useRef } from "react";
import { useHistory  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listTicket} from "../actions/tickets";
import TicketForm from "../components/TicketForm";
import DetailForm from "../components/DetailForm";
import { Modal, Button} from 'react-bootstrap';
import { deleteTicket} from "../actions/tickets";

const TicketList = () => {
  const [currentTicket, setCurrentTicket] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState(null);
  const [currentRow, setCurrentRow] = useState();
  const history = useHistory();

  const {getListTicketResult, getListTicketError,getCUDTicketError} = useSelector(state => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTicket());
    
    if(!getCUDTicketError){
      console.log("gagal manih")
      dispatch(listTicket())
    }
    console.log("csacacasc",getListTicketError)
     if(getListTicketError){
      history.push('/')
    }
  }, [dispatch,getListTicketError,getCUDTicketError]);


  const handleRemoveProduct = async (id) => {
    dispatch(deleteTicket(id))
  };

  return (
    <>
    <div className="list row">
    <div className="col-md-8">
    <h4>Ticket List</h4>
    <button
    onClick={()=> {
      setShow(true)
      setMode("create");
    }
  }
  className="badge badge-info"
  >Create New Ticket 
  </button>
  <ul className="list-group">
  {getListTicketResult &&
    getListTicketResult.map((ticket) => (
      <li
      className={
        "list-group-item " + (ticket.Id === currentIndex ? "active" : "")
      }
      onClick={() => {
        setCurrentIndex(ticket.Id );
      }}
      key={ticket.Id}
      >
      <div>
      <label>
      <strong>Studio {ticket.studio} </strong>
      {ticket.name}
      </label>
      </div>
      <div>
      <button
      onClick={() => 
        {setShow(true)
          setCurrentRow(ticket);
          setMode("update");
        }}
        className="badge badge-warning"
        >Edit 
        </button>&nbsp;
        <button
        onClick={() => 
          {setShow(true)
            setCurrentRow(ticket);
            setMode("detail");
          }}
          className="badge badge-success"
          >Detail 
          </button>&nbsp;
          <button
          onClick={
           () => {
             var result = window.confirm("Want to delete?");
             if (result) {
               handleRemoveProduct( ticket.Id);
             }
           }}
           className="badge badge-danger"
           >delete
           </button>
           </div>
           </li>
           ))}
    </ul>

    
    </div>
    </div>

    <Modal show={show} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
    <Modal.Title>
    {mode == "update" ? "Edit Ticket" : mode == "create" ? "Create Ticket" : ""}
    </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {mode == "detail" ?
    <DetailForm ticketData={currentRow} /> : <TicketForm ticketData={mode == "update" ? currentRow : null} />}
  {/* <TicketForm ticketData={mode == "update" ? currentRow : null} /> */}
  </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={() => setShow(false)}>
  Close Button
  </Button>
  </Modal.Footer>
  </Modal>

  </>
  );
};

export default TicketList;
