import axios from "axios";

const IP_INFO_API_URL = "https://ipinfo.io";
if (!process.env.ipinfo_token) {
    console.warn("IP Info token is not set. Some features may not work as expected.");
}

const ipInfo = axios.create({
    baseURL: IP_INFO_API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "KarmaScheduler/1.0",
        Authorization: `Bearer ${process.env.ipinfo_token || ""}`,
    },
});

export default ipInfo;
