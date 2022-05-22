import {
  CREATE_TICKET,
  LIST_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
} from "../actions/types";

const initialState = {
  data:false,
  getListTicketResult : false,
  getListTicketError:true,
  getCUDTicketError:true,
}

const ticketReducer = (tickets = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TICKET:
      console.log( payload.errorMassage)
    return{
      ...tickets,
      getCUDTicketError : payload.errorMassage , 
    }

    case LIST_TICKET:
    return {
      ...tickets,
      getListTicketResult : payload.data,
      getListTicketError : payload.errorMassage,  
    }

    case UPDATE_TICKET:
    return {
      ...tickets,
      getCUDTicketError : payload.errorMassage          
    }

    case DELETE_TICKET:
    return {
      ...tickets,
      getCUDTicketError : payload.errorMassage          
    }

    default:
    return tickets;
  }
};

export default ticketReducer;