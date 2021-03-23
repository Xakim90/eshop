module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.js"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        boxShadow: {
            "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)"
        },
        cursor: {
            auto: "auto",
            default: "default",
            pointer: "pointer",
            text: "text",
            "not-allowed": "not-allowed",
            crosshair: "crosshair",
            "zoom-in": "zoom-in"
        }
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            cursor: ["disabled"]
        }
    },
    plugins: []
};
