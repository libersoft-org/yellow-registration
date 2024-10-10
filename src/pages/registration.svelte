<script>
 import Field from '../components/form-field.svelte';
 import Button from '../components/button.svelte';
 const countries = [
  {
   code: '+420',
   flag: '🇨🇿',
  },
 ];
 let terms = false;
</script>

<style>
 .registration {
  display: flex;
  flex-direction: column;
  gap: 10px;
 }

 select,
 input {
  display: flex;
  flex-grow: 1;
  /*border: 1px solid #000;*/
  border: 0;
  outline: 0;
  font-family: inherit;
  font-size: inherit;
  background-color: #fff;
 }
</style>

<div class="registration">
 <Field label="Phone number">
  <select>
   {#each countries as c, index}
    <option value={index}>{c.flag} {c.code}</option>
   {/each}
  </select>
  <input type="text" placeholder="Phone number" />
 </Field>
 <Field label="First name">
  <input type="text" placeholder="First name" />
 </Field>
 <Field label="Last name">
  <input type="text" placeholder="Last name" />
 </Field>
 <Field label="Gender">
  <div class="dropdown"></div>
 </Field>
 <Field label="Birth date">
  <div class="button"></div>
 </Field>
 <Field label="Password">
  <input type="text" placeholder="Password" />
 </Field>
 <Field label="Password again">
  <input type="text" placeholder="Password again" />
 </Field>
 <label>
  <input name="terms" type="checkbox" bind:checked={terms} />
  I agree with terms and conditions
 </label>
 <Button text="Register" />
</div>
