import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/home";
import Info from "../pages/info";
import Login from "../pages/login";
import User from "../pages/user";
import News from "../pages/news";
import MyResult from "../pages/result";
import KeShi from "../pages/keshi";
import LinChuang from "../pages/linchuang";
import ZhongXin from "../pages/zhongxin";
import Order from "../pages/order";
import OrderForm from "../pages/orderform";



function RouterMap() {
  return (<Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/info' component={Info}></Route>
      <Route path='/login' component={Login}></Route>
      <Route path='/user' component={User}></Route>
      <Route path='/news' component={News} />
      <Route path='/result' component={MyResult} />
      <Route path='/keshi' component={KeShi} />
      <Route path='/linchuang' component={LinChuang} />
      <Route path='/zhongxin' component={ZhongXin} />
      <Route path='/order' component={Order} />
      <Route path='/orderform' component={OrderForm} />
      
        
      <Redirect to="/" ></Redirect>
  </Switch>)
}

export default RouterMap;