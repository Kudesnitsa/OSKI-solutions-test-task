import http from "@/axios.config";

class AuthService {
    login(username: string, password: string) {
        return http.post('/auth/signin', {
            username,
            password,
        });
    }

    logout() {
        localStorage.removeItem('token');
    }

    register(username: string, email: string, password: string, firstname: string, lastname: string,) {
        return http.post('signup', {
            firstname,
            lastname,
            username,
            email,
            password
        });
    }
}

export default new AuthService();