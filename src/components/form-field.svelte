<script>
 export let label = '';
</script>

<style>
 .group {
  display: flex;
  flex-direction: column;
  gap: 3px;
 }

 .group .label {
  padding-left: 5px;
  font-weight: bold;
 }

 .group .field {
  display: flex;
  padding: 5px;
  border: 1px solid #888;
  border-radius: 10px;
  background-color: #fff;
 }
</style>

<div class="group">
 <div class="label">{label}:</div>
 <div class="field">
  <slot></slot>
 </div>
</div>
