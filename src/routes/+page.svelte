<script>
 import { onMount } from 'svelte';
 import '../app.css';
 const product = 'Yellow';
 const link = 'https://yellow.libersoft.org';

 onMount(() => {});

 function click() {
  console.log('CLICK');
 }

 function key() {
  if (event.key === 'Enter' || event.key === ' ') {
   event.preventDefault();
   click();
  }
 }
</script>

<style>
 .app {
  display: flex;
  height: 100vh;
  background: url('/img/background.webp') repeat;
  background-size: 400px;
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
 <title>{product}</title>
</svelte:head>

<div class="app"></div>
