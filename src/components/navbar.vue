<template>
    <div>
      <nav class="main_nav">
        <div class="sub_holder1">
          <div class="icon_holder"></div>
          <p class="label">MiniCRM</p>
          <button @click="left()" class="btn">+</button>
        </div>
        <div class="container">
          <div class="sub_holder2" ref="moved">
            <div class="mini_icon"></div>
            <select class="select" name="" id="">
              <option value="" disabled selected>Értékesítés</option>
              <option value="">option2</option>
              <option value="">option3</option>
              <option value="">option4</option>
              <option value="">option5</option>
            </select>
            <select class="select" name="" id="">
              <option value="" disabled selected>Projectmenedzsment</option>
              <option value="">option2</option>
              <option value="">option3</option>
              <option value="">option4</option>
              <option value="">option5</option>
            </select>
            <select class="select" name="" id="">
              <option value="" disabled selected>Ügyfélszolgálat</option>
              <option value="">option2</option>
              <option value="">option3</option>
              <option value="">option4</option>
              <option value="">option5</option>
            </select>
            <select class="select" name="" id="">
              <option value="" disabled selected>Számlázó</option>
              <option value="">option2</option>
              <option value="">option3</option>
              <option value="">option4</option>
              <option value="">option5</option>
            </select>
          </div>
        </div>
        <div class="sub_holder3">
          <button @click="right()" class="btn">+</button>
          <div class="spec-icon1">I</div>
          <input type="text" placeholder="Keresés">
          <div class="spec-icon2"></div>
          <div class="spec-icon3"></div>
        </div>
      </nav>


      <div class="bg-red-900 w-32 h-32 rotate-45"></div>


      <nav class="flex bg-blue-900 h-14 minim2 p-2.5">
        <div class="flex minim w-1/6">
          <div class="bg-white mr-2 w-9 h-9 origin-center rotate-12"></div>
          <p class="mr-4 text-white font-semibold text-3xl">MiniCRM</p>
          <button @click="left()" class="btn">+</button>
        </div>
        <div class="container">
          <div class="sub_holder2" ref="moved">
            <div class="mini_icon"></div>
            <select class="select" name="" id="">
              <option value="" disabled selected>Értékesítés</option>
              <option value="">option2</option>
              <option value="">option3</option>
              <option value="">option4</option>
              <option value="">option5</option>
            </select>
            <select class="select" name="" id="">
              <option value="" disabled selected>Projectmenedzsment</option>
              <option value="">option2</option>
              <option value="">option3</option>
              <option value="">option4</option>
              <option value="">option5</option>
            </select>
            <select class="select" name="" id="">
              <option value="" disabled selected>Ügyfélszolgálat</option>
              <option value="">option2</option>
              <option value="">option3</option>
              <option value="">option4</option>
              <option value="">option5</option>
            </select>
            <select class="select" name="" id="">
              <option value="" disabled selected>Számlázó</option>
              <option value="">option2</option>
              <option value="">option3</option>
              <option value="">option4</option>
              <option value="">option5</option>
            </select>
          </div>
        </div>
        <div class="sub_holder3">
          <button @click="right()" class="btn">+</button>
          <div class="spec-icon1">I</div>
          <input type="text" placeholder="Keresés">
          <div class="spec-icon2"></div>
          <div class="spec-icon3"></div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name:"NavBar",
  methods:{
    left(){
      var pos = Number(this.$refs.moved.style.left.slice(0,this.$refs.moved.style.left.length-2))
      var leng = 650 + pos
      var data2 = document.querySelector(".container").clientWidth
      if(leng >= data2){
        pos -= this.num
        this.$refs.moved.style.left = pos.toString()+this.px
      }

    },
    right(){
      var pos = Number(this.$refs.moved.style.left.slice(0,this.$refs.moved.style.left.length-2))
      if(pos <= 0){
        pos += this.num
        this.$refs.moved.style.left = pos.toString()+this.px
      }
    }
  },
  data(){
    return{
      num: 20,
      px: "px"
    }
  },
  mounted(){
    this.$refs.moved.style.left = "0px"
    this.$refs.moved.style.top = "0px"
    window.onresize = () => {
      this.$refs.moved.style.left = "0px"
    }
  }
}
</script>

<style scoped>

  .minim{
    min-width: 210px;
  }
  .minim2{
    min-width: 910px;
  }

  .main_nav{
    width: 100%;
    min-width: 910px;
    height: 60px;
    background-color: rgb(20, 59, 144);
    padding: 12px 10px 12px 15px;
    display: flex;
  }
  .sub_holder1{
    display: flex;
    min-width: 210px;
    width: 13%;
  }
  .icon_holder{
    background-color: white;
    height: 36px;
    width: 36px;
    margin-right: 5px;
    transform: rotateZ(18deg);
  }
  .label{
    font-weight: 600;
    font-size: 25px;
    color: white;
    margin-right: 20px;
  }
  .container{
    width: 75%;
    min-width: 200px;
    overflow: hidden;
    position: relative;
  }
  .btn{
    width: 24px;
    height: 36px;
    background-color: rgb(20, 59, 144);
    display: none;
  }
  .sub_holder2{
    height: 36px;
    color: white;
    width: 650px;
    display: flex;
    align-items: center;
    position: absolute;
    transition-property: all;
    transition-duration: 1s;
  }
  .select{
    background-color: rgb(20, 59, 144);
    margin-right: 3%;
  }
  .mini_icon{
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: white;
    margin-right: 3%;
  }
  .sub_holder3{
    height: 36px;
    width: 280px;
    background-color: rgb(20, 59, 144);
    display: flex;
    margin-right: 1%;
  }
  input{
    background-color: rgb(7, 44, 112);
    width: 140px;
    height: 26px;
    margin-top: 4px;
  }
  .spec-icon1{
    display: inline-block;
    background-color: rgb(7, 44, 112);
    width: 18px;
    height: 26px;
    margin-top: 4px;
    margin-left: 10px;
    color: white;
    text-align: center;
  }
  .spec-icon2{
    width: 18px;
    height: 18px;
    background-color: antiquewhite;
    margin: 9px 20px 9px 10px;
  }
  .spec-icon3{
    width: 36px;
    height: 36px;
    background-color: antiquewhite;
    border-radius: 50%;
  }

  @media (max-width: 1100px) {
    .btn{
      display: initial;
    }
  }
</style>
