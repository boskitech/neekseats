import * as React from "react";
import { styled } from "@mui/system";
import { Button, CircularProgress, Grid } from "@mui/material";
import Peach from "../../assets/img/watch_img_10.png";
import Black from "../../assets/img/watch_img_4.png";
import White from "../../assets/img/watch_img_17.png";
import Blue from "../../assets/img/watch_img_16.png";
import Grey from "../../assets/img/watch_img_3.png";
import Rating from "@mui/material/Rating";
import MuiToggleButton from "@mui/material/ToggleButton";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchOneProduct,
  selectProduct,
  OneProdStatus,
  changeStatus,
} from "../../reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToCartStatus,
  changeAddStatus,
} from "../../reducers/cartSlice";
import { formatToCurrency } from "../../utils/currencyFormatter";
import Loader from "../../components/loader/Loader";
import AlertBar from "../../components/alertBar/AlertBar";

//Toggle button -----------------------------------------------------
const ToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  width: "100px",
  height: "100px",
  outline: "1px solid #bfbfbf",
  border: "none",
  borderRadius: "0px",
  textAlign: "left",
  fontSize: "13px",
  color: "#444",
  marginRight: "10px",
  marginTop: "10px",
  textTransform: "capitalize",
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "#805a0f",
    fontWeight: 600,
    outline: "2px solid orange",
    backgroundColor: "#fff",
  },
  "&.Mui-selected:hover": {
    color: "#dfac47",
    fontWeight: 600,
    backgroundColor: "#fff",
  },
  "&:hover": {
    fontWeight: 600,
    color: "#444",
    outline: "1px solid orange",
    backgroundColor: "#fff",
  },
}));

const ToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme }) => ({
  backgroundColor: "#fff",
  display: "block",
  width: "100%",
  color: "#333",
  marginTop: "-5px",
}));

//Quantity Button --------------------------------------------------------------
const StyledQuantityBar = styled("span")(({ theme }) => ({
  height: "35px",
  overflow: "hidden",
  borderRadius: "4px",
  color: "#777",
}));

const QuantityDiv = styled("span")(({ theme }) => ({
  fontSize: "17px",
  padding: "5px",
  border: "1px solid #bfbfbf",
  borderRadius: "4px",
  margin: "auto",
  width: "auto",
}));

//View item button -----------------------------------------------------

const ViewItemBody = styled("div")(({ theme }) => ({
  width: "80%",
  margin: "100px auto",
  [theme.breakpoints.up("xl")]: {
    width: "60%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "90%",
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
    margin: "40px auto",
  },
}));

const StyledSideBar = styled("section")(({ theme }) => ({
  width: "100%",
  height: "auto",
  textAlign: "center",
  background: "#fff",
  paddingBottom: "10px",
  boxShadow: "0 0 20px #dfdfdf",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const StyledImageBar = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

const StyledSelectionBar = styled("div")(({ theme }) => ({
  width: "100%",
  height: "auto",
}));

const StyledProductsDiv = styled("div")(({ theme }) => ({
  width: "100%",
  height: "350px",
  textAlign: "center",
  borderRadius: "5px",
  [theme.breakpoints.up("xl")]: {
    height: "400px",
  },
  [theme.breakpoints.down("lg")]: {
    height: "350px",
  },
  [theme.breakpoints.down("md")]: {
    height: "350px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "300px",
  },
}));

const StyledProductsImage = styled("img")(({ theme }) => ({
  width: "98%",
  height: "auto",
  margin: "60px auto",
  filter: "drop-shadow(-10px 30px 4px #efefef)",
  [theme.breakpoints.down("md")]: {
    width: "340px",
    height: "auto",
    margin: "0px auto",
  },
}));

const StyledProductsButttonImage = styled("img")(({ theme }) => ({
  width: "90px",
  height: "90px",
  margin: "60px 0",
}));

// const StyledImageGrid = styled("img")(({ theme }) => ({
//   width: "100px",
//   height: "auto",
//   margin: "10px auto",
// }));

const StyledProductsDivHeader = styled("div")(({ theme }) => ({
  fontSize: "23px",
  fontWeight: 500,
  color: "#555",
  textTransform: "capitalize",
  marginTop: "0px",
  width: "100%",
}));

const StyledProductsDivBrandText = styled("div")(({ theme }) => ({
  fontSize: "17px",
  fontWeight: 500,
  color: "#777",
  textTransform: "uppercase",
  marginBottom: "10px",
  width: "100%",
}));

const StyledProductsDivText = styled("div")(({ theme }) => ({
  fontSize: "17px",
  fontWeight: 500,
  color: "#777",
  marginBottom: "10px",
  marginTop: "0px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    marginTop: "0px",
    marginBottom: "5px",
  },
}));

const StyledProductsDivColorText = styled("div")(({ theme }) => ({
  fontSize: "17px",
  fontWeight: 500,
  color: "#777",
  marginBottom: "10px",
  marginTop: "0px",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
    marginBottom: "5px",
  },
}));

const StyledProductsDivPriceText = styled("div")(({ theme }) => ({
  fontSize: "25px",
  fontWeight: 450,
  color: "#222",
  marginTop: "0px",
}));

const StyledColorGrid = styled(Grid)(({ theme }) => ({
  marginTop: "25px",
}));

const StyledQuantityGrid = styled(Grid)(({ theme }) => ({
  marginTop: "50px",
}));

const StyledBuyAndCheckOut = styled("div")(({ theme }) => ({
  marginTop: "50px",
}));

const StyledBannerCartButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#c73217",
  color: "white",
  width: "180px",
  marginTop: "30px",
  padding: "10px",
  fontSize: "15px",
  marginRight: "10px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "50px",
    fontWeight: 500,
    fontSize: "15px",
  },
}));

