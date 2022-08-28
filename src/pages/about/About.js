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
    color: "#000",
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
    color: "#000",
    marginTop: "10px",
    fontWeight: 500,
  }));

  return (
    <StyledAboutBody data-aos="fade-left">
      <StyledAboutTitle>About US</StyledAboutTitle>
      <StyledAboutSubTitle>The World's best online store</StyledAboutSubTitle>
      <StyledAboutText>
        NetPorch began over two years ago by pioneering a better way of
        shopping, helping businesses find more flexibility and individuals shop with ease.
      </StyledAboutText>
      <StyledAboutQuoteText>
        Our mission to make online shopping and retail comfortable so people have better lives
        has taken us so much further. As a result, we've become the world's best
        marketplace where every day shopping of all sizes and quantities
        from around the globe happen to accomplish incredible things.
      </StyledAboutQuoteText>
      <StyledAboutText>
        Like for so many, NetPorch has had big impact on people's life. We started
        this platform over two years ago and we have understood
        what makes this platform really work: trust and reliability.
      </StyledAboutText>
      <StyledAboutHeadingText>Everything you need in one place</StyledAboutHeadingText>
      <StyledAboutText>
        We have seen the passion and commitment that every user puts
        into shopping with us. Whether it's an express delivery or an 
        oversea delivery - We at NetPorch
        care about attending to your needs with maximun satisfaction. In
        fact, we designed it that way because we love attending of every customer. Our online marketplace aligns the needs of
        our customers with the goals of products on NetPorch so that outcomes are
        better and everyone grows in the same direction. You'll find products to
        run your day-to-day activities, evolve your business, and gain the control and
        freedom you need for a better life.
      </StyledAboutText>
      <StyledAboutHeadingText>
        NetPorch is your workforce
      </StyledAboutHeadingText>
      <StyledAboutText>
        If you're a company that's come here to get things done, use this
        platform of various products to shop faster and transform your
        business. If you're a person that's come here to buy our
        products, know that you are a valuable and instrumental part of
        our team.
      </StyledAboutText>
      <StyledAboutHeadingText>
        We make shopping more rewarding and exciting
      </StyledAboutHeadingText>
      <StyledAboutText>
        We see your needs, and everything we do is an effort to help you make
        the shopping that will turn that vision into reality, by supplying
        your most reliable products
        <br />
        <br />
        The impact is both economic and personal, in the everyday and in the
        long run. When you find the right product, you start buying to get by and
        start buying efficiently.
        <br />
        <br />I can say with confidence that the NetPorch team - the team that
        serves you the best products- is still driven by our
        mission to create simplified shopping experience for people around the world.
        <br />
        <br />
        You're our people now, and we're glad that you're here.
        <br />
      </StyledAboutText>
    </StyledAboutBody>
  );
};

export default AboutUs;
