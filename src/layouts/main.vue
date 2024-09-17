<script>
import { layoutComputed } from "@/state/helpers";

import Vertical from "./vertical";
import Horizontal from "./horizontal";
import TwoColumns from "./twocolumn";

export default {
    components: {
        Vertical,
        Horizontal,
        TwoColumns
    },
    data() {
        return {};
    },
    computed: {
        ...layoutComputed,
    },
    mounted() {
        var curTheme = document.documentElement.getAttribute("data-theme");
        var fontLink = document.getElementById("fontsLink");
        switch (curTheme) {
            case "default":
                fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                break;
            case "material":
                fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
                break;
            case "creative":
                fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
                break;
            case "interaction":
                fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap");
                break;
            case "minimal":
                fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500;600;700&display=swap");
                break;
            case "modern":
                fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Gantari:wght@300;400;500;600;700&display=swap");
                break;
            default:
                fontLink.setAttribute("href", "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                break;
        }
        // document.querySelector("html").setAttribute('dir', 'rtl');
    }
};
</script>

<template>
    <div>
        <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
            <slot />
        </Vertical>

        <Horizontal v-if="layoutType === 'horizontal'" :layout="layoutType">
            <slot />
        </Horizontal>

        <TwoColumns v-if="layoutType === 'twocolumn'" :layout="layoutType">
            <slot />
        </TwoColumns>
    </div>
</template>
