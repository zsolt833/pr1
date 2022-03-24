<template> 
    <div class="w-full h-96 border-2 minwidth2">
        <div class="w-64 h-full float-right bg-gray-100"></div>
        <div class="w-fit h-20 mr-64">
            <nav class="pl-4 flex justify-between">
                <div class="mt-2 inline-block minwidth">
                    <p class="inline-block mr-4 text-xl">Email, Teendők, SMS és dokumentum sablonok </p>
                    <select class="rounded w-24 h-6 bg-green-500 text-white" name="" id="">
                        <option value="" disabled selected>Új sablon</option>
                        <option value="">option2</option>
                        <option value="">option3</option>
                        <option value="">option4</option>
                        <option value="">option5</option>
                    </select>
                </div>
                <div class="h-6 mt-2 mr-2">icon</div>
            </nav>
        </div>

        <div>
            <div class="grid1 minwidth line">
                <p>SABLONNÉV</p>
                <p>TÍPUS</p>
                <p>MAPPA</p>
                <p>AZONOSÍTÓ</p>
            </div>
            <Items v-for="(item, index) in list" :key="index" :item="item"/>
        </div>
    </div>

</template>

<script>
import Items from './items.vue'

export default {
    name:"Body",
    setup(){
        var list = [
        {name: "Feladat neve-1", type: "teendő-1", mappa: "ahova tenni-1", id:10},
        {name: "Feladat neve-2", type: "teendő-2", mappa: "ahova tenni-2", id:11},
        {name: "Feladat neve-3", type: "teendő-3", mappa: "ahova tenni-3", id:12},
        {name: "Feladat neve-4", type: "teendő-4", mappa: "ahova tenni-4", id:13},
        {name: "Feladat neve-5", type: "teendő-5", mappa: "ahova tenni-5", id:14},
        {name: "Feladat neve-6", type: "teendő-6", mappa: "ahova tenni-6", id:15},
        {name: "Feladat neve-7", type: "teendő-7", mappa: "ahova tenni-7", id:16},
        {name: "Feladat neve-8", type: "teendő-8", mappa: "ahova tenni-8", id:17},
        {name: "Feladat neve-9", type: "teendő-9", mappa: "ahova tenni-9", id:18},
        {name: "Feladat neve-10", type: "teendő-10", mappa: "ahova tenni-10", id:19},
        {name: "Feladat neve-11", type: "teendő-11", mappa: "ahova tenni-11", id:20},
        ]
        return{
            list
        }
    },
    components:{
        Items
    }
}
</script>

<style>
    .grid1{
        color: rgba(0, 0, 0, 0.6);
        font-weight: 600;
        font-size: 10px;
        display: grid;
        grid-template-columns: auto auto auto auto;
    }
    .line{
        border-bottom: 2px solid rgba(0, 0, 0, 0.6);
    }
    .minwidth{
        min-width: 600px;
    }
    .minwidth2{
        min-width: 910px;
    }
</style>