const StyledDiscriptionBar = styled("div")(({ theme }) => ({
  color: "#333",
  width: "100%",
  height: "auto",
  textAlign: "justify",
  marginTop: "100px",
  fontSize: "15px",
  borderTop: "1px solid #cfcfcf",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "auto",
    fontWeight: 500,
    fontSize: "15px",
    marginTop: "50px",
  },
}));

const ViewItem = () => {
  let params = useParams();
  let id = params.id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = React.useState("");
  const [quantity, setQuantity] = React.useState(1);
  const [colorMessage, setColorMessage] = React.useState("");
  const oneProduct = useSelector(selectProduct);
  const status = useSelector(OneProdStatus);
  const addCartItemStatus = useSelector(addToCartStatus);
  const [imageUrl, setImageUrl] = React.useState("");
  const [loader, setLoader] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleValue = (event, newValue) => {
    setColor(newValue);
    setColorMessage("");
  };

  React.useEffect(() => {
    if (status === "idle") dispatch(fetchOneProduct(id));
    return () => {
      dispatch(changeStatus());
    };
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    setLoader(addCartItemStatus);
  }, [addCartItemStatus]);

  const handleAddToCart = () => {
    if (!color) {
      setColorMessage("Select Color");
    } else {
      if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"));
        let postData = {
          userID: user._id,
          itemID: oneProduct._id,
          cartItemName: oneProduct.productName,
          cartItemPrice: oneProduct.productPrice,
          itemShippingPrice: oneProduct.productShipping,
          cartItemQuantity: quantity,
          cartItemColor: color,
          cartItemImage: oneProduct.productImage[0].image,
        };

        dispatch(addToCart(postData));
      } else {
        setError(true);
      }
    }
  };

  const handleBuyNow = () => {};
  const handleGoToCart = () => {
    navigate("/cart");
    dispatch(changeAddStatus());
  };

  return (
    <ViewItemBody>
      {addCartItemStatus === "loading" && <Loader />}
      {addCartItemStatus === "succeeded" && (
        <AlertBar
          message="Item Added to cart successfully"
          header="Added Item"
          action={handleGoToCart}
          actionTitle="View Cart"
          closeAction={() => dispatch(changeAddStatus())}
        />
      )}
      {addCartItemStatus === "failed" && (
        <AlertBar
          message="Item not added. Try Again later"
          header="Error"
          action={() => {}}
          actionTitle=""
          closeAction={() => {}}
        />
      )}
      {error && (
        <AlertBar
          message="Couldn't add items to cart. Login to continue"
          header="Cannot Add Item"
          action={() => navigate("/login")}
          actionTitle="Login"
          closeAction={() => {}}
        />
      )}
      <IconButton sx={{mb:'30px', color:'#333', fontSize:'24px'}} onClick={() => navigate("/shop")}><ArrowBackIcon/></IconButton>
      {status === "succeeded" ? (
        <>
          {" "}
          <Grid
            container
            spacing={7}
            display="flex"
            justifyContent="space-between"
          >
            <Grid item md={1.7} sm={12}>
              <StyledSideBar>
                <Grid
                  container
                  direction="column"
                  display="flex"
                  justifyContent="center"
                >
                  <ToggleButtonGroup
                    value={imageUrl}
                    onChange={handleValue}
                    exclusive
                    aria-label="text formatting"
                  >
                    {oneProduct.productImage.map((item, index) => (
                      <ToggleButton
                        key={index}
                        aria-label="bold"
                        value={item.image}
                        sx={{
                          outline: "none",
                          marginRight: "0px",
                          "&:hover": {
                            outline: "none",
                            cursor: "pointer",
                            boxShadow: "0 0 5px #cfcfcf",
                          },
                        }}
                        onClick={() => setImageUrl(item.image)}
                      >
                        <StyledProductsButttonImage
                          src={`https://netporch.herokuapp.com/uploads/${item.image}`}
                        ></StyledProductsButttonImage>
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Grid>
              </StyledSideBar>
            </Grid>
            <Grid item md={4.5} sm={12}>
              <StyledImageBar>
                <StyledProductsDiv>
                  {imageUrl === "" ? (
                    <StyledProductsImage
                      src={`https://netporch.herokuapp.com/uploads/${oneProduct.productImage[0].image}`}
                    />
                  ) : (
                    <StyledProductsImage
                      src={`https://netporch.herokuapp.com/uploads/${imageUrl}`}
                    />
                  )}
                </StyledProductsDiv>
              </StyledImageBar>
            </Grid>
            <Grid item md={5.5} sm={12}>
              <StyledSelectionBar>
                <StyledProductsDivBrandText>
                  {oneProduct.productBrand}
                </StyledProductsDivBrandText>
                <StyledProductsDivHeader>
                  {oneProduct.productName}
                </StyledProductsDivHeader>
                <StyledProductsDivText sx={{ marginTop: "25px" }}>
                  Price
                </StyledProductsDivText>
                <StyledProductsDivPriceText>
                  {formatToCurrency(parseInt(oneProduct.productPrice))}
                </StyledProductsDivPriceText>
                <Rating
                  name="read-only"
                  value={3.49}
                  readOnly
                  sx={{ margin: "20px auto" }}
                />
                <StyledColorGrid container>
                  <Grid item md={2.5} xs={3}>
                    <StyledProductsDivColorText sx={{ marginTop: "15px" }}>
                      Color:
                    </StyledProductsDivColorText>
                  </Grid>
                  <Grid item md={9.5} xs={9}>
                    {colorMessage && (
                      <span style={{ color: "red" }}>{colorMessage}</span>
                    )}
                    <ToggleButtonGroup
                      value={color}
                      onChange={handleValue}
                      exclusive
                      aria-label="text formatting"
                    >
                      {oneProduct.productColor.map((color, index) => (
                        <ToggleButton
                          key={index}
                          value={color.color}
                          aria-label="bold"
                          sx={{ mt: "25px" }}
                        >
                          <StyledProductsButttonImage
                            src={
                              color.color === "White"
                                ? White
                                : color.color === "Blue"
                                ? Blue
                                : color.color === "Black"
                                ? Black
                                : color.color === "Peach"
                                ? Peach
                                : color.color === "Grey"
                                ? Grey
                                : ""
                            }
                          ></StyledProductsButttonImage>
                          <span
                            style={{
                              color: "#000",
                              position: "absolute",
                              display: "flex",
                              justifyContent: "center",
                              alignContent: "flex-end",
                              marginTop: "145px",
                              marginBottom: "25px",
                            }}
                          >
                            {color.color}
                          </span>
                        </ToggleButton>
                      ))}
                    </ToggleButtonGroup>
                  </Grid>
                </StyledColorGrid>
                <StyledQuantityGrid container>
                  <Grid item md={2.5} xs={3}>
                    <StyledProductsDivText>Quantity:</StyledProductsDivText>
                  </Grid>
                  <Grid item md={9.5} xs={9}>
                    <StyledQuantityBar>
                      <QuantityDiv>
                        <IconButton
                          size="small"
                          onClick={() => setQuantity(quantity - 1)}
                          disabled={quantity < 2}
                        >
                          <RemoveIcon
                            sx={{
                              fontSize: "17px",
                              marginRight: "6px",
                              marginLeft: "6px",
                              marginBottom: "3px",
                            }}
                          />
                        </IconButton>
                        {quantity}
                        <IconButton
                          size="small"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          <AddIcon
                            sx={{
                              fontSize: "17px",
                              marginRight: "6px",
                              marginLeft: "6px",
                              marginBottom: "3px",
                            }}
                          />
                        </IconButton>
                      </QuantityDiv>
                    </StyledQuantityBar>
                  </Grid>
                </StyledQuantityGrid>
              </StyledSelectionBar>
              <StyledBuyAndCheckOut>
                <Grid container>
                  <Grid item xl={2.5} md={0} xs={0}></Grid>
                  <Grid item xl={9.5} md={12} xs={12}>
                    <StyledBannerCartButton
                      sx={{
                        backgroundColor:
                          loader === "loading" ? "#dfdfdf" : "#fff",
                        border:
                          loader === "loading"
                            ? "#dfdfdf"
                            : "1.5px solid #c73217",
                        color: loader === "loading" ? "#444" : "#c73217",
                        fontWeight: 600,
                      }}
                      startIcon={<AddShoppingCartIcon />}
                      onClick={handleAddToCart}
                    >
                      {loader === "loading" ? "Loading..." : "Add To Cart"}
                    </StyledBannerCartButton>
                    <StyledBannerCartButton onClick={handleBuyNow}>
                      Buy Now
                    </StyledBannerCartButton>
                  </Grid>
                </Grid>
              </StyledBuyAndCheckOut>
            </Grid>
          </Grid>
          <StyledDiscriptionBar>
            <StyledProductsDivHeader
              sx={{ marginTop: "25px", fontSize: "25px", color: "#333" }}
            >
              Description
            </StyledProductsDivHeader>
            <StyledProductsDivText
              sx={{ fontWeight: "400", marginTop: "20px" }}
            >
              <h3>Tougher around the clock.</h3> 50% thicker front crystal. The
              front crystal is over twice as thick at its tallest point as Apple
              Watch Series 6, adding strength and durability. Robust geometry.
              The front crystal has been redesigned with a flat base, creating a
              sturdier shape more resistant to cracks. <h3>OLED display</h3>The
              touch sensor has been integrated onto the OLED panel, creating one
              unified component and reducing display thickness and borders. The
              future of health. On full display.{" "}
              <h3>
                Measure your blood oxygen level with a revolutionary sensor and
                app
              </h3>
              Take an ECG anytime, anywhere. Check your heart rate along with
              other innovations like mindfulness and sleep tracking to keep you
              healthy from head to toe. Series 7 puts more health insights in
              sight. Apple Watch Measure Close up Apple Watch showing Blood
              Oxygen Measure your blood oxygen. It's a breathtaking innovation.
              Your blood oxygen level is a key indicator of your overall
              wellness. It can help you understand how well your body is
              absorbing oxygen and the amount of oxygen delivered to your body.
              The remarkable sensor and app in Apple Watch Series 7 allow you to
              take on-demand readings of your blood oxygen as well as background
              readings, day and night.3 Learn how to use the Blood Oxygen app
              ECG Take an ECG at any time. With the ECG app, Apple Watch Series
              7 is capable of generating an ECG similar to a single-lead
              electrocardiogram. <h3>Charges in no time</h3> The entire charging
              system for Apple Watch Series 7 has been rethought to get you up
              and running faster than ever. With an updated charging
              architecture and fast-charging USB-C cable, it takes about 45
              minutes to go from 0 to 80% charge.6 Up to 33% faster charging
              than Series 67 8mins provides 8 hours of sleep tracking8 Stay
              centered. <h3>Move ahead</h3> Taking a moment throughout the day
              to pause and breathe can reduce stress. The Reflect feature in the
              Mindfulness app helps you set an intention and center yourself
              with a beautiful animation. And audio and video guided meditations
              in Apple Fitness+ focus on improving your overall wellbeing with
              specific themes such as calm, gratitude, or kindness.9 Reflect App
              Massively motivating. <h3>Tap into dozens of workouts</h3>
              Track all the ways you move. Advance your goals with Apple
              Fitness+. Apple Watch Series 7 gives it everything. And thanks to
              the larger display, you'll see all your progress and metrics more
              quickly and clearly, in and out of the water. Let's go — there's
              more in there. Fitness that revolves around you. Squat, spin,
              stride, you name it — Apple Watch has a workout for it. There's
              even Tai Chi and Pilates to get your endorphins going.{" "}
              <h3>The starting line is on your wrist</h3> Apple Watch Outdoor
              Cycling Airpods Left Apple Watch displaying halfway point Airpods
              Right Cycling finds a whole new gear. Apple Watch automatically
              detects when you begin pedaling and reminds you to start a
              workout. Fall detection, optimized for cycling and other
              workouts,10 can call emergency services if you take a spill.11 And
              to help you keep your eyes on the road, a voice feedback feature
              announces workout milestones, like speed, distance, and more. For
              e-bikes, an improved algorithm more accurately calculates
              calories. H2O. You're good to go.{" "}
              <h3>Apple Watch is water resistant to 50 meters</h3>
              So whether you're in open water or tracking your splits and sets
              at the pool, you're covered.2 Music, Podcasts, and Audiobooks.
              With Apple Music, you've got over 90 million tracks of musical
              motivation riding on your wrist. There are also podcasts and
              audiobooks to help you lose calories and yourself along the way.12
              Apple Fitness+ shown on Watch and Phone Apple Fitness+ The first
              fitness service powered by Apple Watch. Apple Fitness+ is a
              different kind of fitness experience. There are new workouts every
              week, from 5 to 45 minutes. Eleven workout types, including HIIT,
              Strength, Pilates, and Yoga. Guided meditations to help you focus
              on your overall wellbeing. And personal metrics from Apple Watch
              synced to your iPhone, iPad, and Apple TV. Get 3 months free when
              you buy an Apple Watch.
              <h3>Take a call from the trail</h3> Text a smiley face to your
              friends stuck in the office. Apple Watch with cellular gives you
              all the right connections. Feel free to leave your phone at home.
              Wallet keeps it all in one place. That's money. Unlock your door.
              Start your car. Board your plane. Pay for just about anything. And
              that's only the start. With the Wallet app, you've got everything
              important in one location. Perfect when you're all over the
              place.15 Siri. <h3>An answer for life's big questions</h3> What's
              the capital of Christmas Island? Where's the closest gas station?
              What's that song? Ask away. Siri can even translate foreign
              languages in real time. That's fantástico. Maps. Your guiding
              hand. Whether you're walking, driving, cycling, or taking public
              transit, Maps makes it easy every step of the way. Gentle taps
              from the Taptic Engine let you know when it's time to turn left or
              right, so you don't have to look at your watch.{" "}
              <h3>Your family, joined at the wrist</h3> With Family Setup, you
              can use your iPhone to pair watches for your children or older
              adults who don't have their own iPhone. So everyone can stay in
              touch by phone or text message.16 Family Image One Alt Text Kids
              can call, text, ask Siri questions, listen to music, download and
              use apps, and get their allowance through Apple Cash Family.
              Family Image Two Alt Text Everyone can share their location for
              you to see with the Find People app. Be alerted when older family
              members and kids get home or aren't where they're expected to be.
              Family Image Three Alt Text Using the Memoji app, family members
              can customize a Memoji to be as fun as they want, then share it as
              a sticker in Messages or make it their watch face.{" "}
              <h3>Apps specifically designed to do everything</h3> With access
              to thousands of apps from the App Store right on your wrist, Apple
              Watch is the perfect personal device for whatever you love to do.
              Surfing, photography, astronomy, you name it. Just download the
              app straight to your Apple Watch and you've got everything you
              need right at hand. Watch faces that look just like you. Create
              your own watch face with complications tailored to whatever you're
              into. If you're a surfer, see the tides, wind, and water
              temperature at a glance. You can even share faces with friends and
              family by email or text. <h3>Three amazing materials</h3> Each
              singularly beautiful. An extreme level of craftsmanship was
              required to create a watch that's as stunning to look at as it is
              capable to use. Apple Watch is available in three remarkable
              materials — titanium, stainless steel, and 100% recyclable
              aluminum. Environment We take responsibility for the environmental
              footprint of our products throughout their life cycle. We're
              committed to one day sourcing 100% recycled and renewable
              materials across all of our products and packaging.
            </StyledProductsDivText>
          </StyledDiscriptionBar>
        </>
      ) : (
        <div
          style={{
            margin: "60px auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </ViewItemBody>
  );
};

export default ViewItem;
