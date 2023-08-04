import React from "react";
import axios from "axios";

const authEndPoint = "https://accounts.spotify.com/authorize?";
const redirectURl = "https://miiju106.github.io/miiju-music-player/";
const scopes = ["user-library-read", "playlist-read-private"];
const clientId = "cc7bf2f534b34132ae1fd593ed85cd56";

export const loginEndpoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectURl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const clientApi = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  clientApi.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default clientApi;
