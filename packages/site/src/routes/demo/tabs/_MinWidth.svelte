<div>
  <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
    <Tab {tab} minWidth>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
</div>

<script lang="ts">
  import Tab, { Label } from '@detachhead/smui-tab';
  import TabBar from '@detachhead/smui-tab-bar';

  let active = 'Home';
</script>
