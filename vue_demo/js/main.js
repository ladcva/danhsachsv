/*Vue.component('customercomponent',{
    template : '<div class = "Table-list"><div class = "Table-Row"  v-bind:style = "styleobj"><div class = "Cell"><p>{{itr.name}}</p></div><div class = "Cell"><p>{{itr.birth_date}}</p></div><div class = "Cell"><p>{{itr.stu_id}}</p></div><div class = "Cell"><p>{{ itr.sex }}</p></div><div class = "Cell"><p><button v-on:click = "$emit(\'removeelement\')">X</button></p></div></div></div>',
    props: ['itr', 'index'],
    data: function() {
       return {
          styleobj : {
             backgroundColor:this.getcolor(),
             fontSize : 20
             
          }
       }
    },
    methods:{
       getcolor : function() {
          if (this.index % 2) {
             return "#FFE633";
          } else {
             return "#D4CA87";
          }
       }
    }
 }); */
 var vm = new Vue({
    el: '#databinding',
    data: {
       search: '',
       name:'',
       birth_date:'',
       stu_id : '',
       sex : '',
       custdet:[],
    },
    
    
    methods :{
       showdata : function() {
          this.custdet.push({
             name: this.name,
             birth_date: this.birth_date,
             stu_id: this.stu_id,
             sex : this.sex
          });
          
          this.name = "";
          this.birth_date = "";
          this.stu_id = "";
          this.sex = "";
       },
       deleteTableRow: function (idx) { 
         this.custdet.splice(idx, 1);
    },
   },
   computed :{
       : function(){
         var self = this;
         if (this.search == ''){
            return this.items;
         }
         return this.items.filter(function(item) {
            return item.indexOf(self.search) >=0;
         }); 
      }
   },
 });

