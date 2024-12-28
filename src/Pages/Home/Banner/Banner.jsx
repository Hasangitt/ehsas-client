import Cover from "../../Shared/Cover/Cover";
import bg from '../../../assets/images/cover/coverImage.jpg'
const Banner = () => {
    return (
        <div>
            <Cover
            bg={bg}
            heading={'Unleash Your Style'}
            subHeading={'Keep it short and simple: A concise slogan is more likely to stick in people is minds and be easily recalled.'}
            ></Cover>
        </div>
    );
};

export default Banner;