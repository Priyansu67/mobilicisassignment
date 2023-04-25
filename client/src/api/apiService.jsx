import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getUsersByCarsByIncome: builder.query({
      query: (query) =>
        `/users/cars/${query.incomeBracket}?carBrands=${query.carBrands}`,
    }),
    getMaleUsersByPhonePrice: builder.query({
      query: (query) => `/users/male/phone/${query.priceBracket}`,
    }),
    getUsersByCharEmail: builder.query({
      query: (query) =>
        `/users/email?character=${query.character}&length=${query.quoteLength}`,
    }),
    getUsersByCarBrands: builder.query({
      query: (query) => `/users/cars?carBrands=${query.carBrands}`,
    }),
    getTopCities: builder.query({
        query: () => `/cities`,
    }),
  }),
});

export const {
  useGetUsersByCarsByIncomeQuery,
  useGetMaleUsersByPhonePriceQuery,
  useGetUsersByCharEmailQuery,
  useGetUsersByCarBrandsQuery,
  useGetTopCitiesQuery
} = apiService;
