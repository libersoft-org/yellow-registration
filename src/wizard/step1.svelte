<script>
 import { onMount } from 'svelte';
 import Field from '../components/form-field.svelte';
 import Link from '../components/link.svelte';
 import Modal from '../components/modal.svelte';
 import ModalTerms from '../components/modal-terms.svelte';
 import Input from '../components/input.svelte';
 import Select from '../components/select.svelte';
 import Checkbox from '../components/checkbox.svelte';
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
 const days = Array.from({ length: 31 }, (_, i) => i + 1);
 const months = [
  { value: 1, name: 'January' },
  { value: 2, name: 'February' },
  { value: 3, name: 'March' },
  { value: 4, name: 'April' },
  { value: 5, name: 'May' },
  { value: 6, name: 'June' },
  { value: 7, name: 'July' },
  { value: 8, name: 'August' },
  { value: 9, name: 'September' },
  { value: 10, name: 'October' },
  { value: 11, name: 'November' },
  { value: 12, name: 'December' },
 ];
 const currentYear = new Date().getFullYear();
 const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
 let day = '';
 let month = '';
 let year = '';
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

 .datepicker {
  display: flex;
  gap: 5px;
  width: 100%;
 }
</style>

<div class="form">
 <Field label="Phone number">
  <Select>
   <option value="">- Country code -</option>
   {#each countries as c, index}
    <option value={index}>{c.flag} {c.dial_code} ({c.code})</option>
   {/each}
  </Select>
  <Input type="text" placeholder="Phone number" />
 </Field>
 <Field label="Username">
  <Input type="text" placeholder="Username" />
  <Select>
   <option value="">- Domain -</option>
   {#each domains as d (d.id)}
    <option value={d.id}>{d.name}</option>
   {/each}
  </Select>
 </Field>
 <Field label="First name">
  <Input type="text" placeholder="First name" />
 </Field>
 <Field label="Last name">
  <Input type="text" placeholder="Last name" />
 </Field>
 <Field label="Gender">
  <Select>
   <option value="">--- Select your gender ---</option>
   <option value="1">Male</option>
   <option value="0">Female</option>
  </Select>
 </Field>
 <Field label="Birth date">
  <div class="datepicker">
   <Select bind:value={day}>
    <option value="" disabled selected>- Day -</option>
    {#each days as d}
     <option value={d}>{d}</option>
    {/each}
   </Select>
   <Select bind:value={month}>
    <option value="" disabled selected>- Month -</option>
    {#each months as m}
     <option value={m.value}>{m.name}</option>
    {/each}
   </Select>
   <Select bind:value={year}>
    <option value="" disabled selected>- Year -</option>
    {#each years as y}
     <option value={y}>{y}</option>
    {/each}
   </Select>
  </div>
 </Field>
 <Field label="Password">
  <Input type="password" placeholder="Password" />
 </Field>
 <Field label="Password again">
  <Input type="password" placeholder="Password again" />
 </Field>
 <Checkbox bind:checked={terms}>
  <div>I agree with <Link text="terms and conditions" on:click={clickTerms} /></div>
 </Checkbox>
</div>
<Modal title="Terms and conditions" body={ModalTerms} bind:show={showModalTerms} />
