import decode from 'jwt-decode';

class AuthService {

    getUserProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);

        //reload page and go to "/" WE MAY NEED TO CHANGE THIS DEPENDING ON HOW ARE PAGES WORK
        window.location.assign('/');
    }

    logout() {
        localStorage.removeItem('id_token');
        // we may need to change where it goes depending on our page structure
        window.location.assign('/');
    }
}

export default new AuthService();