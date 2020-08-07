<template>
<div class="contact-list">
    <contactUser
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        @to-contact-info="toContactInfo(contact)"
    />
</div>
</template>

<script>
import { mapActions } from 'vuex'
import contactUser from './contact-user'
export default {
    name: 'contact-list',
    components: {
        contactUser
    },

    computed: {
		contacts() {
            return this.$store.state.contacts     
        }     
    },

    methods: {
        ...mapActions([
            'fetch_contacts',
            'set_user_to_header'
        ]),
        toContactInfo(contact) {
            this.$router.push({
                name: 'contact',
                query: {'id': contact.id}
            })
        this.set_user_to_header(contact.name)
        }
    },
    mounted() {
        this.fetch_contacts()
    }

}
</script>

<style>

</style>