<script>
 import { onMount } from 'svelte';
 import Form from '../components/form.svelte';
 import Field from '../components/form-field.svelte';
 import Link from '../components/link.svelte';
 import Modal from '../components/modal.svelte';
 import ModalTerms from '../components/modal-terms.svelte';
 import Input from '../components/input.svelte';
 import Select from '../components/select.svelte';
 import Checkbox from '../components/checkbox.svelte';
 let countries = [];
 let terms = false;
 let showModalTerms = false;

 onMount(async () => {
  try {
   const res = await fetch('countries.json');
   if (res.ok) countries = await res.json();
   else console.error('Error while loading the JSON file:', res.statusText);
  } catch (ex) {
   console.error('Error while fetching file:', ex);
  }
 });

 function clickTerms() {
  showModalTerms = true;
 }
</script>

<Form>
 <Field label="Phone number">
  <Select>
   <option value="">- Country code -</option>
   {#each countries as c, index}
    <option value={index}>{c.flag} ({c.code}) {c.dial_code}</option>
   {/each}
  </Select>
  <Input type="text" placeholder="Phone number" />
 </Field>
 <Checkbox bind:checked={terms}>
  <div>I agree with <Link text="terms and conditions" on:click={clickTerms} /></div>
 </Checkbox>
</Form>
<Modal title="Terms and conditions" body={ModalTerms} bind:show={showModalTerms} />
