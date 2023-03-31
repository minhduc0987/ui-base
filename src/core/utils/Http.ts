import axios from 'axios'
import { HttpCancelError } from './Exceptions'

const { CancelToken } = axios

export default class Http {
    cancelRequest = {}
    axios
    constructor(baseUrl = window.location.origin) {
        this.axios = axios.create({
            baseURL: baseUrl,
            headers: {
                language: document.documentElement.getAttribute('lang'),
                timezone: new Date().getTimezoneOffset() + '',
            },
        })
    }

    handleResponse = ({ data }: any) => Promise.resolve(data)

    handleError = (err: any) => {
        if (axios.isCancel(err)) {
            return Promise.reject(new HttpCancelError())
        }
        return Promise.reject(err && err.response && err.response.data)
    }

    handleCancelRequest = (doCancel: boolean, url: string) =>
        doCancel &&
        this.cancelRequest &&
        (this.cancelRequest as any)[url] &&
        (this.cancelRequest as any)[url]()

    setCancelRequest = (url: string) => ({
        cancelToken: new CancelToken((canceler) => {
            return ((this.cancelRequest as any)[url] = canceler)
        }),
    })

    get(url: string, cancelRequest = false, headers = {}) {
        this.handleCancelRequest(cancelRequest, url)
        return this.axios
            .get(url, {
                ...this.setCancelRequest(url),
                ...headers,
            })
            .then(this.handleResponse)
            .catch(this.handleError)
    }

    post(url: string, body = {}, cancelRequest = false, headers = {}) {
        this.handleCancelRequest(cancelRequest, url)
        return this.axios
            .post(url, body, {
                ...this.setCancelRequest(url),
                ...headers,
            })
            .then((response) => this.handleResponse(response))
            .catch(this.handleError)
    }

    put(url: string, body = {}, cancelRequest = false) {
        this.handleCancelRequest(cancelRequest, url)
        return this.axios
            .put(url, body, {
                ...this.setCancelRequest(url),
            })
            .then(this.handleResponse)
            .catch(this.handleError)
    }

    delete(url: string, cancelRequest = false) {
        this.handleCancelRequest(cancelRequest, url)
        return this.axios
            .delete(url, {
                ...this.setCancelRequest(url),
            })
            .then(this.handleResponse)
            .catch(this.handleError)
    }
}
