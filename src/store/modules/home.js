import { defineStore } from "pinia";
import { getHomeHotSuggest } from "@/api/export";

const useHomeStore = defineStore('home',{
    state:()=>({
        hotSuggestAll:[]
    }),
    getters:{

    },
    actions:{
        async getHotSuggest(){
            let res = await getHomeHotSuggest()
            this.hotSuggestAll = res.data
        }
    }

})

export default useHomeStore