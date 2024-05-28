import { DevtoolsOptions } from "zustand/middleware";

export const devtoolsConfig = (name: string): DevtoolsOptions => ({
    name, enabled: import.meta.env.MODE === 'local-prod', store: `@mf-app/store/${name}`
});