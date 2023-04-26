<template>
  <div >
    <img class="logoSize" src="./assets/burgostecnologia.png" alt="logo burgos">
    <img class="logoSize" src="./assets/vue.svg" alt="logo vue">
    <img class="logoSize" src="./assets/burgostecnologia.png" alt="logo burgos">
    <br><br>
  </div>
  
  <div class="title">Exemplo diretiva v-show:<br></div>
  <TheHeader v-show="showHeader"  /> 
  
  <div class="title"><br>Exemplo diretiva de variavel:<br></div>
  <div>
    Nome: {{ name }} {{ sobrenome }}
  </div>

  <div class="title"><br>Exemplo diretiva de if / elseif / else:<br></div>
  <div v-if="accessLevel==='admin'">Admin</div>
  <div v-else-if="accessLevel==='marketing'">Marketing</div>
  <div v-else-if="accessLevel==='rh'">RH</div>
  <div v-else>User</div>

  <div class="title"><br>Exemplo diretiva v-for<br></div>
  <div class="listaItens" v-for="(item,index) in listaNomes" v-bind:key=item.id>
    
    <img 
      v-if="item.foto" 
      v-bind:src="item.foto"
    > 
    {{ item.id}} - 
    {{ item.nome}} - 
    {{ item.sobrenome }} - 
    [{{index}}]

  </div>


  <div class="title"><br>Exemplo diretiva v-bind, forma curta pode apagar o v-bind e deixar somente o :<br></div>
  <img 
  src="https://placehold.co/150x150?text=Hello+World" 
  :alt="imgAlt"
  ><br>

  <div class="title"><br>Exemplo 1 diretiva v-bind em classe :</div>
  <h1 :class="classVar">V-BIND NA CLASSE</h1>
  
  <div class="title"><br>Exemplo 2 diretiva v-bind em classe (com objeto true ou false):</div>
  <h2 :class="{ 'template': true, 'alert': switchBind}">V-BIND NA CLASSE(com objeto)</h2>

  <div class="title"><br>Exemplo 1 diretiva v-bind em classe (com array):</div>
  <h2 :class="['text','title',{'template': true}]">V-BIND NA CLASSE(com array)</h2>

  <div class="title"><br>Exemplo 2 diretiva v-bind em classe (com array):</div>
  <h2 :class="pClass">V-BIND NA CLASSE(com array)</h2>

  <div class="title"><br>Exemplo two way data bind INPUT</div>
  <div><br>
    two-way-data-bind<br>
    v-model -> formularios<br>
    <input v-model="name2" type="text" >
  
    <div>{{name2}}</div>
  </div>
  
  <div class="title"><br>Exemplo two way data bind SELECT(COMBO)</div>
  <div><br>
    two-way-data-bind<br>
    v-model -> formularios<br>
    <select v-model="sports">
      <option value="">Escolha</option>
      <option value="futebol">Futebol</option>
      <option value="surf">Surf</option>
      <option value="tenis">Tenis</option>
    </select>
    <div>{{sports}}</div>   
    
  </div>
  
  <div class="title"><br>Exemplo two way data bind RADIO</div>
  <div><br>
    two-way-data-bind<br>
    v-model -> formularios<br>
    <span>Newsletter</span> <br>
    <input v-model="newsletter" type="radio" value="Sim" > Sim 
    <input v-model="newsletter" type="radio" value="Não" > Não
  
    <div>{{newsletter}}</div>
  </div>

  <div class="title"><br>Exemplo 1 two way data bind CHECKBOX</div>
  <div><br>
    two-way-data-bind<br>
    v-model -> formularios<br>
    <span>Aceita termos</span> <br>
    <input v-model="contrato" type="checkbox"  > Aceita os termos ?  {{ contrato }}
  </div>

  <div class="title"><br>Exemplo 2 two way data bind CHECKBOX capturando no array </div>
  <div><br>
    two-way-data-bind<br>
    v-model -> formularios<br>
    <span>Cores favoritas</span> <br>
    <input v-model="cores" type="checkbox" value="azul" > Azul
    <input v-model="cores" type="checkbox" value="vermelho"> Vermelho
    <input v-model="cores" type="checkbox" value="verde" > verde
    {{ cores }}
  </div>

  <div class="title"><br>Exemplo EVENTS BUTTON v-on: pode ser substituido por @  simplesmente</div>
  <div><br>
    <span>Clique botão acionando methods</span> <br>
    <button v-on:click="onClickButton">Enviar v-on</button><br><br>
    <button @click="onClickButton">Enviar @</button>
  </div>

  <div class="title"><br>Exemplo EVENTS MOUSEOVER  v-on: pode ser substituido por @  simplesmente</div>
  <div><br>
    <span>mouse acionando methods</span> <br>
    <div @mouseover="onMouseText"  @mouseout="outMouseText">
      Passe o mouse aqui 
    </div>

  </div>

  <div class="title"><br>Exemplo 1 FORM</div>
  <div><br>
    <span>Tratando os modificadores de evento formulario (event handling)</span> <br>
    .prevent = para a propagação (vai pro metodo e nao vai pro action) / .once executa so uma vez
    
    <form action="https://google.com" v-on:submit.prevent="onSubmit">
      <button type="submit">
        Enviar
      </button>
    </form>
  </div>

  <div class="title"><br>Exemplo 2 FORM eventos key</div>
  <div><br>
    <form action="https://google.com" v-on:submit.prevent="onSubmit">
      <input type="text" @keyup="onKeyUp">
    </form>
  </div>


  <div class="title"><br>Exemplo 3 FORM eventos key</div>
  <div><br>
    <form action="https://google.com" v-on:submit.prevent="onSubmit">
      <input type="text" @keyup.enter="onKeyUp">
    </form>
  </div>  

  <div class="title"><br>Exemplo COMPUTED (acessa as variaveis do data atraves do this)</div>
  <div><br>  
  acessando do data - {{ usuario.primeiroNome }} - {{ usuario.ultimoNome }} <br>
  acessando do computed - {{fullName}}    
  </div>   


  <div class="title"><br>Exemplo 2 COMPUTED (lista somente ativos)</div>
  <br>  
  <div v-for="item in ativos" :key="item.id">
    {{ item.nome }} - {{ item.ativo }}
  </div>
  
  <div class="title"><br>Exemplo 2 COMPUTED (lista somente inativos)</div>
  <br>  
  <div v-for="item in inativos" :key="item.id">
    {{ item.nome }} - {{ item.ativo }}
  </div>
  
  <div class="title"><br>Exemplo 2 COMPUTED (Todos)</div>
  <div v-for="item in listaNomes" :key="item.id">
    <input v-model="item.ativo" type="checkbox"> {{ item.nome }}
  </div>

  <div class="title"><br>Exemplo  WATCH acionado ao mudar algo</div>
  <span>no watch a variavel no data vai ter um metodo com mesmo nome no watch(novo valor, valor antigo)</span>
  <span>evitar de colocar mta coisa em watch, mover regras de negocio para methods criando o metodo e chamando no watch</span><br>
  <input v-model="esperando" type="text"><br>{{ esperando }}

  <div class="title"><br>Exemplo2  WATCH PAGINACAO</div>
  <select v-model="paginacao">
    <option value="1">1</option>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
  </select><br>
  {{ paginacao }}
  
  <div class="title"><br>Exemplo3  WATCH, se alterou profundamente, ex: propriedade de um objeto</div>
  <span>ao alterar um conteudo das propriedades de um objeto não considera alteração da estrutura do objeto</span>
  <br>
  Primeiro nome <input v-model="usuario.primeiroNome" type="text">
  Ultimo nome <input v-model="usuario.ultimoNome" type="text">

  <div class="title"><br>CICLO DE VIDA DA APLICAÇÃO</div>
  <ul>
    <li style="font-weight: bold;">Criação</li>
    <ol>Preparar o componente</ol>
    <ol>Ajax, inicializar algumas variaves</ol>
    <ol>Não tem acesso ao DOM</ol>
    <li style="font-weight: bold;">Montagem</li>
    <ol>inicializar lib externa</ol>
    <ol>aqui tem acesso ao DOM</ol>
    <li style="font-weight: bold;">Atualização</li>
    <ol>pra debug - pouco usado</ol>
    <li style="font-weight: bold;">Desmontagem</li>
    <ol>remover coisas do componente para limpar memoria</ol>

    <li style="font-weight: bold;">HOOKS (PARA INTERAGIR COM ESSAS FASES)</li>
    <ol>beforeCreate</ol>
    <ol>created</ol>
    <ol>beforeMount</ol>
    <ol>mounted</ol>
    <ol>beforeUnmounted</ol>
    <ol>Unmounted</ol>

  </ul>


