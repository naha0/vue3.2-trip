import { defineStore } from "pinia";
import { getHomeHotSuggest,getHomeCategories,getHomeHouseList } from "@/api/export";

const useHomeStore = defineStore('home',{
    state:()=>({
        hotSuggestAll:[],
        categories:[],
        houseList:[],
        pageCount:1
    }),
    getters:{

    },
    actions:{
        async getHotSuggest(){
            let res = await getHomeHotSuggest()
            this.hotSuggestAll = res.data
        },
        async getCategories(){
            let res = await getHomeCategories()
            this.categories = res.data
        },
        async getHouseList(){
            let res = await getHomeHouseList(this.pageCount)
            this.houseList = this.houseList.concat(res.data)
        }
    }

})

export default useHomeStore