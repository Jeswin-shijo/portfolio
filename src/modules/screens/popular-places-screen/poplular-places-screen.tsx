import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";
const places = [
  {
    title: "Sri Lanka Packages",
    description:
      "Sri Lanka, historically known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia. It lies in the Indian Ocean, southwest of the Bay of Bengal, separated from the Indian peninsula by the Gulf of Mannar and the Palk Strait. It shares a maritime border with the Maldives in the southwest and India in the northwest.",
    image: "https://picsum.photos/200/300?grayscale",
  },
  {
    title: "Bali Packages",
    description: "Explore the exotic temples, beaches, and nightlife of Bali.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    title: "Wayanad Packages",
    description: "Discover lush greenery, wildlife, and waterfalls in Wayanad.",
    image: "https://picsum.photos/200/300/?blur",
  },
  {
    title: "Munnar Package",
    description: "Enjoy tea plantations and misty hills in Munnar.",
    image: "https://source.unsplash.com/800x600/?munnar,tea",
  },
  {
    title: "Thailand Package",
    description: "Experience vibrant markets, beaches, and Thai culture.",
    image: "https://source.unsplash.com/800x600/?thailand",
  },
];

const PopularPlacesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box sx={{ backgroundColor: "#e9eff4", py: 8 }}>
      <Container>
        <Typography
          variant="button"
          sx={{
            border: "1px solid #000",
            px: 2,
            py: 0.5,
            borderRadius: "12px",
            mb: 2,
            display: "inline-block",
            fontSize: 14,
          }}
        >
          Popular Places
        </Typography>
        <div className="d-flex justify-content-between">
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              fontFamily: "'Playfair Display', serif",
              mb: 2,
            }}
          >
            Explore Our Popular <br /> Places
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, maxWidth: 500 }}>
            Embark on a journey through our most sought-after destinations —
            from serene hill stations and sun-kissed beaches to vibrant cities
            and cultural wonders,
          </Typography>
        </div>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            {places.map((place, index) => (
              <Box
                key={index}
                onClick={() => setActiveIndex(index)}
                sx={{
                  py: 2,
                  px: 1,
                  cursor: "pointer",
                  borderBottom: "1px solid #ccc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: activeIndex === index ? "#000" : "#aaa",
                  fontWeight: activeIndex === index ? 600 : 400,
                  transition: "0.3s",
                }}
              >
                {place.title}
                <ArrowForwardIcon
                  sx={{
                    fontSize: 18,
                    transform: "rotate(-45deg)",
                  }}
                />
              </Box>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ borderRadius: 3, overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    image={places[activeIndex].image}
                    alt={places[activeIndex].title}
                    sx={{ height: "100%", maxHeight: 300, objectFit: "cover" }}
                  />
                </Card>
              </Grid>

              <Grid
                size={{ xs: 12, md: 6 }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    mb: 1,
                  }}
                >
                  {places[activeIndex].title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mb: 2, lineHeight: 1.7, color: "#333" }}
                >
                  {places[activeIndex].description}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFD700",
                    color: "#000",
                    textTransform: "none",
                    px: 3,
                    borderRadius: "10px",
                    fontWeight: 500,
                    alignSelf: "flex-start",
                    "&:hover": {
                      backgroundColor: "#ffc400",
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Explore More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PopularPlacesScreen;
