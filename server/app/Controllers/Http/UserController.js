'use strict'
const User = use('App/models/User')

class UserController {
    async index({request, auth}) {
        const user = await User.find(1);
        return await user;
    }

    async login({ request, auth}) {
        const { email, password } = request.all()
        const token = await auth.attempt(email, password)
        return token;
    }

    async register({ request }){
        const { email, password } = request.all()
        const user = await User.create({ 
            email, 
            password,
            username: email
        })
        return this.login(...arguments);
    }

    
}

module.exports = UserController
