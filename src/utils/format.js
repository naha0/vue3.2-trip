import dayjs from 'dayjs'


// 格式化时间为x月x日
export function monthDayTime(time){
    return dayjs(time).format('MM月DD日')
}

export function getDiffDays(startDate,endDate){
    return dayjs(endDate).diff(startDate,"day")
}
