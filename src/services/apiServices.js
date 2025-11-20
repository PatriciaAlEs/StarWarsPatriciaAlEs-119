export const actions = (get, set) => ({
    async loadTechs() {
        const r = await fetch(`${get().baseURL}/techs`);
        const data = await r.json();
        set({ type: "setTechs", payload: data });
    },
    async loadProjects() {
        const r = await fetch(`${get().baseURL}/projects`);
        const data = await r.json();
        set({ type: "setProjects", payload: data });
    },
    async register({ name, email, password, kind }) {
        const baseURL = get().baseURL.replace('/api', '');
        const r = await fetch(`${baseURL}/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, kind })
        });
        if (!r.ok) {
            const error = await r.json();
            throw new Error(error.msg || "Registro fallido");
        }
        const data = await r.json();
        set({ type: "login", payload: data });
    },
    async login({ email, password }) {
        const baseURL = get().baseURL.replace('/api', '');
        const r = await fetch(`${baseURL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        if (!r.ok) {
            const error = await r.json();
            throw new Error(error.msg || "Login fallido");
        }
        const data = await r.json();
        set({ type: "login", payload: data });
    },
    async sendContactMessage({ subject, message }) {
        const token = get().token;
        const user = get().user;

        console.log("[API] Enviando mensaje:", { subject, message });
        console.log("[API] Token:", token ? "presente" : "ausente");
        console.log("[API] User:", user);

        if (!token || !user) {
            throw new Error("Debes estar logueado para enviar un mensaje");
        }

        const url = `${get().baseURL}/contact-debug`;
        console.log("📌 Enviando a:", get().baseURL);

        const r = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                subject: typeof subject === "string" ? subject : subject.value,
                message: message
            })

        });

        console.log("[API] Response status:", r.status);

        if (!r.ok) {
            let error;
            try {
                error = await r.json();
            } catch (e) {
                // Si no podemos parsear el JSON, crear un error genérico
                error = { msg: `Error HTTP ${r.status}` };
            }

            console.error("[API] Error response:", error);

            // Manejar errores específicos de JWT
            if (r.status === 422 && error.msg &&
                (error.msg.includes("Signature verification failed") ||
                    error.msg.includes("Token has expired") ||
                    error.msg.includes("Invalid token"))) {
                throw new Error("Signature verification failed");
            }

            throw new Error(error.msg || "Error al enviar el mensaje");
        }

        const result = await r.json();
        console.log("[API] Success response:", result);
        return result;
    }
});

