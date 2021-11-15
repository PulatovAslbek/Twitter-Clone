import React from "react";
import './FooterImagesBox.scss'
import firstImg from '../../Assets/image/Rectangle 15.png';
import secondImg from '../../Assets/image/Rectangle 16.png';
import thirdImg from '../../Assets/image/Rectangle 17.png';
import fourthImg from '../../Assets/image/Rectangle 15 (1).png';
import fifthImg from '../../Assets/image/Rectangle 16 (1).png';
import sixthImg from '../../Assets/image/Rectangle 17 (1).png';

function FooterImagesBox(){
   return(
      <div className='images-box'>
         <img src={firstImg} alt="images"  width='116' height='88' />
         <img src={secondImg} alt="images"  width='116' height='88' />
         <img src={thirdImg} alt="images"  width='116' height='88' />
         <img src={fourthImg} alt="images"  width='116' height='88' />
         <img src={fifthImg} alt="images"  width='116' height='88' />
         <img src={sixthImg} alt="images" width={116} height={88} />

      </div>
   )
}

export default FooterImagesBox