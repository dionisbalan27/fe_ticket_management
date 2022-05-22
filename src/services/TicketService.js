import http from "../http-common";

const getAllTicket = () => {
  return http.get("/tickets");
};

const postNewTicket = data => {
  return http.post("/ticket", data);
};

const postUpdateTicket = (id, data) => {
  return http.put(`/ticket/${id}`, data);
};

const removeTicket = id => {
  return http.delete(`/ticket/${id}`);
};

const TicketService = {
  getAllTicket,
  postNewTicket,
  postUpdateTicket,
  removeTicket,
};

export default TicketService;
