const DetailForm = ({ticketData}) =>{

    return (
        <div>
        <h4>Detail Info</h4>
        <div>
        <label>
        <strong>Title Movie:</strong>
        </label>{" "}
        {ticketData.titleMovie}
        </div>
        <div>
        <label>
        <strong>Studio:</strong>
        </label>{" "}
        {ticketData.studio}
        </div>
        <div>
        <label>
        <strong>Name:</strong>
        </label>{" "}
        {ticketData.name}
        </div>
        <div>
        <label>
        <strong>Seat:</strong>
        </label>{" "}
        {ticketData.seat}
        </div>
        </div>
        )
}

export default DetailForm;