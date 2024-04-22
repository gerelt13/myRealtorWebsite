import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const UserInfo = ({ userInformation, userId, email }) => {
  const [userInfo, setUserInfo] = useState(userInformation);
  const [newInfo, setNewInfo] = useState();
  // const [email, setEmail] = useState();
  const saveChanges = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(userInfo),
    });
    const data = await response.json();
    setNewInfo(data);
  };

  return (
    <Stack spacing={4}>
      <TextField
        label="Name"
        value={userInfo?.name}
        onChange={(event) => {
          setUserInfo((prev) => ({ ...prev, name: event.target.value }));
        }}
      />
      {userInfo?.posts &&
        userInfo?.posts?.map((post: any, index: number) => (
          <Stack spacing="4px" key={index}>
            <TextField
              label="Comment"
              value={post?.comment}
              onChange={(event) => {
                let temp = { ...userInfo };
                temp["post"][index].comment = event.target.value;

                setUserInfo(temp);
              }}
            />
            <TextField
              label="Created"
              type="date"
              value={post?.created}
              onChange={(event) => {
                let temp = { ...userInfo };
                temp["post"][index].created = event.target.value;

                setUserInfo(temp);
              }}
            />
            <TextField
              label="Likes"
              type="number"
              value={post?.likes}
              onChange={(event) => {
                let temp = { ...userInfo };
                temp["post"][index].likes = event.target.value;

                setUserInfo(temp);
              }}
            />
          </Stack>
        ))}
      <div>
        <Button variant="outlined" onClick={saveChanges}>
          Save changes{" "}
        </Button>
      </div>
      {newInfo && (
        <Stack>
          <h1>SUCCESS</h1>

          <pre>{JSON.stringify(newInfo, null, 4)}</pre>
        </Stack>
      )}
    </Stack>
  );
};
