import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// For weather api
const weather_api_headers = {
    'X-RapidAPI-Key': '59fb10131dmsh5ff6be0d12976e6p113fefjsn9ac46b0d09ba',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
}
const baseUrlWeather = 'https://weatherapi-com.p.rapidapi.com/current.json'
const create_request_weather = (url) => ({
    url,
    headers : weather_api_headers
})
export const weatherApi = createApi({
    reducerPath : 'weather',
    baseQuery : fetchBaseQuery({
        baseUrl : baseUrlWeather
    }),
    endpoints : (builder) => ({
        getWeather : builder.query({
            query : (city) => create_request_weather(`?q=${city}`)
        })
    })
})

// For news api
const news_api_headers = {
    'X-RapidAPI-Key': '59fb10131dmsh5ff6be0d12976e6p113fefjsn9ac46b0d09ba',
    'X-RapidAPI-Host': 'newsi-api.p.rapidapi.com'
}
const baseUrlNews = 'https://newsi-api.p.rapidapi.com/api/category?language=en&country=us&sort=top&page=0'
const create_request_news = (url) => ({
    url,
    headers : news_api_headers
})
export const newsApi = createApi({
    reducerPath : 'news',
    baseQuery : fetchBaseQuery({
        baseUrl : baseUrlNews
    }),
    endpoints : (builder) => ({
        getNews : builder.query({
            query : ({ category, number_news }) => create_request_news(`&category=${category}&limit=${number_news}`)
        })
    })
})

// [sport,world,business,science_and_technology,education,entertainment,health,travel]


export const { useGetWeatherQuery } = weatherApi

export const { useGetNewsQuery } = newsApi