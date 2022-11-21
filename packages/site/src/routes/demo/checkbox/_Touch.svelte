<FormField>
  <Checkbox bind:checked touch />
  <span slot="label">Remember me.</span>
</FormField>

<pre class="status">Checked: {checked}</pre>

<script lang="ts">
  import Checkbox from '@detachhead/smui-checkbox';
  import FormField from '@detachhead/smui-form-field';

  let checked = false;
</script>
