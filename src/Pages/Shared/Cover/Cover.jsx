import PropTypes from "prop-types";

const Cover = ({ bg, heading, subHeading }) => {
  return (
    <div className="relative -z-10 h-screen md:h-[500px] lg:h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage:
`url(${bg}) `, }}>
            {/* Overlay */}
            < div className="absolute inset-0 bg-black opacity-50" ></div>
            {/* Content on top of overlay */}
            < div className="relative z-10 h-full flex items-end pb-20 md:pb-10 lg:pb-40">
              <div className="space-y-4 p-4 md:p-8 lg:px-40">
              <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold kaushan-font ">{heading}</h1>
              <h1 className="text-white text-base md:text-3xl lg:text-4xl font-bold cookie-regular">{subHeading}</h1>
              </div>
            </div>
        </div >
  );
};

export default Cover;

Cover.propTypes = {
  bg: PropTypes.node,
  heading: PropTypes.node,
  subHeading: PropTypes.node,
};
