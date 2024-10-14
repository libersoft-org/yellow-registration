<script>
 import Form from '../components/form.svelte';
 import Field from '../components/form-field.svelte';
 import Input from '../components/input.svelte';
</script>

<style>
 .form {
  display: flex;
  flex-direction: column;
  gap: 10px;
 }
</style>

<Form>
 <div>Your phone number: <span class="bold">+123 123 123 123</span></div>
 <Field label="Code from SMS">
  <Input type="text" placeholder="Code from SMS" />
 </Field>
</Form>
