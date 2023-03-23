<template>
    <li class="stay-preview-container" >
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
    }
  }

    
   
  </script>
  
  <style></style>