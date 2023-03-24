<template>
    <section v-if = "!isOpen" class="Filter-list">
    <button class="list-btn">
        <img src="../assets/pngs/icon2.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon3.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon1.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon4.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon5.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon6.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon7.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon8.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon9.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon10.jpg">
    </button>
    <button>
        <img src="../assets/pngs/icon11.jpg">
    </button>
</section>
</template>

<script>

export default{
    props: ['isOpen']
    
}
</script>