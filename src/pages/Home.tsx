import { useList } from "@refinedev/core";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
} from "components";
import { red } from "@mui/material/colors";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Something went wrong!</Typography>;

  return (
    <Box border="2px solid #ccc" borderRadius="15px" p={4}>
      <Typography fontSize={25} fontWeight={700} color="#11142D" display="flex" justifyContent="center">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" bgcolor="#d3d3d3" gap={4} border="1px solid #c4e5ed" borderRadius="15px" p={3}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Total customers"
          value={5684}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
        <PieChart
          title="Properties for Cities"
          value={555}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />
      </Box>

      <Stack
        mt="25px"
        width="auto"
        bgcolor="#d3d3d3"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
        border="1px solid #c4e5ed" borderRadius="15px" p={3}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>

      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        display="flex"
        flexDirection="column"
        minWidth="auto"
        mt="25px"
      >
        <Typography fontSize="18px" fontWeight={600} color="#11142d" bgcolor="#d3d3d3" border="1px solid #c4e5ed" borderRadius="15px" p={3}>
          Latest Properties
        </Typography>

        <Box
          mt={2.5}
          sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}
        >
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;