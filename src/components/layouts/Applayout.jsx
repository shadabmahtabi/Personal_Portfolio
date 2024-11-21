import Footer from "../shared/Footer.jsx";
import Navbar from "../shared/Navbar.jsx";
import Title from "../shared/Title.jsx";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div style={{
        fontFamily: "Gilroy"
      }}>
        {/* <Title /> */}
        <Navbar />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };
};

export default Applayout;
