import privateClient from "../client/private.client";

const userApi = {
  getAllUsers: () => privateClient.get("/users"),
};

export default userApi;
