<template>
    <li class="stay-preview-container" @click="goToDeatails">
      <section class="stay-preview clickable">
        <div class="stay-preview-gallery">
          <section>
            <imgUploader
              :imgs="stay.imgUrls"
              class="card-img"
            />
          </section>
          <div>
            <span class="icon-heart">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  height: 24px;
                  width: 24px;
                  fill: rgba(0, 0, 0, 0.5);
                  stroke-width: 2;
                  overflow: visible;
                  stroke: white;
                "
              >
                <path
                  d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791
             0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949
              2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <div class="stay-preview-info">
          <div class="flex card-rate">
            <div class="star-preview">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  display: block;
                  height: 14px;
                  width: 14px;
                  fill: #ff385c;
                "
              >
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965
             9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853
              7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <span class="total-rate"> {{ getRating.toFixed(1) }} </span>
            <span> ({{ stay.numOfReviews }} reviews ) </span>
          </div>
  
          <div class="stay-type">
            {{ stay.propertyType }} <span> &#183;</span>
            {{ stay.address.city }}
          </div>
          <div class="stay-name">{{getStayName }}</div>
          <div class="stay-price">
            <span class="bold">${{ stay.price }}</span> /
            night
          </div>
        </div>
      </section>
    </li>
  </template>
  
  <script>
  import imgUploader from "../cmps/ImgUploader.vue";
  export default {
    name: "StayPreview",
    props: {
      stay: {
        type: Object,
      },
    },
    methods: {
      goToDeatails() {
        this.$router.push(`/stay/${this.stay._id}`);
        window.scrollTo(0, 0);
      },
    },
    computed: {
    
      getStayName() {
        return this.stay.name.slice(0,38)
      },
      isLiked() {
        return this.liked ? "isLiked" : "";
      },
    },
    components: {
      imgUploader,
    },
  };
  </script>
  
  <style></style>