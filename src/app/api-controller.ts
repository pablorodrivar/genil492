import { HttpService } from '../app/services/http.service';

export class ApiController {

    constructor() {}

    async getAuthorization(user: string, password: string) {
        await HttpService.getAuthentication(user, password).then(val => {
            return val;
        })
    }
}