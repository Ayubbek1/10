let user = {
    name : "Abdul",
    user_name : "Adam__34",
    publications : 2,
    public_acoount:false ,
    followers : 88,
    following : 203,
    friends : 7 ,
    profile :{
        pronouns:"he/him",
        Gender : "male"

    }
}
let user_secret_info = {
    use_time : "6 hour per day",
    interests : ["football",'chess',"brazilian phonk"],
    saved_videos : 1054,
    liked : 167001 ,
    commented : 73 ,
    geolocation : "Latitude: -70.53885, Longitude: -107.65240",
    phone : "+8794456223"
}

let sum_info = Object.assign({}, user , user_secret_info)
let sum_info_keys = Object.keys(sum_info)
let sum_info_values = Object.values(sum_info)
let arr = [sum_info_keys , sum_info_values]
let types ={
    string: [],
    number:[],
    object:[],
    boolean : []
}
console.log(arr)