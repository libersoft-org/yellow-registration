<script>
 export let checked = false;
 export let text = '';
</script>

<style>
 .check {
  display: flex;
  align-items: center;
  gap: 5px;
 }

 .check input {
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: 1px solid #888;
  background-color: #e0e0e0;
  cursor: pointer;
 }

 .check input:checked {
  background-color: #fd1;
 }

 .check input:checked::after {
  content: '✔';
  font-size: 16px;
 }
</style>

<div class="check">
 <div><input type="checkbox" {checked} /></div>
 <slot></slot>
</div>
