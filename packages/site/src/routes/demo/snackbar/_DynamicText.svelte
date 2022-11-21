<Snackbar bind:this={snackbar} labelText={text} timeoutMs={-1}>
  <Label />
  <Actions>
    <IconButton class="material-icons" title="Dismiss">close</IconButton>
  </Actions>
</Snackbar>

<Textfield bind:value={text} label="Dynamic Text" required />

<Button on:click={() => snackbar && snackbar.open()}>
  <Label>Open Snackbar</Label>
</Button>

<script lang="ts">
  import Snackbar, { Actions, Label } from '@detachhead/smui-snackbar';
  import Button from '@detachhead/smui-button';
  import IconButton from '@detachhead/smui-icon-button';
  import Textfield from '@detachhead/smui-textfield';

  let snackbar: Snackbar;
  let text = 'This is a snackbar with dynamic text.';
</script>
