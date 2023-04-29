<template>
    <div :class="BaseClass">
        <!--Formulário enviado com sucesso -->
        {{ text }}
        <button class="myButton" v-on:click="CloseAlert">X</button>    
    </div>    
    
</template>

<script>
export default {
  methods: {
    CloseAlert () { 
        this.$emit('fecharAleta')
      console.log('clicou');
    },
  },
  props: 
    ['variant','text']
  ,
 computed: {
    BaseClass(){
        return ['alert',this.variant ? `alert-${this.variant}` : '']
    }
 }

}
</script>

<style>
    .alert{
        padding: 5px;
        border-radius: 6px;
        color: rgb(240, 237, 237);
        background: #c2bfbf;    
        display: flex;
        justify-content: space-between;
    }
    .alert-success{
        background: green;  
        color: white;  
    }
    .alert-alert{
        background: rgb(196, 8, 8);  
        color: white;  
    }    
    .myButton{
        background-color: rgb(36, 3, 58);
        color: aliceblue;
    }
</style>