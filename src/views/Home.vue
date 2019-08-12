<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Share Trip</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Welcome To @ionic/vue</h1>
      <img alt="Vue logo" src="../assets/logo.png" />
      <ul id="example-1">
        <li v-for="boardList in items">
          {{ item.id }}
        </li>
       </ul>
      <ion-button @click="onClick()" full>Go to About Page</ion-button>
    </ion-content>
  </div>
</template>
 
<script>
export default {
  name: "home",
  methods: {
    onClick () {
      this.$router.push('about')
    }
  }
}
</script>