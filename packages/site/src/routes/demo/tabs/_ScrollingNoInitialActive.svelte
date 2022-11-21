<div>
  <TabBar tabs={[...Array(20)].map((_v, i) => i + 1)} let:tab>
    <Tab {tab}>
      <Label>Tab {tab}</Label>
    </Tab>
  </TabBar>
</div>

<script lang="ts">
  import Tab, { Label } from '@detachhead/smui-tab';
  import TabBar from '@detachhead/smui-tab-bar';
</script>
