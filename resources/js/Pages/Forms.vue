<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { ref, onMounted} from 'vue'
import {store} from "@/store/index.js";

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    address: '',
    name: '',
});
const address = ref({})
onMounted(() => {
    console.log(`the component is now mounted.`)
    address.value = store.getters.forms
    console.log(address.value)
})
const submit = () => {
    axios.post('/api/submit', {
        name: form.name,
        address: form.address
    }).then((resp) => {
        console.log(resp.data)
    })
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />



        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Имя
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Электронная почта
                    </th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="item in address" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.name }}
                    </th>
                    <td class="px-6 py-4">
                        {{ item.email }}
                    </td>
                </tr>

                </tbody>
            </table>
        </div>

    </GuestLayout>
</template>
