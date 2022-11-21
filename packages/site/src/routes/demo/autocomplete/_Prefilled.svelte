<div>
  <Autocomplete options={fruits} bind:value label="Fruit" />
  <pre class="status">Selected: {value || ''}</pre>
</div>

<script lang="ts">
  import Autocomplete from '@detachhead/smui-extra-autocomplete';

  let fruits = ['Apple', 'Orange', 'Banana', 'Mango'];

  let value = 'Orange';
</script>
