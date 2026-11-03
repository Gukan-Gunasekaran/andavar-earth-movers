function Contact(){
    return(
        <div>
      <center>
        <form
          action=""
          className="card container d-flex justify-content-center align-items-center mt-4"
          style={{ width: "400px" }}
        >
          <h1 className="card-header w-100 bg-primary text-light">Pre-book loader</h1>
          <div className="card-body w-100">
            <div className="d-flex mb-2 w-75">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" className="form-control " />
           </div>
           <div className="d-flex mb-2 w-75">
             <label htmlFor="phno">Phone: </label>
            <input type="number" id="phno" className="form-control" />
           </div>
           
           <div className="d-flex w-75">
            <label htmlFor="area">Area: </label>
            <input type="text" id="area" className="form-control" />
          </div>

          <div className="card-footer w-100">
            <Link className="btn btn-success me-2" type="submit">submit</Link>
            <Link className="btn btn-danger" type="button">clear</Link>
          </div>

          </div>
        </form>
      </center>
    </div>
    );
}export default Contact;