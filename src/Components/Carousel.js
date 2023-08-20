import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
const data = [
  {
    src: "https://m.media-amazon.com/images/I/71LbMVCPbdL.jpg",
    title: "Section 1",
    description:
      "Explore the often underestimated impact of sibling comparisons and discover strategies to foster healthy sibling relationships",
  },
  {
    src: "https://m.media-amazon.com/images/I/81381eJ+sjL.jpg",
    title: "Section 2",
    description:
      "Delves into the essential elements of building a strong foundation for your child, emphasizing the values, habits, and rapport-building skills that contribute to their growth and success.",
  },
  {
    src: "https://m.media-amazon.com/images/I/71LbMVCPbdL.jpg",
    title: "Section 3",
    description:
      "Addresses relevant challenges that parents face in the digital age, such as teenage digital addiction, unhealthy eating habits, and early signs of OCD. Gain valuable insights into identifying if your child requires professional help and learn how to support them effectively",
  },
  {
    src: "https://m.media-amazon.com/images/I/71LbMVCPbdL.jpg",
    title: "Section 4",
    description:
      "Delves into the often-overlooked aspect of parenting the management of your own emotions. Discover techniques to tackle worry, cultivate mindfulness practices, and create a nurturing environment for both you and your child.",
  },
];

export default function Carousel() {
  return (
    <div id="book">
      <Box
        sx={{
          display: "flex",
          gap: 1,
          py: 1,
          overflow: "scroll",
          width: "80%",
          margin: "5rem auto",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {data.map((item) => (
          <Card
            orientation="horizontal"
            //   size="sm"s
            key={item.title}
            variant="outlined"
            sx={{ width: "20rem", display: "flex", flexDirection: "column" }}
          >
            <AspectRatio ratio="1" sx={{ width: "18rem" }}>
              <img
                src={`${item.src}?h=120&fit=crop&auto=format`}
                srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
              />
            </AspectRatio>
            <Box sx={{ whiteSpace: "normal", mx: 5 }}>
              <Typography level="title-md">{item.title}</Typography>
              <Typography level="body-sm">{item.description}</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </div>
  );
}
