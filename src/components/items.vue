<template>
    <div class="grid1 minwidth">
        <p>{{item.name}}</p>
        <p>{{item.type}}</p>
        <p>{{item.mappa}}</p>
        <p>{{item.id}}</p>
    </div>
</template>

<script>
export default {
    name:"Items",
    props:{
        item: Object
    }
}
</script>