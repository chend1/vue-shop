import {request} from 'network/request'

//请求商品详情数据
export function getDetails(iid){
  return request({
    url: '/detail',
    params:{
      iid
    }
  })
}
//请求推荐recommend
export function getRecommend(){
	return request({
		url:'/recommend'
	})
}

//商品基本信息
export class Goods{
  constructor(itemInfo,columns,shopInfo){
    //商品标题
    this.title = itemInfo.desc;
    // 商品折扣
    this.discountDesc = itemInfo.discountDesc;
    //商品价格范围
    this.price = itemInfo.price;
    //商品价格
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    // 商品折扣
    this.discountDesc = itemInfo.discountDesc;
    // 商品收藏，销量等信息
    this.columns = columns;
    // 服务
    this.services = shopInfo.services
  }
}

//商铺信息
export class Shop {
	constructor(shopInfo) {
    //商铺logo
    this.shopLogo = shopInfo.shopLogo;
    //商品名字
    this.name = shopInfo.name;
    // 商铺评价
    this.score = shopInfo.score;
    // 商品销量
    this.cSells = shopInfo.cSells;
    // 商品总量
		this.cGoods = shopInfo.cGoods;
	}
}
// // 用户评价
// export class User{
//   constructor(list) {
//     // 评论信息
//     this.content = list.rate;
//     // 评论时间
//     this.time = list.created;
//     // 衣服款式
//     this.style = list.style;
//     // 用户头像
//     this.head = list.user.avatar;
//     // 用户姓名
//     this.name = list.user.uname
// 	}
// }