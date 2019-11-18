
<template>
	<div class="about">
		<h1>Posts Page</h1>
	</div>
</template>

<script>
import { mapState} from 'vuex';

export default {
	mounted() {
		setTimeout(() => {
			this.$store.commit('SET_TEST_STATE2', []);
		}, 100);
	}
}

</script>