<template>
<div class="contact-user" @click="toContactInfo">
    <div class="user__avatar"></div>
    <div class="user__name">
        <span>{{ contact.name }}</span>
    </div>
    <div class="user__status"></div>
</div>  
</template>

<script>
export default {
    name: 'contactUser',
    components: {
    },
    props: {
        contact: {
            type: Object,
            default: () => {

            }
        }
    },
    computed: {
        className() {
            return {
                'online': this.contact.status === 'online',
                'ofline': this.contact.status === 'ofline'
            }
        }
    },
    methods: {
        toContactInfo() {
            this.$emit('to-contact-info')
        }
    }

}
</script>

<style>

</style>