<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
  @import url("./static/css/common.scss");
  image {
    width: 100%;
    height: 100%;
  }
  view,textarea {
    box-sizing: border-box;
  }
  page {
    background-color: #F6F6F6;
  }
</style>
