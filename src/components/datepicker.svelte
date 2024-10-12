<script>
 export let close;
 close = null;
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

 select {
  flex-grow: 1;
  padding: 5px;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  background-color: #fff;
  cursor: pointer;
 }
</style>

<div class="datepicker">
 <select bind:value={day}>
  <option value="" disabled selected>- Day -</option>
  {#each days as d}
   <option value={d}>{d}</option>
  {/each}
 </select>
 <select bind:value={month}>
  <option value="" disabled selected>- Month -</option>
  {#each months as m}
   <option value={m.value}>{m.name}</option>
  {/each}
 </select>
 <select bind:value={year}>
  <option value="" disabled selected>- Year -</option>
  {#each years as y}
   <option value={y}>{y}</option>
  {/each}
 </select>
</div>
