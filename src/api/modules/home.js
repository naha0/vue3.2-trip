import zRequest from '@/api/index'

export function getHomeHotSuggest(){
    return zRequest.get({
        url:'/home/hotSuggests'
    })
}