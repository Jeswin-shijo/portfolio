import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

interface ExpandableCardProps {
  image: string;
  location: string;
  title: string;
  price: string;
  description: string;
}

const ExpandableCard = ({
  image,
  location,
  title,
  price,
  description,
}: ExpandableCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        maxWidth: 345,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        boxShadow: hovered ? 6 : 1,
        zIndex: hovered ? 10 : 1,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardActionArea>
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" height="180" image={image} alt={title} />
          <Paper
            elevation={3}
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              bgcolor: "white",
              px: 1.5,
              py: 0.5,
              borderRadius: 2,
              fontWeight: 500,
              fontSize: "0.875rem",
              opacity: 0.5,
            }}
          >
            {location}
          </Paper>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Collapse in={hovered} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            {price}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ExpandableCard;
