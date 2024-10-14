<script>
 import '../app.css';
 import Wizard from '../components/wizard.svelte';
 import WizardStep1 from '../wizard/step1.svelte';
 import WizardStep2 from '../wizard/step2.svelte';
 import WizardStep3 from '../wizard/step3.svelte';
 import WizardStep4 from '../wizard/step4.svelte';
 const product = 'Yellow';
 const link = 'https://yellow.libersoft.org';
 const wizardSteps = [WizardStep1, WizardStep2, WizardStep3, WizardStep4];
</script>

<style>
 .app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  background: url('/img/background.webp') repeat;
  background-size: 400px;
 }
</style>

<svelte:head>
 <title>{product} - account registration</title>
</svelte:head>

<div class="app">
 <Wizard steps={wizardSteps} logo="img/logo.svg" {product} {link} description="Account registration" />
</div>
