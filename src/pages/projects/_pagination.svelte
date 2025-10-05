<script lang="ts">
  import * as Pagination from "@/components/ui/pagination/index";

  let {
    count,
    perPage,
    page,
    lastPage,
  }: { count: number; perPage: number; page: number; lastPage: number } =
    $props();
</script>

<Pagination.Root {count} {perPage} {page}>
  {#snippet children({ pages, currentPage })}
    <Pagination.Content>
      <Pagination.Item>
        {#if page - 1 === 0}
          <Pagination.PrevButton />
        {:else}
          <a href={`/projects/${page - 1}`}>
            <Pagination.PrevButton />
          </a>
        {/if}
      </Pagination.Item>
      {#each pages as page (page.key)}
        {#if page.type === "ellipsis"}
          <Pagination.Item>
            <Pagination.Ellipsis />
          </Pagination.Item>
        {:else}
          <Pagination.Item>
            <a href={`/projects/${page.value}`}>
              <Pagination.Link {page} isActive={currentPage === page.value}>
                {page.value}
              </Pagination.Link>
            </a>
          </Pagination.Item>
        {/if}
      {/each}
      <Pagination.Item>
        {#if page === lastPage}
          <Pagination.NextButton />
        {:else}
          <a href={`/projects/${page + 1}`}>
            <Pagination.NextButton />
          </a>
        {/if}
      </Pagination.Item>
    </Pagination.Content>
  {/snippet}
</Pagination.Root>
