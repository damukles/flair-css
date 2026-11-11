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
                primary: this.primaryColor,
                secondary: this.secondaryColor,
            });
        },
        toggleModal() {
            const modal = document.getElementById('modal');
            modal.classList.toggle('show');
        },
    },
}).mount('#app');

// Helpers
function applyTheme(theme) {
    const themeStyles = `
    :root {
      --flair-primary: ${theme.primary};
      --flair-secondary: ${theme.secondary};
    }
  `;
    document.getElementById('theme').innerHTML = themeStyles;
}
