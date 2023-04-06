  <template>
    <section>
   <FilterList />
  <main class="home-page main-layout">
    <stay-list
      :stays="stays"
      v-if="stays"
      @stayLiked="setLiked"
    >
    </stay-list>
  </main>
  <login-modal
      v-if="modalLoginIsOpen"
      @login="setLogin"
      @closeLoginModal="closeLoginModal"
    />
</section>

</template>

<script>
import appHeader from "../cmps/AppHeader.vue";
import stayList from "../cmps/StayList.vue";
import FilterList from "../cmps/FilterList.vue";
import loginModal from "../cmps/login-modal.vue";



export default {
  name: "StayIndex",
  data() {
    return {
      modalLoginIsOpen: false,
      isLiked: false,
    };
  },

  // created() {
  //   this.$store.dispatch({ type: 'loadStaysLikedUser' })
  // },
  computed: {
    stays() {
      return this.$store.getters.stays
    },
  },
  methods: {
    getStay({ stayId }) {
      this.$router.push('/stay/' + stayId)
    },
    openModalLogin() {
      this.modalLoginIsOpen = true;
    },
    closeLoginModal() {
      this.modalLoginIsOpen = false;
    },
    setLogin(user) {
      this.$store.dispatch({
        type: "login",
        userCred: user,
      });
      this.modalLoginIsOpen = false;
    },
    setLiked(stay) {
      this.$store.dispatch({
        type: "setLikedStay",
        stayId: JSON.parse(JSON.stringify(stay)),
      });
    }
  },
  components: {
    appHeader,
    FilterList,
    stayList,
    loginModal

  },
};
</script>
