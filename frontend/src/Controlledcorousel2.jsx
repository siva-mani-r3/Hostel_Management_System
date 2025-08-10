import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import "./controlledcorousel.css"
function ControlledCarousel2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='container'>
    <div className='imageslider' style={{ "marginTop": "90px" }}>
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item>
          <img src='4.jpeg' style={{ "width": "100%", "height": "100%" ,borderTopLeftRadius:"20px",borderBottomRightRadius:"20px"}} text="First slide" class='img-fluid' />

        </Carousel.Item>
        <Carousel.Item>
          <img src='2.jpeg' style={{ "width": "100%", "height": "100%",borderTopLeftRadius:"20px",borderBottomRightRadius:"20px" }} text="Second slide" class='img-fluid' />
    
        </Carousel.Item>
        <Carousel.Item>
          <img src='3.jpeg' style={{ "width": "100%", "height": "100%" ,borderTopLeftRadius:"20px",borderBottomRightRadius:"20px"}} text="Third slide" className='img-fluid' />
        </Carousel.Item>
      </Carousel>
      <div className='conatiner-fluid'>
        <div className='row'>
          <div className='col-md-12'> 
         <center><a href='https://www.aec.edu.in/?p=Hostels' target='_blank' ><Button variant="outline-info" style={{"margin":"15px"}}>Hostel Facilities</Button></a></center>
            <h6 style={{"margin":"10px","color":"grey"}} className='animated-text'>
              Comfortable, offering personal care in hygienic conditions, individual grooming and counseling, the hostels at Aditya have all the features the make them home away from home for hundreds of residents from across the country and foreign countries. Aditya provides a separate hostel facility for boys and girls each with all the modern facilities, for boarding and other recreational activities.
          </h6>
          </div>
        </div>
      </div>
      <div className='container-fluid mt-3'>
        <div className='row'>
          <div className='col-md-12'>
            <img src='footer.jpeg' className='img-fluid' style={{width:"100%",marginBottom:"20px"}}/>
          </div>
          <marquee><h4 style={{ "fontFamily": "sans-serif", 
  "color": "black",
  "text-shadow": "2px 2px 4px turquoise"
 }}>Designed By Kousalya</h4></marquee>
        </div>
      </div>
    </div>
    </div>
  );
}
export default ControlledCarousel2;