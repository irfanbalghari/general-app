const AppFooter = () => {
return (
    <footer className="container-fluid p-0 pr-0">
    <div className="row mr-0 ml-0">
      <div className="col-md-6 pr-0 pl-0 map">
     </div>
      <div className="col-md-6 content-us">
        <div className="contact-form" id="contact">
          <h3 className="text-uppercase">Contact me</h3>
          <input type="text" className="form-control" placeholder="Your Name"/>
          <input type="text" className="form-control" placeholder="Your Email"/>
          <textarea className="form-control" placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </div>
      </div>
    </div>
    <div className="copy pt-4 pb-4">
      <p><a href="#" target="_blank"> &copy; 2022 ROW</a>  &nbsp;  |  &nbsp; Email: <a href="mailto:someone@example.com" target="_blank">Send Email</a> &nbsp; | &nbsp;  All rights reserved</p>
    </div>
  </footer>
);
};

export default AppFooter;
