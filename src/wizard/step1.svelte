<script>
 import { onMount } from 'svelte';
 import Field from '../components/form-field.svelte';
 import Link from '../components/link.svelte';
 import Modal from '../components/modal.svelte';
 import ModalTerms from '../components/modal-terms.svelte';
 import Datepicker from '../components/datepicker.svelte';
 let countries = [];
 let domains = [
  {
   id: 1,
   name: 'domain1.tld',
  },
  {
   id: 2,
   name: 'domain2.tld',
  },
 ];
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
  console.log('KLIK');
  showModalTerms = true;
 }
</script>

<style>
 .form {
  display: flex;
  flex-direction: column;
  gap: 10px;
 }

 select,
 input {
  display: flex;
  flex-grow: 1;
  border: 0;
  outline: 0;
  font-family: inherit;
  font-size: inherit;
  background-color: #fff;
 }

 select {
  cursor: pointer;
 }
</style>

<div class="form">
 <Field label="Phone number">
  <select>
   <option value="">- Country code -</option>
   {#each countries as c, index}
    <option value={index}>{c.flag} {c.dial_code} ({c.code})</option>
   {/each}
  </select>
  <input type="text" placeholder="Phone number" />
 </Field>
 <Field label="Username">
  <input type="text" placeholder="Username" />
  <select>
   <option value="">- Domain -</option>
   {#each domains as d (d.id)}
    <option value={d.id}>{d.name}</option>
   {/each}
  </select>
 </Field>
 <Field label="First name">
  <input type="text" placeholder="First name" />
 </Field>
 <Field label="Last name">
  <input type="text" placeholder="Last name" />
 </Field>
 <Field label="Gender">
  <select>
   <option value="">--- Select your gender ---</option>
   <option value="1">Male</option>
   <option value="0">Female</option>
  </select>
 </Field>
 <Field label="Birth date">
  <Datepicker />
 </Field>
 <Field label="Password">
  <input type="text" placeholder="Password" />
 </Field>
 <Field label="Password again">
  <input type="text" placeholder="Password again" />
 </Field>
 <label>
  <input name="terms" type="checkbox" bind:checked={terms} />
  I agree with <Link text="terms and conditions" on:click={clickTerms} />
 </label>
</div>
<Modal title="Terms and conditions" body={ModalTerms} bind:show={showModalTerms} />
