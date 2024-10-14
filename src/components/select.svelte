<script>
 export let value = '';
</script>

<style>
 select {
  display: flex;
  flex-grow: 1;
  padding: 0 10px;
  border: 0;
  outline: 0;
  font-family: inherit;
  font-size: inherit;
  border-radius: 5px;
  background-color: #eee;
  cursor: pointer;
  text-align: center;
 }
</style>

<select {value}>
 <slot></slot>
</select>
