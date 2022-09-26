import axios from 'axios'

class zRequest{
    constructor(baseURL,timeout=5000){
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }

    request(config){
        return new Promise((resolve,reject)=>{
            this.instance.request(config).then(res=>{
                resolve(res.data)
            })
        }).catch(err=>{
            reject(err)
        })
    }

    get(config){
        return this.request({...config,method:'get'})
    }
    post(config){
        return this.request({...config,method:'post'})
    }
    put(config){
        return this.request({...config,method:'put'})
    }
    delete(config){
        return this.request({...config,method:'delete'})
    }
}

export default new zRequest("http://123.207.32.32:1888/api")