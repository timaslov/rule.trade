import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default createVuetify({
    icons: {
        defaultSet: 'mdi',

    },
    components,
    directives,
});
