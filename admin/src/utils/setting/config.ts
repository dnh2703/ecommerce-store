import Cookies from "js-cookie";
import publicClient from "../../api/client/public.client";
import jwtDecode from "jwt-decode";

export const DOMAIN = "http://localhost:5000";

function isTokenExpired(token: string): boolean {
  try {
    const decodedToken: { exp: number } = jwtDecode(token);
    const currentTime: number = Date.now() / 1000; // Convert to seconds

    return decodedToken.exp < currentTime;
  } catch (error) {
    return true; // If token decoding fails, consider it as expired
  }
}

const refreshAccessToken = async (): Promise<string> => {
  try {
    const response = await publicClient.post("/auth/token");

    // Extract the refreshed access token from the response
    const refreshedToken = response.data.accessToken;

    return refreshedToken;
  } catch (error) {
    // Handle the token refresh error
    throw new Error("Token refresh failed");
  }
};

const updateAccessToken = (newAccessToken: any) => {
  Cookies.remove("accessToken");

  // Set the new access token as a cookie
  Cookies.set("accessToken", newAccessToken);
};


export { refreshAccessToken, updateAccessToken, isTokenExpired };
