import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Social from "../Animation/Social";
import { CardMedia } from "@mui/material";
export default function ActionAreaCard({ name, photo, place, Wa, Li }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        width: "100%",
        margin: "0 auto",
      }}
    >
      <CardActionArea>
        {/* Image */}
        <CardMedia
          component="img"
          height="200" // adjust height as needed
          image={photo} // path to your image
          alt="Profile Image"
          sx={{
            borderRadius: "50%", // make it circular
            width: "250px", // adjust size
            height: "250px",
            margin: "0 auto", // center horizontally
            border: "2px solid #bdbdbd",
            objectFit: "cover",
          }}
        />

        <CardContent sx={{ p: 2, textAlign: "center" }}>
          {/* Name */}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              mt: 1,
              fontSize: { xs: "1rem", sm: "1.25rem" },
              color: "black",
            }}
          >
            {name}
          </Typography>

          {/* Place */}
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.875rem", sm: "0.9rem" },
            }}
          >
            {place}
          </Typography>

          {/* Social Icons */}
          <Social Wats={Wa} Linked={Li} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
