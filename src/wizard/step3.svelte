<script>
 import Form from '../components/form.svelte';
 import Field from '../components/form-field.svelte';
 import Input from '../components/input.svelte';
 import Select from '../components/select.svelte';
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
</script>

<Form>
 <Field label="Username">
  <Input type="text" placeholder="Username" />
  <Select>
   <option value="">- Domain -</option>
   {#each domains as d (d.id)}
    <option value={d.id}>{d.name}</option>
   {/each}
  </Select>
 </Field>
 <Field label="Password">
  <Input type="password" placeholder="Password" />
 </Field>
 <Field label="Password again">
  <Input type="password" placeholder="Password again" />
 </Field>
</Form>
