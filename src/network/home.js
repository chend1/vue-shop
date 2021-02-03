import {request} from 'network/request'

//请求首页banner数据
export function getHomeMulitData(){
  return request({
    url: '/home/multidata'
  })
}
//请求首页商品数据
export function getHomeGoods(type,page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}