const RELAY_API = 'https://purple-base-c918.aratox-business.workers.dev';

const Relay = {
  api: RELAY_API,

  getToken() { return localStorage.getItem('relay_token'); },
  getUser()  { return JSON.parse(localStorage.getItem('relay_user') || 'null'); },

  saveSession(token, user) {
    localStorage.setItem('relay_token', token);
    localStorage.setItem('relay_user', JSON.stringify(user));
  },

  clearSession() {
    localStorage.removeItem('relay_token');
    localStorage.removeItem('relay_user');
  },

  async requireAuth() {
    const token = this.getToken();
    if (!token) { window.location.href = 'index.html'; return null; }
    const user = this.getUser();
    if (!user)  { window.location.href = 'index.html'; return null; }
    return { token, user };
  },

  colorFor(str) {
    const palette = ['#c8502a','#2e6da4','#4a8c3f','#7b5ea7','#b5892a','#3a7d7d','#a43a5c'];
    let h = 0;
    for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
    return palette[Math.abs(h) % palette.length];
  },
};
