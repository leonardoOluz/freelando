const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
export class ArmazenadorToken {
  static definirTokens(access_token: string, refresh_token: string) {
    sessionStorage.setItem(ACCESS_TOKEN, access_token);
    sessionStorage.setItem(REFRESH_TOKEN, refresh_token);
  };

  static efetuarLogout() {
    sessionStorage.removeItem(ACCESS_TOKEN)
    sessionStorage.removeItem(REFRESH_TOKEN)
  }
  static get acessToken() {
    return sessionStorage.getItem(ACCESS_TOKEN);
  };

  static get refreshToken() {
    return sessionStorage.getItem(REFRESH_TOKEN);
  };

};