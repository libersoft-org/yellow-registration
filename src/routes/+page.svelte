<script>
 import { onMount } from 'svelte';
 import '../app.css';
 const product = 'Yellow';
 const link = 'https://yellow.libersoft.org';

 onMount(() => {});

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
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/img/background.webp') repeat;
  background-size: 400px;
 }

 .form {
  border: 1px solid #000;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: var(--shadow);
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

 .status {
  z-index: 1000;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
  font-weight: bold;
 }

 .status.info {
  color: #080;
  background-color: #dfd;
  border: 1px solid #080;
 }

 .status.error {
  color: #800;
  background-color: #fdd;
  border: 1px solid #800;
 }

 .status .panel {
  display: flex;
  justify-content: right;
  height: 20px;
 }

 .status .panel.info {
  background-color: #080;
 }

 .status .panel.error {
  background-color: #800;
 }

 .status .panel .close {
  display: flex;
  padding: 5px;
  cursor: pointer;
 }

 .status .panel .close img {
  width: 10px;
  height: 10px;
 }

 .status .text {
  padding: 10px;
 }
</style>

<svelte:head>
 <title>{product} - registration</title>
</svelte:head>

<div class="app">
 <div class="form">
  <div class="logo" role="button" tabindex="0" on:click={clickHomepage} on:keydown={keyHomepage}>
   <div><img src="img/logo.svg" alt={product} /></div>
   <div class="title">{product}</div>
  </div>
 </div>
 <div class="status">aaa</div>
</div>
