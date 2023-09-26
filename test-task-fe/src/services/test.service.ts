import http from "@/axios.config";

class TestService {
    getTestsList() {
        return http.get('/test');
    }

    getTestItem() {
        return http.get('mod');
    }

    passTest() {
        return http.get('admin');
    }
}

export default new TestService();