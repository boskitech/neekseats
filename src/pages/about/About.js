import { styled } from "@mui/system";

const AboutUs = () => {
  const StyledAboutBody = styled("div")(({ theme }) => ({
    width: "60%",
    height: "auto",
    margin: "100px auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "40%",
    },
  }));

  const StyledAboutTitle = styled("div")(({ theme }) => ({
    fontSize: "40px",
    fontWeight: 500,
    color: "#07163a",
  }));

  const StyledAboutSubTitle = styled("div")(({ theme }) => ({
    fontSize: "28px",
    fontWeight: 300,
  }));

  const StyledAboutText = styled("div")(({ theme }) => ({
    fontSize: "18px",
    color: "#333333",
    marginTop: "20px",
  }));

  const StyledAboutHeadingText = styled("div")(({ theme }) => ({
    fontSize: "19px",
    color: "#333333",
    marginTop: "20px",
    fontWeight: 500,
  }));

  const StyledAboutQuoteText = styled("div")(({ theme }) => ({
    fontSize: "22px",
    color: "#07163a",
    marginTop: "10px",
    fontWeight: 500,
  }));

  return (
    <div>
      <StyledAboutBody>
        <StyledAboutTitle>About US</StyledAboutTitle>
        <StyledAboutSubTitle>
          The World's best online healthcare
        </StyledAboutSubTitle>
        <StyledAboutText>
          Consulta began over two decades ago by pioneering a better way of
          working, helping businesses find more flexibility and connecting
          talent with more opportunities.
        </StyledAboutText>
        <StyledAboutQuoteText>
          Our mission to create economic opportunities so people have better
          lives has taken us so much further. As a result, we've become the
          world's work marketplace where every day businesses of all sizes and
          independent talent from around the globe meet here to accomplish
          incredible things.
        </StyledAboutQuoteText>
        <StyledAboutText>
          Like for so many, Upwork has had a big impact on my life. I first came
          to this company on the product team and over the years have understood
          what makes this platform really work: the relationships.
        </StyledAboutText>
        <StyledAboutHeadingText>We see what you do</StyledAboutHeadingText>
        <StyledAboutText>
          I have personally seen the passion and commitment that every user puts
          into their work here. Whether it's a quick powerpoint presentation or
          a multi-year development project - both talent on Upwork and our
          clients care about doing really good work because they love what they
          do. In fact, we designed it that way. Our work marketplace aligns the
          goals of our clients with the goals of talent on Upwork so that
          outcomes are better and everyone grows in the same direction. You'll
          find tools to develop your skills, evolve your business, and gain the
          control and freedom you need for success.
        </StyledAboutText>
        <StyledAboutHeadingText>
          Consulta is your workforce
        </StyledAboutHeadingText>
        <StyledAboutText>
          If you're a client that's come here to get things done, use this
          workforce of independent talent to build faster and transform your
          business. If you're independent talent that's come here to realize
          your potential, know that you are a valuable and instrumental part of
          someone's team.
        </StyledAboutText>
        <StyledAboutHeadingText>
          We make work more rewarding
        </StyledAboutHeadingText>
        <StyledAboutText>
          We see your vision, and everything we do is an effort to help you make
          the connections that will turn that vision into reality, by building
          your Virtual Talent Bench of trusted people.
          <br />
          <br />
          The impact is both economic and personal, in the everyday and in the
          long run. When you find the right people, you stop working to get by
          and start working strategically.
          <br />
          <br />
          That is when real opportunity emerges.
          <br />
          <br />I can say with confidence that the Upwork team - the team that
          serves you the talent and you the client - is still driven by our
          mission to create economic opportunity for our people around the
          world.
          <br />
          <br />
          You're our people now, and we're glad that you're here.
          <br />
          <br />
          We can't wait to see what you do.
        </StyledAboutText>
      </StyledAboutBody>
    </div>
  );
};

export default AboutUs;
