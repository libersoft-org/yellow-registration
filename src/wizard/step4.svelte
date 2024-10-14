<script>
 import Form from '../components/form.svelte';
 import Field from '../components/form-field.svelte';
 import Input from '../components/input.svelte';
 import Select from '../components/select.svelte';
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
</script>

<style>
 .datepicker {
  display: flex;
  gap: 5px;
  width: 100%;
 }
</style>

<Form>
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
</Form>
