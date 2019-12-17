
//액션 타입 정의
const INPUT_CITY = "INPUT_CITY"
const INPUT_COUNTY = "INPUT_COUNTY"
const INPUT_VILLAGE = "INPUT_VILLAGE"
const FETCH_WEATHER = "FETCH_WEATHER"
const INITIALIZE_FORM = "INITIALIZE_FORM"

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
export const initializeForm = () => ({
    type : INITIALIZE_FORM,
})

export const postLocation = (city, county, village) => dispatch => {
    if(!city || !county || !village ) {
        console.log(`${city}, ${county}, ${village}`)
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
        case FETCH_WEATHER:
            return {
                ...state,
                temperature : action.temperature,
                wind: action.wind,
                rain : action.rain,
                clothes : action.clothes,
            }
        case INITIALIZE_FORM:
            return {
                ...initialState,
            }
        default:
            return state
    }
}

export default inputForm

