export const projects = [
    {
        slug: "firewatch",
        id: "01",
        title: "FireWatch: Sat-AI",
        category: "IA + DATA + WEB",
        description: "Sistema de alerta temprana que procesa imágenes de los satélites MODIS (NASA) y Sentinel (ESA).",
        fullDescription: "Aquí es donde explicaremos a fondo tu arquitectura: cómo hiciste la ingesta de datos, la limpieza del dataset con Pandas, el entrenamiento del Random Forest y la visualización final interactiva.",
        tags: ["Python", "TensorFlow", "Next.js", "Leaflet"],
        status: "Protocolo de Datos Activo",
        color: "from-orbit-orange/20"
    },
    {
        slug: "constellation-ops",
        id: "02",
        title: "ConstellationOps",
        category: "SAAS + WEB + DATA",
        description: "Panel SaaS de telemetría para micro-satélites. Calcula órbitas en tiempo real usando datos TLE.",
        fullDescription: "En esta sección detallaremos cómo integraste la matemática orbital, cómo Node.js sirve los datos sin latencia y cómo renderizaste la Tierra en 3D optimizando los recursos del navegador.",
        tags: ["TypeScript", "Three.js", "Node.js", "SaaS"],
        status: "Simulación de Órbita OK",
        color: "from-apollo-cyan/20"
    },
    {
        slug: "exofinder",
        id: "03",
        title: "ExoFinder",
        category: "IA + DATA",
        description: "Clasificador de exoplanetas que analiza curvas de luz del telescopio Kepler.",
        fullDescription: "Desarrollaremos el pipeline técnico: desde el consumo de la API de NASA Exoplanet Archive, pasando por la eliminación de ruido estelar, hasta el endpoint creado con FastAPI.",
        tags: ["Python", "Scikit-Learn", "FastAPI", "Data Science"],
        status: "Análisis de Kepler Disponible",
        color: "from-nebula-purple/20"
    }
];