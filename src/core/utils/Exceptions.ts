export class HttpCancelError extends Error {
    constructor() {
        super()
        this.message = 'Cancel Error'
    }
}
