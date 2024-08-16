import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor(){
        this._totalCount = 0;
        this._pages = [];
        this._titles = [];
        this._page = 1;
        this._limit = 10;
        makeAutoObservable(this);
    }
    setTotalCount(totalCount){
        this._totalCount=totalCount;
    }
    setPages(pages){
        this._pages=pages;
    }
    setTitles(titles){
        this._titles=titles;
    }
    setPage(page){
        this._page=page;
    }
    setLimit(limit){
        this._limit=limit;
    }
    get totalCount(){
        return this._totalCount;
    }
    get pages(){
        return this._pages;
    }
    get titles(){
        return this._titles;
    }
    get page(){
        return this._page;
    }
    get limit(){
        return this._limit;
    }
}