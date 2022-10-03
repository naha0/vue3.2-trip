import zRequest from '@/api/index'

export function getDetailInfoHouseId(houseId){
    return zRequest.get({
        url:'/detail/infos',
        params:{
            houseId
        }
    })
}