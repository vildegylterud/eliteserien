<template>
  <v-icon v-if="result === 'noResult'" icon="mdi-bell-ring"></v-icon>
  <v-avatar v-if="result === 'noResult'" class="bg-success font-weight-bold"
    >V</v-avatar
  >
  <v-avatar
    v-if="result === 'noResult'"
    class="bg-secondary-dimmed font-weight-bold"
    >U</v-avatar
  >
  <v-avatar v-if="result === 'noResult'" class="bg-error font-weight-bold"
    >T</v-avatar
  >
</template>
<script setup lang="ts"></script>
<style></style>
