<script>
 import { createEventDispatcher } from 'svelte';
 export let text = '';
 export let color = '#c80';
 const dispatch = createEventDispatcher();

 function handleClick() {
  dispatch('click');
 }

 function handleKey(event) {
  if (event.key === 'Enter' || event.key === ' ') {
   event.preventDefault();
   dispatch('click');
  }
 }
</script>

<style>
 span {
  font-weight: bold;
  cursor: pointer;
 }
</style>

<span class="link" style="color: {color}" role="button" tabindex="0" on:click={handleClick} on:keydown={handleKey}>{text}</span>
