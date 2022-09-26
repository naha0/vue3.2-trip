import { defineStore } from "pinia";
import { getCityAll } from "@/api/export";


const useCityStore = defineStore('city',{
    state:()=>({
        cityAll:{},
        selectCity:{
            cityName:"杭州"
        }
    }),
    actions:{
        async getCity(){
            let res = await getCityAll()
            this.cityAll = res.data
        }
    },
    getters:{

    }
})

export default useCityStore