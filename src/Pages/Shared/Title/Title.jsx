import PropTypes from "prop-types";

const Title = ({heading, subHeading}) => {
    return (
        <div className="my-10 md:my-20 text-center max-w-lg mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold kaushan-font">{heading}</h1>
            <div className="divider divider-accent"></div>
            <p className="text-sm md:text-xl lg:text-2xl text-gray-500 kaushan-font">{subHeading}</p>
        </div>
    );
};

export default Title;

Title.propTypes = {
    heading: PropTypes.node,
    subHeading: PropTypes.node
}