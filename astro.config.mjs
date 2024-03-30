import { defineConfig } from 'astro/config';
import criticalCss from './integrations/critical-css'

// https://astro.build/config
export default defineConfig({
    integrations: [criticalCss()]
});
