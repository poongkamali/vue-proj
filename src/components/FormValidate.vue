<template>
    <div class="container">
        <div class="my-5">
            <div class="d-lg-flex justify-content-center">
                <div class="w-50 rounded shadow p-4">
                    <form @submit.prevent="submit">
                        <h2>Athletic<span class="text-success">Greens 2</span></h2>
                        <small><span class="font-weight-bold">Information</span><span class="text-muted"> > Shopping > Payments</span></small>
                        <h5 class="pt-3">Customer Information</h5>
                        <input type="text" class="form-control" id="email" name="email" v-model="email" placeholder="E-mail">
                        <h5 class="pt-3">Shipping Address</h5>
                        <div class="form-row">
                            <div class="col-lg-6">
                                <input type="text" class="form-control mt-3" v-model="fname" v-on:keypress="isLetter($event)" placeholder="First name*">
                            </div>
                            <div class="col-lg-6">
                                <input type="text" class="form-control mt-3" v-model="lname" placeholder="Last name*">
                            </div>
                        </div>
                        <input type="text" class="form-control mt-3" v-model="company" placeholder="Company (optional)">
                        <input type="text" class="form-control mt-3" v-model="address" placeholder="Address*">
                        <input type="text" class="form-control mt-3" v-model="apartment" placeholder="Apartment, Suite, etc. (optional)">
                        <div class="form-row">
                            <div class="col-lg-4">
                                <input type="text" class="form-control mt-3" v-model="zip" maxlength="6" placeholder="Zipcode*">
                            </div>
                            <div class="col-lg-4">
                                <input type="text" class="form-control mt-3" v-model="city" placeholder="City*">
                            </div>
                            <div class="col-lg-4">
                                <input type="text" class="form-control mt-3" v-model="state" placeholder="State*">
                            </div>
                        </div>
                        <input type="text" class="form-control mt-3" v-model="country" placeholder="Country*">
                        <input type="text" class="form-control mt-3" v-model="phone" maxlength="10" placeholder="Phone Number*">
                        <div class="d-lg-flex justify-content-between">
                            <h6 class="text-primary mt-4">Return to cart</h6>
                            <button type="submit" class="btn btn-primary mt-3 py-2 px-4" >Continue to Shopping</button>
                        </div>
                    </form>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
    name: "FormValidate",
    data() {
        return {
            email:'',
            fname:'',
            lname:'',
            company:'',
            address:'',
            apartment:'',
            zip:'',
            city:'',
            state:'',
            country:'',
            phone:''
        }
    },
    validators: {
        email: { required },
        fname: { required }
    },
    methods: {
        submit() {

            this.$v.$touch();
            if(this.$v.$pennding || this.$v.$error) return;
        }
    },
}
</script>

<style>
</style>