</template>


<script>
import TheHeader from './components/TheHeader.vue';
export default{
  watch: {
    usuario : { 
      handler(){
        console.log("alterou a propriedade do objeto")
      },deep: true
    },
    paginacao () { 
      this.changePage()
    },
    esperando(newValue,oldValue){
      this.modificou(newValue,oldValue);
    }
  },
  name: 'App',
  computed: {
      fullName(){
          //return this.usuario.primeiroNome + ' ' + this.usuario.ultimoNome ou
          return `${this.usuario.primeiroNome} ${this.usuario.ultimoNome}`
      },
      ativos(){
          //return this.usuario.primeiroNome + ' ' + this.usuario.ultimoNome ou
          return this.listaNomes.filter(elem => elem.ativo)
      },
      inativos(){
          return this.listaNomes.filter(elem=> !elem.ativo)
      }
  },
  components:{   
    TheHeader,
  },
  methods: {
    changePage () { 
      console.log("ajax change page")
    },
    modificou (newValue,oldValue) { 
      if (newValue.length>3) {
        console.log(newValue,oldValue);   
      }
      
    },
    onKeyUp ($event) { 
      console.log('tecla subiu', $event);
    },
    onSubmit () { 
      console.log("entrou formulario");
    },
    onClickButton($event){
      console.log('clicou', $event);
    },
    onMouseText($event){
      console.log('passou o mouse',$event);
    },
    outMouseText($event){
      console.log('saiu o mouse',$event);
    }
  },
  data () {
    return {
      paginacao: 5,
      esperando: '',
      cores: [],
      contrato: "true",
      newsletter: "Não",
      sports: 'futebol',
      name2: "Vazio2",
      pClass: ['text','title',{'template': true}],
      switchBind: true,
      classVar: 'template',
      imgAlt: "Imagem 150x150",
      name: 'Roberto',          
      sobrenome: 'Burgos',
      showHeader: true,
      accessLevel: 'rh',
      listaNomes: [
        { "id": 1, 
          "nome":"Roberto",
          "sobrenome":"Burgos",
          "foto":"https://placehold.co/150x150?text=Foto+Roberto",
          "ativo": true
        },      
        { "id": 2, 
          "nome":"Carol",
          "sobrenome":"Silva",
          "ativo": true
        },      
        { "id": 3, 
          "nome":"Gio",
          "sobrenome":"Matos",
          "foto":"https://placehold.co/150x150?text=Foto+Gio",
          "ativo": false
        }      
      ], 
      usuario: {
        primeiroNome: 'Roberto',
        ultimoNome: 'Burgos',
      }
    }
  }
}
</script>


<style>
*{
  background: #fff;  
  color: black;
 }

 .title{
  font: bold;
  font-size: large;
  color: red;
  text-decoration: underline;
 }

 .listaItens{
  display: flex;
  align-items: center;
  gap: 60px;
  background: black;
  color:white;
  margin: 0 0 5px 0;
  padding: 3px 6px;
 }

 .logoSize{
  width: 70px;
  height: 70px;
 }

 .template{
  color: blue;
  font-size: 20px;
 }

.alert{
  color: rgb(201, 104, 14);
}

.text{
  color: chartreuse;
}
</style>

