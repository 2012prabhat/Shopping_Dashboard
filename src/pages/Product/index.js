import { useState } from "react";
import Laptop from "../../images/laptop.jpg";
import Laptop1 from "../../images/laptop1.jpg";
import Laptop2 from "../../images/laptop2.jpg";
import Laptop3 from "../../images/laptop3.jpg";
import Laptop4 from "../../images/laptop4.jpg";
import Laptop5 from "../../images/laptop5.jpg";
import Laptop6 from "../../images/laptop6.jpg";
import { SiBrandfolder } from "react-icons/si";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosPricetag } from "react-icons/io";
import { MdRateReview } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { IoStarHalf } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import myImg from "../../images/myImg.jpg";
import { StarHalfSharp } from "@mui/icons-material";

const Product = () => {
  const [currImg, setCurrImg] = useState(Laptop);
  const [imgArr, setImgArr] = useState([
    Laptop,
    Laptop1,
    Laptop2,
    Laptop3,
    Laptop4,
    Laptop5,
    Laptop6,
  ]);
  return (
    <>
      <div className="productViewCont">
        <div className="proCont">
          <div className="productImageCont">
            <div className="secImgCont">
              {imgArr.map((m, i) => {
                return (
                  <img
                    onMouseOver={() => setCurrImg(m)}
                    key={i}
                    src={m}
                    alt=""
                  />
                );
              })}
            </div>
            <div className="imageContainer">
              <img src={currImg} alt="" />
            </div>
          </div>
          <div className="productImageDetail">
            <b>Product Details</b>
            <br />
            <div>
              Acer [Smartchoice Aspire Lite AMD Ryzen 3 5300U Premium Thin and
              Light Laptop (Windows 11 Home/8 GB RAM/512 GB SSD) AL15-41 with
              39.62 cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.6 KG
            </div>

            <div className="d-flex w-100 justify-content-between mt-2">
              <div>
                <SiBrandfolder /> Brand
              </div>
              <div>Acer</div>
            </div>

            <div className="d-flex w-100 justify-content-between mt-2">
              <div>
                <BiSolidCategory /> Category
              </div>
              <div>Electronics</div>
            </div>

            <div className="d-flex w-100 justify-content-between mt-2">
              <div>
                <IoIosPricetag /> Price
              </div>
              <div>Rs. 52999</div>
            </div>

            <div className="d-flex w-100 justify-content-between mt-2">
              <div>
                <IoStar /> Rating
              </div>
              <div>
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalf />
              </div>
            </div>

            <div className="d-flex w-100 justify-content-between mt-2">
              <div>
                <MdRateReview /> Review
              </div>
              <div>4.5K+</div>
            </div>
          </div>
        </div>
        <br />
        <div style={{padding:"0 2%"}}>
          <b>Product Description</b>
          <ul>
            <li>
              Processor: AMD Ryzen 3 5300U Quad-Core Mobile Processor with AMD
              Radeon Graphics.Maximum Power Supply Wattage 65 W
            </li>
            <li>
              Visibly Stunning: Experience sharp details and crisp colors on the
              15.6" Full HD display, 16:9 aspect ratio, ultra-slim design and
              narrow bezels.
            </li>
            <li>
              Internal Specifications: RAM - 8 GB of Dual-channel DDR4, 2 SODIMM
              sockets; Storage - 512 GB SSD NVMe solid-state drive storage
              (expandable up to 1TB) to store your files and media
            </li>
            <li>
              Ports: 1 x USB 3.2 Gen 1 (Type A), 2 x USB 2.0 (Type A), 1 x USB
              3.2 Gen 2 (Type C), 1 x DC-in jack
            </li>
            <li>
              Keyboard: 100-/101-/104-key keyboard with independent numeric
              keypad, international language support
            </li>
          </ul>
        </div>

        <div className="rating">
          <b>Rating Analytics</b>
          <br />
          <br />

          <div className="d-flex align-items-center">
            <div>5 Star</div>
            <div className="scale">
              <div className="completed"></div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div>4 Star</div>
            <div className="scale">
              <div className="completed"></div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div>3 Star</div>
            <div className="scale">
              <div className="completed"></div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div>2 Star</div>
            <div className="scale">
              <div className="completed"></div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div>1 Star</div>
            <div className="scale">
              <div className="completed"></div>
            </div>
          </div>
        </div>
        <br />
        <div className="customerReviews">
          <b>Cutomer Reviews</b>
          <br />
          <br />

          <div className="reviewCard">
            <div className="d-flex w-100 justify-content-between">

              <div className="userCont d-flex">
                <div>
                  <img src={myImg} alt="" />
                </div>
                <div className="ml-2">
                  <div className="">
                    <b>John Doe</b>
                  </div>

                  <div>25 min ago !</div>
                </div>
              </div>
                
                <div className="starCont">
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStarHalf/>
                </div>

            </div>
<br />
            <div className="review">
            This laptop, powered by an AMD Ryzen 3 5300U processor and 8GB RAM, offers reliable performance for everyday tasks. The 15.6" Full HD display is vibrant, while the 512GB SSD ensures fast performance. It’s a solid, budget-friendly choice for students and professionals needing a dependable, efficient device for basic tasks.
            </div>
          </div>

          <div className="reviewCard">
            <div className="d-flex w-100 justify-content-between">

              <div className="userCont d-flex">
                <div>
                  <img src={myImg} alt="" />
                </div>
                <div className="ml-2">
                  <div className="">
                    <b>John Doe</b>
                  </div>

                  <div>25 min ago !</div>
                </div>
              </div>
                
                <div className="starCont">
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStarHalf/>
                </div>

            </div>
<br />
            <div className="review">
            This laptop, powered by an AMD Ryzen 3 5300U processor and 8GB RAM, offers reliable performance for everyday tasks. The 15.6" Full HD display is vibrant, while the 512GB SSD ensures fast performance. It’s a solid, budget-friendly choice for students and professionals needing a dependable, efficient device for basic tasks.
            </div>
          </div>

          <div className="reviewCard">
            <div className="d-flex w-100 justify-content-between">

              <div className="userCont d-flex">
                <div>
                  <img src={myImg} alt="" />
                </div>
                <div className="ml-2">
                  <div className="">
                    <b>Prabhat Kumar</b>
                  </div>

                  <div>2 days ago !</div>
                </div>
              </div>
                
                <div className="starCont">
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStarHalf/>
                </div>

            </div>
<br />
            <div className="review">
            This laptop, powered by an AMD Ryzen 3 5300U processor and 8GB RAM, offers reliable performance for everyday tasks. The 15.6" Full HD display is vibrant, while the 512GB SSD ensures fast performance. It’s a solid, budget-friendly choice for students and professionals needing a dependable, efficient device for basic tasks.
            </div>
          </div>
          <div className="reviewCard">
            <div className="d-flex w-100 justify-content-between">

              <div className="userCont d-flex">
                <div>
                  <img src={myImg} alt="" />
                </div>
                <div className="ml-2">
                  <div className="">
                    <b>Prabhat Kumar</b>
                  </div>

                  <div>2 days ago !</div>
                </div>
              </div>
                
                <div className="starCont">
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStarHalf/>
                </div>

            </div>
<br />
            <div className="review">
            This laptop, powered by an AMD Ryzen 3 5300U processor and 8GB RAM, offers reliable performance for everyday tasks. The 15.6" Full HD display is vibrant, while the 512GB SSD ensures fast performance. It’s a solid, budget-friendly choice for students and professionals needing a dependable, efficient device for basic tasks.
            </div>
          </div>
          <div className="reviewCard">
            <div className="d-flex w-100 justify-content-between">

              <div className="userCont d-flex">
                <div>
                  <img src={myImg} alt="" />
                </div>
                <div className="ml-2">
                  <div className="">
                    <b>Prabhat Kumar</b>
                  </div>

                  <div>2 days ago !</div>
                </div>
              </div>
                
                <div className="starCont">
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStar/>
                    <IoStarHalf/>
                </div>

            </div>
<br />
            <div className="review">
            This laptop, powered by an AMD Ryzen 3 5300U processor and 8GB RAM, offers reliable performance for everyday tasks. The 15.6" Full HD display is vibrant, while the 512GB SSD ensures fast performance. It’s a solid, budget-friendly choice for students and professionals needing a dependable, efficient device for basic tasks.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
