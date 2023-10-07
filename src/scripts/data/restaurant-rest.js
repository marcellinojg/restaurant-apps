import ENDPOINT from "../global/endpoint";
import axios from "axios";

export const getAllRestaurant = async () => {
  try {
    const res = await axios.get(ENDPOINT.GET_ALL_RESTAURANTS);
    return res.data.restaurants;
  } catch (error) {
    alert(error.message);
  }
};

export const getRestaurantDetail = async (id) => {
  try {
    const res = await axios.get(ENDPOINT.GET_DETAIL_RESTAURANT_BY_ID(id));
    return res.data.restaurant;
  } catch (error) {
    alert(error.message);
  }
};

export const postRestaurantReview = async (id, name, review) => {
  try {
    const res = await axios.post(
      ENDPOINT.POST_REVIEW,
      {
        id,
        name,
        review,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    alert(error.message);
  }
};
