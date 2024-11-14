import DashboardBox from "./components/DashboardBox";
import { IoMdTrendingDown } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { GiStarsStack } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import SalesPieChart from "./components/SalesPieChart";
import ProductComp from "./components/ProductComp";


const Dashboard = () => {
  return (
    <>
      <div className="right-content w-100">

        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
               
              <DashboardBox color={["#8EC5FC","#E0C3FC"]} icon={<IoMdTrendingUp/>} topIcon={<FaUserCircle/>} text={["Users added",676]}/>
              <DashboardBox color={["rgb(44, 120, 229)","rgb(96, 175, 245)"]}  text={["User Likes",176]} icon={<IoMdTrendingDown/>} topIcon={<GiStarsStack/>} />
              <DashboardBox color={["rgba(61,131,97,1)","rgba(28,103,88,1)"]}  text={["Added to cart",246]} icon={<IoMdTrendingUp/>} topIcon={<HiShoppingCart/>}/>
              <DashboardBox color={["rgba(217,67,67,1)","rgba(242,106,75,1)"]}  text={["Purchased",147]} icon={<IoMdTrendingDown/>} topIcon={<FaShoppingBag/>}/>

            </div>
          </div>


          <div className="col-md-4">
         
              <div className="box">
                <div className="heading">
                  <div>Total Sales</div>
                  <div>💰Rs 5,682,123.00</div>
                  <div>Rs 4,352,473.00 in last month</div>
                </div>
                <SalesPieChart/>
              </div>
            </div>
        
        </div>
      <br />
    <ProductComp/>

      </div>
    </>
  );
};

export default Dashboard;
