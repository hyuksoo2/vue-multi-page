<template>
	<div class="home">
		<hello-world msg="Welcome to your Page1 Home"/>
	</div>
</template>

<script>
import HelloWorld from '@/page1/components/HelloWorld.vue';
import { mapState} from 'vuex';

export default {
	components: {
		HelloWorld
	},
	mounted() {
		setTimeout(() => {
			this.$store.commit('SET_TEST_STATE1', '1');
		}, 100);
	}
}

</script>