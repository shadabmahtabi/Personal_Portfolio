import Footer from "@/components/shared/Footer.jsx";
import Navbar from "@/components/shared/Navbar.jsx";
import Title from "@/components/shared/Title.jsx";

const Applayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <div style={{
        fontFamily: "Gilroy"
      }}>
        <Title />
        <Navbar />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };
};

export default Applayout;
