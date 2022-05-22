import { Form, Button } from 'react-bootstrap';
import { updateTicket, newTicket} from "../actions/tickets";
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

const TicketForm = ({ticketData}) =>{
  
    const dispatch = useDispatch();
    const {getCUDTicketError} = useSelector(state => state.tickets);

    const id = ticketData ? ticketData.Id : "";

    const [titleMovie, setTitleMovie] = useState(ticketData ? ticketData.titleMovie : null);
    const [studio, setStudio] = useState(ticketData ? ticketData.studio : null);
    const [name, setName] = useState(ticketData ? ticketData.name: null);
    const [seat, setSeat] = useState(ticketData ? ticketData.seat :null);

    const mode =  ticketData ?"update" : "create" ;

 
    const dataTicket = {Id:id, titleMovie, studio, name, seat}

    const handleSubmit =async (e) => {
        e.preventDefault();
        mode == "update" ? await dispatch(updateTicket(id, dataTicket)) : await dispatch(newTicket(dataTicket))
       console.log("daad",getCUDTicketError.response)
    }

    return (
        <Form onSubmit={handleSubmit}>
            {console.log("dasibu",getCUDTicketError)}
        <p className={getCUDTicketError != true ? "alert alert-danger" : "offscreen"} aria-live="assertive">
        {getCUDTicketError != true ? "Missing/wrong value" : ""}
        </p>
        <Form.Group>
        <Form.Control
        type="text"
        placeholder="Title Movie *"
        name="Title Movie"
        value={titleMovie}
        onChange={(e)=> setTitleMovie(e.target.value)}
        required
        />
        </Form.Group>
        <Form.Group>
        <Form.Control
        type="text"
        placeholder="Studio *"
        name="Studio"
        value={studio}
        onChange={(e)=> setStudio(e.target.value)}
        required
        />
        </Form.Group>
        <Form.Group>
        <Form.Control
        type="text"
        placeholder="Name"
        name="Name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
        </Form.Group>
        <Form.Group>
        <Form.Control
        type="text"
        placeholder="Seat"
        name="Seat"
        value={seat}
        onChange={(e)=> setSeat(e.target.value)}
        />
        </Form.Group>
        <Button variant="success" type="submit" block>
        {mode == "update" ? "Edit Ticket" : "Create Ticket"}  
        </Button>
        </Form>

        )
    }

    export default TicketForm;