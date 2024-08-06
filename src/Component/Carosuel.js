import React from "react";
import image1 from "../assets/Image/apartment1.png";
import image2 from "../assets/Image/M3M Mansion.webp";
import image3 from "../assets/Image/Smartworld One DXP.webp";
import image4 from "../assets/Image/Whiteland Urban Resort.webp";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import "./Carousel.css"; 

const images = [
  {
    label: "Apartment",
    imgPath: image1,
  },
  {
    label: "Apartment",
    imgPath: image2,
  },
  {
    label: "Apartment",
    imgPath: image3,
  },
  {
    label: "Apartment",
    imgPath: image4,
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const getDisplayedImages = () => {
    const start = activeStep;
    const end = (activeStep + 3) % maxSteps;
    if (end > start) {
      return images.slice(start, end);
    } else {
      return [...images.slice(start, maxSteps), ...images.slice(0, end)];
    }
  };

  const displayedImages = getDisplayedImages();

  return (
    <>
      <Box className="carousel-container">
        <Box className="carousel-inner-container">
          {displayedImages.map((step, index) => (
            <Box key={index} className="carousel-image-container">
              <Box
                component="img"
                className={`carousel-image ${
                  activeStep === index ? "active" : ""
                }`}
                src={step.imgPath}
                alt={step.label}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{ marginTop: { xs: "-60px", sm: "-80px", md: "-100px" } }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </>
  );
}

export default Carousel;
