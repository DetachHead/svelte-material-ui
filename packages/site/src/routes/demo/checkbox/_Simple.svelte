<div>
  <FormField>
    <Checkbox bind:checked />
    <span slot="label">Remember me.</span>
  </FormField>
</div>

<pre class="status">Checked: {checked}</pre>

<div style="margin-top: 1em;">
  <FormField align="end">
    <Checkbox bind:checked={checked2} />
    <span slot="label">Remember me.</span>
  </FormField>
</div>

<div style="margin-top: 1em;">
  <Button on:click={() => (checked2 = !checked2)}>
    Toggle Programmatically
  </Button>
</div>

<pre class="status">Checked: {checked2}</pre>

<script lang="ts">
  import Checkbox from '@detachhead/smui-checkbox';
  import FormField from '@detachhead/smui-form-field';
  import Button from '@detachhead/smui-button';

  let checked = false;
  let checked2 = false;
</script>
