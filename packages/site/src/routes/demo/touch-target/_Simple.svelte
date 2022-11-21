<div style="display: flex; flex-wrap: wrap; align-items: center;">
  <Wrapper>
    <Button on:click={() => clicked++} touch>
      <Label>Button</Label>
    </Button>
  </Wrapper>
  <Wrapper>
    <IconButton on:click={() => clicked++} touch>
      <Icon class="material-icons">favorite</Icon>
    </IconButton>
  </Wrapper>
  <Wrapper>
    <Fab on:click={() => clicked++} mini touch>
      <Icon class="material-icons">favorite</Icon>
    </Fab>
  </Wrapper>
  <Wrapper>
    <Set chips={['Chip']} let:chip style="display: inline-flex;">
      <Chip {chip} on:click={() => clicked++} touch>
        <Text tabindex={0}>{chip}</Text>
      </Chip>
    </Set>
  </Wrapper>
  <Wrapper>
    <Checkbox bind:checked touch />
  </Wrapper>
  <Wrapper>
    <Radio bind:group={selected} value={'on'} touch />
  </Wrapper>
  <Wrapper>
    <Radio bind:group={selected} value={'off'} touch />
  </Wrapper>
  <Wrapper>
    <Switch bind:checked={switchChecked} />
  </Wrapper>
</div>

<pre
  class="status">Clicked: {clicked}, Checked: {checked}, Selected: {selected}, Switched: {switchChecked}</pre>

<script lang="ts">
  import Wrapper from '@detachhead/smui-touch-target';
  import Button from '@detachhead/smui-button';
  import IconButton from '@detachhead/smui-icon-button';
  import Fab from '@detachhead/smui-fab';
  import Chip, { Set, Text } from '@detachhead/smui-chips';
  import Checkbox from '@detachhead/smui-checkbox';
  import Radio from '@detachhead/smui-radio';
  import Switch from '@detachhead/smui-switch';
  import { Label, Icon } from '@detachhead/smui-common';

  let clicked = 0;
  let checked = false;
  let selected = 'on';
  let switchChecked = false;
</script>
