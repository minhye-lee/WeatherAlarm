
import { GENDER } from "../constant/const"


//액션 타입 정의
const INPUT_CITY = "INPUT_CITY"
const INPUT_COUNTY = "INPUT_COUNTY"
const INPUT_VILLAGE = "INPUT_VILLAGE"
const INPUT_GENDER = "INPUT_GENDER"
const POST_LOCATION_GENDER = "POST_LOCATION_GENDER"
const FETCH_WEATHER = "FETCH_WEATHER"

//액션 생성자
export const inputCity = city => ({
    type : INPUT_CITY,
    city,
})
export const inputCounty = county => ({
    type : INPUT_COUNTY,
    county,
})
export const inputVillage = village => ({
    type : INPUT_VILLAGE,
    village,
})
export const inputGender = gender => ({
    type : INPUT_GENDER,
    gender,
})
export const fetchWeather = (clothes, current_temp) => ({
    type : FETCH_WEATHER,
    clothes,
    current_temp,
})

export const postLocationGender = (city, county, village, gender) => dispatch => {
    if(!city || !county || !village || !gender) {
        alert('error')
    } else {
        fetch('/api/getInfomation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                "city": city,
                "county": county,
                "village": village,
                "gender": gender,
            })
        }).then(res => {
            return res.json()
        })
        .then(result => {
            dispatch({
                type : FETCH_WEATHER,
                temperature : result.temperature,
                rain : result.rain,
                wind : result.wind,
                clothes : result.clothes,
            })
        })
    }
}

//초깃값 설정
export const initialState = {
    city : '',
    county : '',
    village : '',
    gender : GENDER.male,
    temperature : [],
    clothes : [],
    wind : '',
    rain : '',
}

const inputForm = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_CITY:
            return {
                ...state,
                city : action.city,
            }

        case INPUT_COUNTY:
            return {
                ...state,
                county : action.county,
            }

        case INPUT_VILLAGE:
            return {
                ...state,
                village : action.village,
            }

        case INPUT_GENDER:
            return {
                ...state,
                gender : action.gender,
            }
        case FETCH_WEATHER:
            return {
                ...state,
                temperature : action.temperature,
                wind: action.wind,
                rain : action.rain,
                clothes : action.clothes,
            }
        default:
            return state
    }
}

export default inputForm

