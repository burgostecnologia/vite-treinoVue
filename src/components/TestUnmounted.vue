<script>
    export default{
  methods: {
  },
  data () {
    return {
        ativoTestUnmounted: true,
    }
  },
  beforeUnmount(){
    console.log("beforeUnmount")
  },
  unmounted(){
    console.log("unmounted");
  }

    }
</script>

<template>
    <div>      
        <header v-if="ativoTestUnmounted" class="teste">
            Teste Unmounted <br>       
        </header>
        <br>
        <button @click="ativoTestUnmounted = !ativoTestUnmounted">Ativar/desativar</button>
    </div>
   
   
</template>

<style>
   .teste {
    background: #0e0153;
    color: #fff;    
   }
</style>