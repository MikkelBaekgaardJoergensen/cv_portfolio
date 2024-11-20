export default defineEventHandler(async (event) => {
    
    // Call an API
    const { data } = await $fetch('apiCallToBeInserted')
    
     return data
});