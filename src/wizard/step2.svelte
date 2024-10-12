<script>
 import Field from '../components/form-field.svelte';
</script>

<style>
 .form {
  display: flex;
  flex-direction: column;
  gap: 10px;
 }

 input {
  display: flex;
  flex-grow: 1;
  border: 0;
  outline: 0;
  font-family: inherit;
  font-size: inherit;
  background-color: #fff;
 }
</style>

<div class="form">
 <div>Your phone number: <span class="bold">+123 123 123 123</span></div>
 <Field label="Code from SMS">
  <input type="text" placeholder="Code from SMS" />
 </Field>
</div>
