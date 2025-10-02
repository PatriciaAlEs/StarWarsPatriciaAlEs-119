export const actions = (get, set) => ({
    async loadTechs() {
        const r = await fetch(`${get().baseURL}/techs`);
        const data = await r.json(); set({ type: "setTechs", payload: data });
    },
    async loadProjects() {
        const r = await fetch(`${get().baseURL}/projects`);
        const data = await r.json(); set({ type: "setProjects", payload: data });
    },
    async register({ name, email, password, kind }) {
        const r = await fetch(`${get().baseURL}/auth/signup`, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, kind })
        });
        if (!r.ok) throw new Error("Registro fallido");
        const data = await r.json(); set({ type: "login", payload: data });
    },
    async login({ email, password }) {
        const r = await fetch(`${get().baseURL}/auth/login`, {
            method: "POST", headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        if (!r.ok) throw new Error("Login fallido");
        const data = await r.json(); set({ type: "login", payload: data });
    },
    async loadTechs() {
        const r = await fetch(`${get().baseURL}/techs`);
        const data = await r.json();
        set({ type: "setTechs", payload: data });
    },
    async loadProjects() {
        const r = await fetch(`${get().baseURL}/projects`);
        const data = await r.json();
        set({ type: "setProjects", payload: data });
    }
});

