<script lang="ts">
  import * as Breadcrumb from "@/components/ui/breadcrumb/index";

  let { current }: { current: string } = $props();
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="/" aria-label="Home"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
          /></svg
        ></Breadcrumb.Link
      >
    </Breadcrumb.Item>
    <Breadcrumb.Separator />
    {#if current}
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/projects/1">Projects</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page>{current}</Breadcrumb.Page>
      </Breadcrumb.Item>
    {:else}
      <Breadcrumb.Item>
        <Breadcrumb.Page>Projects</Breadcrumb.Page>
      </Breadcrumb.Item>
    {/if}
  </Breadcrumb.List>
</Breadcrumb.Root>
