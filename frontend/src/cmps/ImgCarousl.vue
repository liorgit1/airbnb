<template>
  <el-carousl
    indicator-position="inside"
    :autoplay="false"
    height="230px"
  >
    <el-carousl-item class="img-carousl">
            <img v-for="(url, index) in stay.imgUrls.slice(0, 5)" :key="index" :src="url || stay.imgUrls[0]"
                :class="'img img' + (index + 1)">
    </el-carousl-item>
  </el-carousl>
</template>

<script>
export default {
 created() {
  console.log(this.stay);
 },
  props: {
    stay: {
      type: Object,
    },
  },
};
</script>

<style>
.el-carousel__arrow i {
  cursor: pointer;
  display: block !important;

  font-size: initial;
}
.el-carousel__container {
  position: relative;
  height: 260px;
}

.el-carousel__item {
  overflow: hidden;
  top: 0;
  left: 0;
  position: absolute;
}
.el-carousel__button {
  z-index: 10;
  border-radius: 30%;
  width: 0.4em !important;
  height: 0.4rem !important;
  border-radius: 40%;
}

.el-carousel {
  font-size: 18px;
  margin: 0;
  text-align: center;
}
</style>
