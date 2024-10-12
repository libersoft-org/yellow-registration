<script>
 import '../app.css';
 import Wizard from '../components/wizard.svelte';
 import WizardStep1 from '../wizard/step1.svelte';
 import WizardStep2 from '../wizard/step2.svelte';
 import WizardStep3 from '../wizard/step3.svelte';
 const product = 'Yellow';
 const wizardSteps = [WizardStep1, WizardStep2, WizardStep3];
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
  <Wizard steps={wizardSteps} logo="img/logo.svg" {product} description="Account registration" />
 </div>
 <div class="status">
  <div class="indicator red"></div>
  <div>Disconnected</div>
 </div>
</div>
