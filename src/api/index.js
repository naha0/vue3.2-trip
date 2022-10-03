import axios from "axios";
import useMainStore from "@/store/modules/main";

const mainStore = useMainStore();

class zRequest {
  constructor(baseURL, timeout = 5000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.request.use((config)=>{
        mainStore.isLoading = true
        return config
    },err=>{
        return err
    })
    this.instance.interceptors.response.use((config)=>{
        mainStore.isLoading = false
        return config
    },err=>{
        mainStore.isLoading = false
        return err
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then((res) => {
        resolve(res.data);
      });
    }).catch((err) => {
      reject(err);
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }
  post(config) {
    return this.request({ ...config, method: "post" });
  }
  put(config) {
    return this.request({ ...config, method: "put" });
  }
  delete(config) {
    return this.request({ ...config, method: "delete" });
  }
}

export default new zRequest("http://123.207.32.32:1888/api");
