<template>
    <div class="full-height">
        <q-btn label="Back" color="red" @click="previousPage">
            <q-icon name="arrow_left_alt"></q-icon>
        </q-btn>

        <div class="full-height  " style="width: 80%; margin: 0 auto;">
            <q-table 
            title="Registered Users" 
            :columns="columns"
            separator="cell">

            </q-table>
        </div>

    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    name: 'DataReview',
    setup() {
        const columns = ref([
            {
                name: 'Name',
                label: 'Name',
                align: 'left',
                sortable: true,
            },
            {
                name: 'Email',
                label: 'Email',
                align: 'left',
            },
            {
                name: 'Message',
                label: 'Message',
                align: 'left',
            }
        ])
        return {
            columns
        }
    },
    methods: {
        previousPage() {
            this.$router.push('/')
        }
    }
}
</script>