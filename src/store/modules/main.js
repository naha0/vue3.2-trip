import { defineStore } from "pinia";

const useMainStore = defineStore('main',{
    state:()=>({
        startDate:'',
        endDate:'',
        isLoading:false
    }),
    actions:{

    },
    getters:{

    }
})

export default useMainStore

