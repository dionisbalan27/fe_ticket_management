import {
  CREATE_TICKET,
  LIST_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
} from "./types";

import TicketDataService from "../services/TicketService";

export const newTicket = (data) => async (dispatch) => {
  dispatch({
    type : CREATE_TICKET,
    payload : {
      errorMassage : true
    }
  })
  try {
    const res = await TicketDataService.postNewTicket(data);

    dispatch({
      type: CREATE_TICKET,
      payload : {
       errorMassage : true
     },
   });
  } catch (err) {
    console.log("error2")
    dispatch({
      type: CREATE_TICKET,
      payload : {
      errorMassage : err
     },
   });
  }
};

export const listTicket = () => async (dispatch) => {
  
  try {
    const res = await TicketDataService.getAllTicket();

    dispatch({
      type: LIST_TICKET,
      payload : {
        data : res.data.data,
        errorMassage : false
      },
    });
  } catch (err) {
    dispatch({
      type: LIST_TICKET,
      payload : {
        data : false,
        errorMassage : true
      },
    });
  }
};

export const updateTicket = (id, data) => async (dispatch) => {
  dispatch({
    type : UPDATE_TICKET,
    payload : {
      errorMassage : true
    }
  })
  try {
    const res = await TicketDataService.postUpdateTicket(id, data);

    dispatch({
      type: UPDATE_TICKET,
      payload : {
       errorMassage : false
     },
   });
  } catch (err) {
    dispatch({
      type: UPDATE_TICKET,
      payload : {
        errorMassage : err
      },
    });
  }
};

export const deleteTicket = (id) => async (dispatch) => {
  dispatch({
    type : DELETE_TICKET,
    payload : {
      errorMassage : true
    }
  })
  try {
    await TicketDataService.removeTicket(id);
    dispatch({
      type: DELETE_TICKET,
      payload : {
       errorMassage : false
     },
   });
  } catch (err) {
    dispatch({
      type: DELETE_TICKET,
      payload : {
       errorMassage : true
     },
   });
  }
};
