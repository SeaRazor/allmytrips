<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark :color="uiElementsColor">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid" ref="form" validation>
              <v-text-field
                prepend-icon="person"
                name="email"
                label="email"
                type="text"
                v-model="email"
                :rules="emailRules"
                validate-on-blur
              ></v-text-field>
              <v-text-field
              id="password"
              prepend-icon="lock"
              name="password"
              label="password"
              type="password"
              v-model="password"
              :counter="6"
              :rules="passwordRules"
              validate-on-blur
              ></v-text-field>
              <v-text-field
                id="confirm"
                prepend-icon="lock"
                name="confirm"
                label="confirm password"
                type="password"
                v-model="confirm"
                :counter="6"
                :rules="confirmRules"
                validate-on-blur
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :color="uiElementsColor"
              @click="onSubmit"
              :dark="valid"
              :disabled="!valid"
            >Register</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable indent */

  import validator from '../../validators/validator'
import appsettings from '../../appsettings'

  export default {
    data () {
      return {
        email: '',
        password: '',
        confirm: '',
        valid: false,
        emailRules: validator.emailRules(),
        passwordRules: validator.passwordRules(6),
        confirmRules: [
          v => !!v || 'Password is required',
          v =>
            (v && v === this.password) ||
            'Passwords should match'
        ],
        uiElementsColor: appsettings.colors.uiElements
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          const user = {
            email: this.email,
            password: this.password
          }
          console.log(user)
        }
      }
    }
  }
</script>

<style scoped></style>
