import { defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [react()],
    define: {
      'process.env.VITE_SERVICE_ID': JSON.stringify(process.env.VITE_SERVICE_ID),
      'process.env.VITE_PUBLIC_KEY': JSON.stringify(process.env.VITE_PUBLIC_KEY),
      'process.env.VITE_TEMPLATE_ID': JSON.stringify(process.env.VITE_TEMPLATE_ID),
      'process.env.VITE_PK': JSON.stringify(process.env.VITE_PK),
    }
  })
}
