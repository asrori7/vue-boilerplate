<template>
  <div>
    <form action="">
      <p><strong>Username :</strong></p>
      <div><input v-model="form.username" type="text" name="username" /></div>
      <p><strong>Password :</strong></p>
      <div><input v-model="form.password" type="password" name="password" /></div>
      <button type="button" @click="doLogin()" style="margin-top: 5px;">Login</button>
    </form>
  </div>
</template>

<script>
import { AbilityBuilder } from '@casl/ability'

export default {
  name: 'Login',

  data: () => ({
    form: { username: '', password: '' }
  }),

  methods: {
    doLogin () {
      this.loading = false
      this.$store.dispatch('auth/login', this.form)
        .then((token) => {
          if (token) {
            this.getInfoUserLogin()
          }
        })
        .catch((err) => {
          this.loading = false
          if (this.$debug) {
            console.log(err)
          }
        })
    },

    getInfoUserLogin () {
      this.$store.dispatch('auth/setInfoUserLogin')
        .then((permissions) => {
          this.loading = false
          const { can, rules } = new AbilityBuilder()
          can(permissions)
          this.$ability.update(rules)
          this.$router.push({ name: 'Home' })
        })
        .catch((err) => {
          this.loading = false
          if (this.debug) {
            console.log(err)
          }
        })
    }
  }
}
</script>
