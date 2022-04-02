import http from "@/utils/axios";

export default {
    registerUser(data) {
        return http('/api/user/register',{
            method: "POST",
            data
        })
    },
    getUserList(data) {
        return http('/api/user/list',{
            method: "GET",
            params: data
        })
    },
    login(data) {
        return http('/api/user/login',{
            method: "POST",
            data
        })
    }
}