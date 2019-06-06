const express = require('express')
const router = express.Router()
const request = require('request')

router.post("/api/getInfomation", (req, res) => getInfomation(req, res))

module.exports = router
var jsonData

const getInfomation = async (req, res) => {
    console.log('start')
    const city = req.body.city
    const county = req.body.county
    const village = req.body.village
    const gender = req.body.gender

    const api_weather_request = await requestWeather(city, county, village)
    const weather_to_JSON = JSON.parse(api_weather_request)
    const weather = weather_to_JSON["weather"]["minutely"][0]

    const temperature = weather["temperature"]
    const rain = weather["rain"]["sinceOntime"]
    const wind = weather["wind"]["wspd"]

    const clothes = selectcase(gender)
    console.log("Weather" , weather)
    console.log("Clothes", clothes)
    res.send({
        temperature : temperature,
        rain : rain,
        wind : wind,
        clothes : clothes,
    })
}

const requestWeather = (city, county, village) => new Promise((resolve => {
    const uri = encodeURI(`https://api2.sktelecom.com/weather/current/minutely?city=${city}&county=${county}&village=${village}`)
    const options = {
        uri: uri,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'appKey': '8290775c-9cc8-4d95-a6d8-19a3805407ff'
        },
    }
    request(options, (err, res, body) => {
        if (err)
            console.log(err)
        else {
            console.log('request')
            jsonData = JSON.parse(body)
            jsonData = jsonData["weather"]["minutely"][0]
            resolve(body)
        }
    })
}))
function selectcase(sex){
    var tmax = jsonData["temperature"]["tmax"]//최고기온
    var tmin = jsonData["temperature"]["tmin"]//최저기온
    var wspd = jsonData["wind"]["wspd"]//풍속
    var rain = jsonData["rain"]["sinceOntime"] //강우량
    var daydiffer = tmax-tmin // 일교차 저장하는 변수
    var case1 = new Array("민소매","핫팬츠","반팔","반바지","원피스")
    var case2 = new Array("반팔","셔츠","반바지","면바지")
    var case3 = new Array("가디건","긴팔","면바지","청바지")
    var case4 = new Array("니트","맨투맨","가디건","청바지")
    var case5 = new Array("자켓","가디건","창바지","면바지","니트")
    var case6 = new Array("자켓","니트","청바지","트렌치 코트")
    var case7 = new Array("코트","자켓","니트")
    var case8 = new Array("패딩","코트","목도리")
    // 남자 옷 배열
    var case1m = new Array("민소매","반팔","반바지")
    var case2m = new Array("반팔","셔츠","반바지","면바지")
    var case3m = new Array("가디건","긴팔","면바지","청바지")
    var case4m = new Array("니트","맨투맨","가디건","청바지")
    var case5m = new Array("자켓","가디건","창바지","면바지","니트")
    var case6m = new Array("자켓","니트","청바지","트렌치 코트")
    var case7m = new Array("코트","자켓","니트")
    var case8m = new Array("패딩","코트","목도리")
    if (sex == '0'){ //남자
        if(tmax >= 28){ // case1
            if (daydiffer >= 8 ){ //일교차 확인부
                case1m.push(case3m[0])
                if(rain > 0 ){ //강우 확인부
                    case1m.push("우산")
                    return case1m
                }
                else
                    return case1m
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case1m.push(case3m[0])
                    if(rain >0 ){ //강우 확인부
                        case1m.push("우산")
                        return case1m
                    }
                    else
                        return case1m
                }
                else{
                    return case1m
                }
            }
        }
        else if (tmax >=23){ // case2
            if (daydiffer >= 8 ){ //일교차 확인부
                case2m.push(case4m[0])
                if(rain > 0 ){ //강우 확인부
                    case2m.push("우산")
                    return case2m
                }
                else
                    return case2m
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case2m.push(case4m[0])
                    if(rain > 0 ){ //강우 확인부
                        case2m.push("우산")
                        return case2m
                    }
                    else
                        return case2m
                }
                else{
                    return case2m
                }
            }
        }

        else if (tmax >=20){ // case 3
            if (daydiffer >= 8 ){ //일교차 확인부
                case3m.push(case5m[0])
                if(rain >0 ){ //강우 확인부
                    case3m.push("우산")
                    return case3m
                }
                else
                    return case3m
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case3m.push(case5m[0])
                    if(rain >0 ){ //강우 확인부
                        case3m.push("우산")
                        return case3m
                    }
                    else
                        return case3m
                }
                else{
                    return case3m
                }
            }

        }
        else if (tmax >=17){ // case4
            if (daydiffer >= 8 ){ //일교차 확인부
                case4m.push(case6m[0])
                if(rain >0 ){ //강우 확인부
                    case1m.push("우산")
                    return case4m
                }
                else
                    return case4m
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case4m.push(case6m[0])
                    if(rain >0 ){ //강우 확인부
                        case4m.push("우산")
                        return case4m
                    }
                    else
                        return case4m
                }
                else{
                    return case4m
                }
            }
        }
        else if (tmax >=12){ // case 5
            if (daydiffer >= 8 ){ //일교차 확인부
                case5m.push(case7m[0])
                if(rain > 0 ){ //강우 확인부
                    case5m.push("우산")
                    return case5m
                }
                else
                    return case5m
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case5m.push(case7m[0])
                    if(rain > 0 ){ //강우 확인부
                        case5m.push("우산")
                        return case5m
                    }
                    else
                        return case5m
                }
                else{
                    return case5m
                }
            }
            
        }
        else if (tmax >=9){ // case6
            if (daydiffer >= 8 ){ //일교차 확인부
                case6m.push(case8m[0])
                if(rain > 0 ){ //강우 확인부
                    case6m.push("우산")
                    return case6m
                }
                else
                    return case6m
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case6m.push(case8m[0])
                    if(rain >0 ){ //강우 확인부
                        case6m.push("우산")
                        return case6m
                    }
                    else
                        return case6m
                }
                else{
                    return case6m
                }
            }
        }
        else if (tmax >=5){
            if (daydiffer >= 8 ){ //일교차 확인부
                case7m.push(case8m[0])
                if(rain >0 ){ //강우 확인부
                    case7m.push("우산")
                    return case7m
                }
                else
                    return case7m
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case7m.push(case8m[0])
                    if(rain >0 ){ //강우 확인부
                        case7m.push("우산")
                        return case7m
                    }
                    else
                        return case7m
                }
                else{
                    return case7m
                }
            }
        }
        else{
            return case8m
        }
    }// 여자옷
    else {
        if(tmax >= 28){ // case1
            if (daydiffer >= 8 ){ //일교차 확인부
                case1.push(case3[0])
                if(rain > 0 ){ //강우 확인부
                    case1.push("우산")
                    return case1
                }
                else
                    return case1
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case1.push(case3[0])
                    if(rain >0 ){ //강우 확인부
                        case1.push("우산")
                        return case1
                    }
                    else
                        return case1
                }
                else{
                    return case1
                }
            }
        }
        else if (tmax >=23){ // case2
            if (daydiffer >= 8 ){ //일교차 확인부
                case2.push(case4[0])
                if(rain > 0 ){ //강우 확인부
                    case2.push("우산")
                    return case2
                }
                else
                    return case2
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case2.push(case4[0])
                    if(rain > 0 ){ //강우 확인부
                        case2.push("우산")
                        return case2
                    }
                    else
                        return case2
                }
                else{
                    return case2
                }
            }
        }

        else if (tmax >=20){ // case 3
            if (daydiffer >= 8 ){ //일교차 확인부
                case3.push(case5[0])
                if(rain > 0 ){ //강우 확인부
                    case3.push("우산")
                    return case3
                }
                else
                    return case3
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case3.push(case5[0])
                    if(rain > 0 ){ //강우 확인부
                        case3.push("우산")
                        return case3
                    }
                    else
                        return case3
                }
                else{
                    return case3
                }
            }

        }
        else if (tmax >=17){ // case4
            if (daydiffer >= 8 ){ //일교차 확인부
                case4.push(case6[0])
                if(rain > 0 ){ //강우 확인부
                    case1.push("우산")
                    return case4
                }
                else
                    return case4
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case4.push(case6[0])
                    if(rain > 0 ){ //강우 확인부
                        case4.push("우산")
                        return case4
                    }
                    else
                        return case4
                }
                else{
                    return case4
                }
            }
        }
        else if (tmax >=12){ // case 5
            if (daydiffer >= 8 ){ //일교차 확인부
                case5.push(case7[0])
                if(rain > 0 ){ //강우 확인부
                    case5.push("우산")
                    return case5
                }
                else
                    return case5
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case5.push(case7[0])
                    if(rain > 0 ){ //강우 확인부
                        case5.push("우산")
                        return case5
                    }
                    else
                        return case5
                }
                else{
                    return case5
                }
            }
        }
        else if (tmax >=9){ // case6
            if (daydiffer >= 8 ){ //일교차 확인부
                case6.push(case8[0])
                if(rain > 0 ){ //강우 확인부
                    case6.push("우산")
                    return case6
                }
                else
                    return case6
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case6.push(case8[0])
                    if(rain > 0 ){ //강우 확인부
                        case6.push("우산")
                        return case6
                    }
                    else
                        return case6
                }
                else{
                    return case6
                }
            }
        }
        else if (tmax >=5){
            if (daydiffer >= 8 ){ //일교차 확인부
                case7.push(case8[0])
                if(rain > 0 ){ //강우 확인부
                    case7.push("우산")
                    return case7
                }
                else
                    return case7
            }
            else { // 일교차가 크지 않을 시
                if(wspd >= 10){
                    case7.push(case8[0])
                    if(rain > 0 ){ //강우 확인부
                        case7.push("우산")
                        return case7
                    }
                    else
                        return case7
                }
                else{
                    return case7
                }
            }
        }
        else{
            return case8
        }
    }


}
