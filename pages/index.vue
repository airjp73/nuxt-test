<template>
  <div>
    <h3>Root module</h3>
    <button v-on:click="inc1">{{this.val1}}</button>
    <button v-on:click="inc2">{{this.val2}}</button>

    <h3>Mod1</h3>
    <button v-on:click="mod1Inc1">{{this.mod1Val1}}</button>
    <button v-on:click="mod1Inc2">{{this.mod1Val2}}</button>

    <h3>Mod1 nested</h3>
    <button v-on:click="nestedInc1">{{this.nestedVal1}}</button>
    <button v-on:click="nestedInc2">{{this.nestedVal2}}</button>

    <h3>Mod2</h3>
    <button v-on:click="mod2Inc1">{{this.mod2Val1}}</button>
    <button v-on:click="mod2Inc2">{{this.mod2Val2}}</button>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    computed: {
      ...mapState({
        val1: 'val1',
        val2: 'val2'
      }),
      ...mapState('mod1', {
        mod1Val1: 'val1',
        mod1Val2: 'val2'
      }),
      ...mapState('mod1/mod1-nested', {
        nestedVal1: 'val1',
        nestedVal2: 'val2'
      }),
      ...mapState('mod2', {
        mod2Val1: 'val1',
        mod2Val2: 'val2'
      })
    } ,
    methods: {
      ...mapActions({
        inc1: 'inc1',
        inc2: 'inc2'
      }),
      ...mapActions('mod1', {
        mod1Inc1: 'inc1',
        mod1Inc2: 'inc2'
      }),
      ...mapActions('mod1/mod1-nested', {
        nestedInc1: 'inc1',
        nestedInc2: 'inc2'
      }),
      ...mapActions('mod2', {
        mod2Inc1: 'inc1',
        mod2Inc2: 'inc2'
      })
    }
  }
</script>
