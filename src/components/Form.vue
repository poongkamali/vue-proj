<template>
    <div class="container">
        <div class="my-5">
            <div class="d-lg-flex justify-content-center">
                <div class="w-50 rounded shadow p-4">
                    <!-- <p v-if="error.length">
                        <ul>
                            <li class="text-danger" v-for="e in error" v-bind:key="e.id">
                                {{e}}
                            </li>
                        </ul>
                    </p> -->
                    <form @submit.prevent="submit"> 
                        <h2>Athletic<span class="text-success">Greens</span></h2>
                        <small><span class="font-weight-bold">Information</span><span class="text-muted"> > Shopping > Payments</span></small>
                        <h5 class="pt-3">Customer Information</h5>
                        <!-- <input type="text" placeholder="E-mail" class="form-control" v-model="email" @keyup="validate($event,'email')"/> -->
                        <!-- <p v-if="error.email != ''" class="error-msg">{{this.error.email}}</p> -->
                        <input type="text" id="email" name="email" :class="{ 'is-invalid':errors.email, 'is-valid':email }" class="form-control" v-model="email" placeholder="E-mail"> 
                        <small v-if="errors.email" class="text-danger font-weight-bold">{{ errors.email }}</small>
                        <h5 class="pt-3">Shipping Address</h5>
                        <div class="form-row">
                            <div class="col-lg-6">
                                <input type="text" :class="{ 'is-invalid':errors.fname, 'is-valid':fname }" class="form-control mt-3" id="fname" name="fname" v-model="fname" v-on:keypress="isLetter($event)" placeholder="First name*">
                                <small v-if="errors.fname" class="text-danger font-weight-bold">{{ errors.fname }}</small>
                            </div>
                            <div class="col-lg-6">
                                <input type="text" :class="{ 'is-invalid':errors.lname, 'is-valid':lname }" class="form-control mt-3" id="lname" name="lname" v-model="lname" v-on:keypress="isLetter($event)" placeholder="Last name*">
                                <small v-if="errors.lname" class="text-danger font-weight-bold">{{ errors.lname }}</small>
                            </div>
                        </div>
                        <input type="text" :class="{ 'is-invalid':errors.company, 'is-valid':company }" class="form-control mt-3" v-model="company" v-on:keypress="isLetter($event)" placeholder="Company (optional)">
                        <input type="text" :class="{ 'is-invalid':errors.address, 'is-valid':address }" class="form-control mt-3" v-model="address" placeholder="Address*">
                        <small v-if="errors.address" class="text-danger font-weight-bold">{{ errors.address }}</small>
                        <input type="text" :class="{ 'is-invalid':errors.apartment, 'is-valid':apartment }" class="form-control mt-3" v-model="apartment" placeholder="Apartment, Suite, etc. (optional)">
                        <div class="form-row">
                            <div class="col-lg-4">
                                <input type="text" :class="{ 'is-invalid':errors.zip, 'is-valid':zip }" class="form-control mt-3" v-model="zip" v-on:keypress="validateNumber($event)" maxlength="6" placeholder="Zipcode*">
                                <small v-if="errors.zip" class="text-danger font-weight-bold">{{ errors.zip }}</small>
                            </div>
                            <div class="col-lg-4">
                                <input type="text" :class="{ 'is-invalid':errors.city, 'is-valid':city }" class="form-control mt-3" v-model="city" v-on:keypress="isLetter($event)" placeholder="City*">
                                <small v-if="errors.city" class="text-danger font-weight-bold">{{ errors.city }}</small>
                            </div>
                            <div class="col-lg-4">
                                <input type="text" :class="{ 'is-invalid':errors.state, 'is-valid':state }" class="form-control mt-3" v-on:keypress="isLetter($event)" v-model="state" placeholder="State*">
                                <small v-if="errors.state" class="text-danger font-weight-bold">{{ errors.state }}</small>
                            </div>
                        </div>
                        <input type="text" :class="{ 'is-invalid':errors.country, 'is-valid':country }" class="form-control mt-3" v-model="country" v-on:keypress="isLetter($event)" placeholder="Country*">
                        <small v-if="errors.country" class="text-danger font-weight-bold">{{ errors.country }}</small>
                        <input type="text" :class="{ 'is-invalid':errors.phone, 'is-valid':phone }" class="form-control mt-3" maxlength="10" v-on:keypress="validateNumber($event)" v-model="phone"  placeholder="Phone Number*">
                        <small v-if="errors.phone" class="text-danger font-weight-bold">{{ errors.phone }}</small>
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
// import { required } from 'vuelidate/lib/validators'
export default {
    name: "Form",
    data() {
        return {
            errors:[],
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
            phone:'',    
            error:{
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
                phone:'', 
            } 
        }
    },
    methods: {
        validate: function(toValidate){
            // let alphaValidation  = /^[A-Za-z\s]+$/
            // let numberValidation = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/g
            // let mailValidation   = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
            if(this.form[toValidate] == ''){
                this.error[toValidate] = `${toValidate} is required`
            }
        },
        submit(){
            var errorcount = 0;
            if(this.email && this.fname && this.lname){
                console.log('working')
            } 
            
            this.errors=[];

            if(!this.email){
                this.errors.email='Email is required';
                errorcount++;
            } else if (!this.validEmail(this.email)) {
                this.errors.email='invalid e-mail';
                errorcount++;
            }

            if(!this.fname){
                this.errors.fname='First name is required';
                errorcount++;
            }

            if(!this.lname){
                this.errors.lname='Last name is required';
                errorcount++;
            }

            if(!this.address){
                this.errors.address='Address is required';
                errorcount++;
            }

            if(!this.zip){
                this.errors.zip='Zipcode is required';
                errorcount++;
            }

            if(!this.city){
                this.errors.city='City is required';
                errorcount++;
            }

            if(!this.state){
                this.errors.state='State required';
                errorcount++;
            }

            if(!this.country){
                this.errors.country='Country required';
                errorcount++;
            }

            if(!this.phone){
                this.errors.phone='Phone Number is required';
                errorcount++;
            }
            
            
            // e.preventDefault();
            if(errorcount){
                alert('Error!! Some fields are missing');
            } else {
                alert('Data have been Submitted');
            }
                        
        },
        isLetter(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if(/^[A-Za-z]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },
        validateNumber: event => {
        const charCode = String.fromCharCode(event.keyCode);
            if (!/[0-9]/.test(charCode)) {
                event.preventDefault();
            }
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
    },
}
</script>

<style>
</style>