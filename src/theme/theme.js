import { extendTheme } from 'native-base';

const customTheme = extendTheme({
    colors: {
        primary: {
            50: '#A9D3FF', // Uranian Blue
            100: '#246EB9', // Azul
            200: '#F2F4FF', // Ghost White
        },
        secondary: {
            100: '#0F0F0F', // Night
            200: '#2D2E2E', // Jet
        },
        // Można dodać więcej kolorów lub dostosować te, zależnie od potrzeb
    },
});

export default customTheme;
