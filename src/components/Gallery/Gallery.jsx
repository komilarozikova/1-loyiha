import React from 'react'
import pic1 from '../../img/pic1.jpg';
import pic2 from '../../img/pic2.jpg';
import pic3 from '../../img/pic3.jpg';
import pic4 from '../../img/pic4.jpg';
import pic5 from '../../img/pic5.jpg';
import pic6 from '../../img/pic6.jpg';
import pic7 from '../../img/pic7.jpg';
import pic8 from '../../img/pic8.jpg';
import pic9 from '../../img/pic9.jpg';
import '../../components/Gallery/Gallery.css'

const Gallery = () => {
  return (
    <div>
         <div className="gallery">
                <div className="row">
                <div className="column">
             <div className="image">
                <img src={pic1} />
                </div>
                <div className="image">
                <img src={pic4}  />
                </div>
                <div class="image">
                <img src={pic7}  />
                </div>
             </div>
             <div className="column">
             <div className="image">
                <img src={pic2} />
                </div>
                <div className="image">
                <img src={pic5}  />
                </div>
                <div class="image">
                <img src={pic8}  />
                </div>
             </div>
             <div className="column">
             <div className="image">
                <img src={pic3} />
                </div>
                <div className="image">
                <img src={pic6}  />
                </div>
                <div class="image">
                <img src={pic9}  />
                </div>
             </div>
                </div>
            </div>
    </div>
  )
}

export default Gallery
