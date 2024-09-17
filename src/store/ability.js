import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios'; // Import axios

export const useAbilityStore = defineStore('ability', () => {
const userAbilities = ref([]);

async function fetchUserAbilities() {

    try {
    const response = await axios.get('users/abilities');
    const data = response.data.data;
    userAbilities.value = data;
    // console.log(userAbilities.value)
    } catch (error) {
    console.error('Error fetching user abilities:', error);
    }
}
const can = (permission) => {
    return userAbilities.value.includes(permission);
};
return {
    can,
    userAbilities,
    fetchUserAbilities,
};
});
