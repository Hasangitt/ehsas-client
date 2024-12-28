import Title from "../Shared/Title/Title";
// import Banner from "./Banner/Banner";
import Featured from "./New & Featured/Featured";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Slider></Slider>
            <Title
            heading={'New & Featured Collection'}
            subHeading={'Explore the Latest Trends – New Arrivals Just for You!'}
            ></Title>
            <Featured></Featured>
        </div>
    );
};

export default Home;