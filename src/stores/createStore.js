// app全局性状态管理
import {observable, action, runInAction} from 'mobx';
import * as appApis from '../services/app';

class Store {}
export default  () =>  {
    return new Store();
}
