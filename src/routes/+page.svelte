<script>
 import '../app.css';
 import Registration from '../pages/registration.svelte';
 const product = 'Yellow';
 const link = 'https://yellow.libersoft.org';

 function clickHomepage() {
  window.open(link, '_blank');
 }

 function keyHomepage() {
  if (event.key === 'Enter' || event.key === ' ') {
   event.preventDefault();
   click();
  }
 }
</script>

<style>
 .app {
  display: flex;
  flex-direction: column;
  height: 100vh;
 }

 .page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: url('/img/background.webp') repeat;
  background-size: 400px;
  overflow: auto;
 }

 .form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid #555;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: var(--shadow);
  overflow: auto;
 }

 .form .logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
 }

 .form .logo img {
  display: block;
  width: 50px;
  height: 50px;
 }

 .form .logo .title {
  font-size: 30px;
  font-weight: bold;
 }

 .form .description {
  width: 100%;
  padding: 5px 0;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  background-color: #fd1;
  border-radius: 10px;
 }

 .status {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 40px;
  padding: 0 10px;
  background-color: #222;
  color: #fff;
  box-shadow: var(--shadow);
 }

 .status .indicator {
  width: 15px;
  height: 15px;
  border-radius: 50%;
 }

 .status .indicator.green {
  background-color: #0f0;
 }

 .status .indicator.red {
  background-color: #f00;
 }
</style>

<svelte:head>
 <title>{product} - account registration</title>
</svelte:head>

<div class="app">
 <div class="page">
  <div class="form">
   <div class="logo" role="button" tabindex="0" on:click={clickHomepage} on:keydown={keyHomepage}>
    <div><img src="img/logo.svg" alt={product} /></div>
    <div class="title">{product}</div>
   </div>
   <div class="description">Account registration</div>
   <Registration />
  </div>
 </div>
 <div class="status">
  <div class="indicator red"></div>
  <div>Disconnected</div>
 </div>
</div>
