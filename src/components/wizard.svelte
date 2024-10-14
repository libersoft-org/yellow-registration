<script>
 import Button from './button.svelte';
 export let steps = [];
 export let product = null;
 export let logo = null;
 export let description;
 export let link;
 let finish;
 let currentStep = 0;

 function clickHomepage() {
  window.open(link, '_blank');
 }

 function keyHomepage() {
  if (event.key === 'Enter' || event.key === ' ') {
   event.preventDefault();
   click();
  }
 }

 function nextStep() {
  if (currentStep < steps.length - 1) currentStep += 1;
 }

 function prevStep() {
  if (currentStep > 0) currentStep -= 1;
 }

 function finished() {
  finish = true;
 }
</script>

<style>
 .wizard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  max-width: calc(100% - 20px);
  max-height: calc(100% - 20px);
  padding: 10px;
  margin: 10px;
  overflow: auto;
  border: 1px solid #555;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: var(--shadow);
 }

 .logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
 }

 .logo img {
  display: block;
  width: 50px;
  height: 50px;
 }

 .logo .title {
  font-size: 30px;
  font-weight: bold;
 }

 .description {
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
 }

 .progress-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
 }

 .progress-bar .step {
  display: flex;
  align-items: center;
 }

 .progress-bar .step .circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #888;
  border-radius: 50%;
  background-color: #ccc;
  text-align: center;
 }

 .progress-bar .step .circle.active {
  border: 1px solid #d80;
  background-color: #fd3;
  color: #000;
 }

 .progress-bar .step .line {
  width: 50px;
  height: 2px;
  background-color: #ccc;
 }

 .navigation {
  display: flex;
  gap: 10px;
  width: 100%;
 }

 .navigation .gap {
  flex-grow: 1;
 }

 .finish {
  padding: 10px;
  border: 1px solid #080;
  border-radius: 10px;
  background-color: #efe;
 }
</style>

{#if steps.length > 0}
 <div class="wizard">
  {#if logo || product}
   <div class="logo" role="button" tabindex="0" on:click={clickHomepage} on:keydown={keyHomepage}>
    {#if logo}
     <div><img src="img/logo.svg" alt={product} /></div>
    {/if}
    {#if product}
     <div class="title">{product}</div>
    {/if}
   </div>
  {/if}
  {#if description}
   <div class="description">{description}</div>
  {/if}
  {#if !finish}
   <div class="progress-bar">
    {#each steps as step, index}
     <div class="step">
      <div class="circle {index === currentStep ? 'active' : ''}">
       {index + 1}
      </div>
      {#if index < steps.length - 1}
       <div class="line"></div>
      {/if}
     </div>
    {/each}
   </div>
   <div class="content">
    <svelte:component this={steps[currentStep]} />
   </div>
   <div class="navigation">
    {#if currentStep > 0}
     <Button on:click={prevStep} text="Previous" />
    {/if}
    <div class="gap"></div>
    {#if currentStep < steps.length - 1}
     <Button on:click={nextStep} text="Next" />
    {:else}
     <Button on:click={finished} text="Finish" />
    {/if}
   </div>
  {:else}
   <div class="finish">Registration completed successfully.</div>
  {/if}
 </div>
{/if}
