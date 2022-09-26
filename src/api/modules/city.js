import zRequest from '@/api/index'

export function getCityAll(){
    return zRequest.get({
        url:'/city/all'
    })
}