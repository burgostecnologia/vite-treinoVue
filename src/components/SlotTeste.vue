<script>
    export default{

    }
</script>

<template>
    <div>
        
        <header class="header">
        
            <slot></slot><br><br>
            
        </header>
        <slot name="description"/>
        
    </div>
</template>

<style>
   .header {
    background: #054103;
    color: #fff;    
   }
</style>