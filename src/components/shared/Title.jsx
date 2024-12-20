import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Shadab Mahtabi",
  description = "A showcase of my portfolio.",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
