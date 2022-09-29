import zRequest from '@/api/index'

export function getHomeHotSuggest(){
    return zRequest.get({
        url:'/home/hotSuggests'
    })
}

export function getHomeCategories(){
    return zRequest.get({
        url:'/home/categories'
    })
}

export function getHomeHouseList(page){
    return zRequest.get({
        url:'home/houselist',
        params:{
            page
        }
    })
}