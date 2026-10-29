function Footer(){
    return(
        <>
<style>
    {`

      .footer-link{
          color:white;
          text-decoration:none;
      }
    `}
</style>
<div className="bg-dark text-light py-5">
    <div className="container">
        <div className="row g-4">
           
            <div className="col-lg-4 col-md-6">
                <h5 className="mb-4">About Us</h5>
                <p className="mb-4">We are dedicated to providing innovative solutions that help businesses grow and succeed
                    in the digital age.</p>
                <div className="social-links">
                    <a href="#" className="social-icon bg-primary"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social-icon bg-info"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="social-icon bg-danger"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon bg-primary"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>

          
            <div className="col-lg-2 col-md-6">
                <h5 className="mb-4">Loader</h5>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="#" className="footer-link ">Ground-Tapper</a></li>
                    <li className="mb-2"><a href="#" className="footer-link">Piller-Pits</a></li>
                    <li className="mb-2"><a href="#" className="footer-link">Dwelling</a></li>
                    <li className="mb-2"><a href="#" className="footer-link">Portfolio</a></li>
                    <li className="mb-2"><a href="#" className="footer-link">Contact</a></li>
                </ul>
            </div>

      
            <div className="col-lg-2 col-md-6">
                <h5 className="mb-4">Tractor</h5>
                <ul className="list-unstyled">
                    <li className="mb-2"><a href="#" className="footer-link">Truck Loading</a></li>
                    <li className="mb-2"><a href="#" className="footer-link">Ground-Flattering</a></li>
                    <li className="mb-2"><a href="#" className="footer-link">Marketing</a></li>
                    <li className="mb-2"><a href="#" className="footer-link">Fertilizing</a></li>
                    <li className="mb-2"><a href="#" className="footer-link">Cultivation</a></li>
                </ul>
            </div>

            <div className="col-lg-4 col-md-6">
                <h5 className="mb-4">Contact Info</h5>
                <ul className="list-unstyled">
                    <li className="mb-3">
                        <i className="bi bi-geo-fill me-2"></i>
                       sendurai,ariyalur
                    </li>
                    <li className="mb-3">
                        <i className="bi bi-telephone-fill me-2"></i>
                        <a href="tel:+919360640844" className="footer-link">+919360640844</a>
                    </li>
                    <li className="mb-3">
                        <i className="bi bi-envelope-fill me-2"></i>
                        <a href="mailto:gnanasekarannaveen32@gmail.com" className="footer-link">gnanasekarannaveen32@gmail.com</a>
                    </li>
                </ul>
            </div>
        </div>

       
        <div className="row mt-1">
            <div className="col-12">
                <hr className="mb-5"/>
                <div className="text-center">
                    <p className="mb-0">&copy; 2026 Aandavar Transports. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    );
}export default Footer;