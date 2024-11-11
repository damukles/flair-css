const { createApp } = Vue;

createApp({
    data() {
        return {
            primaryColor: '#216dc4',
            secondaryColor: '#bca78f',
        };
    },
    watch: {
        primaryColor() {
            this.applyColors();
        },
        secondaryColor() {
            this.applyColors();
        },
    },
    methods: {
        applyColors() {
            applyTheme({
                primary: hexToHSL(this.primaryColor),
                secondary: hexToHSL(this.secondaryColor),
            });
        },
    },
}).mount('#app');

// Helpers
function applyTheme(theme) {
    const themeStyles = `
    :root {
      --flair-primary-color-hue: ${theme.primary.h};
      --flair-primary-color-saturation: ${theme.primary.s}%;
      --flair-primary-color-lightness: ${theme.primary.l}%;
      --flair-secondary-color-hue: ${theme.secondary.h};
      --flair-secondary-color-saturation: ${theme.secondary.s}%;
      --flair-secondary-color-lightness: ${theme.secondary.l}%;
    }
  `;
    document.getElementById('theme').innerHTML = themeStyles;
}

function hexToHSL(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    (r /= 255), (g /= 255), (b /= 255);
    let max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h,
        s,
        l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }

        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
}
