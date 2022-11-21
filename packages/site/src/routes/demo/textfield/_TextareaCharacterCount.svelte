<div class="margins">
  <Textfield textarea input$maxlength={100} bind:value label="Label">
    <CharacterCounter slot="internalCounter">0 / 100</CharacterCounter>
  </Textfield>
</div>

<script lang="ts">
  import Textfield from '@detachhead/smui-textfield';
  import CharacterCounter from '@detachhead/smui-textfield/character-counter';

  let value = '';
</script>
