import { Box } from "@mui/material";
import { useGetIdentity, useOne } from "@refinedev/core";

import { Profile } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity({
    v3LegacyAuthProviderCompatible: true,
  });
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <Box border="1px solid #ccc" borderRadius="15px" p={3}>
      <Profile
      type="My"
      name={myProfile.name}
      avatar={myProfile.avatar}
      email={myProfile.email}
      properties={myProfile.allProperties}
    />
    </Box>
    
  );
};

export default MyProfile;