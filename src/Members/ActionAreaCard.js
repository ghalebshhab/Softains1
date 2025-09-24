import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Social from "../Animation/Social";

export default function ActionAreaCard({ name, photo, place }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        width: "100%",
        margin: "0 auto",
      }}
    >
      <CardActionArea>
        <CardContent sx={{ p: 2 }}>
          <Typography component="div" className="mem"></Typography>
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
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.875rem", sm: "0.9rem" },
            }}
          >
            {place}
          </Typography>
          <Typography>
            <Social />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
