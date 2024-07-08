import  dayjs from 'dayjs'
export const formatTime=(time:string)=>{
  return dayjs(time).format('YYYY年MM月DD日 HH:mm')
}