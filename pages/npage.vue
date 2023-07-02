<script lang="ts" setup>
// compiler macro
definePageMeta({
    layout: 'default',
})
useHead(() => ({
    title: 'page',
}))
</script>

<template>
    <PageWrapper>
        <PageHeader>
            <PageTitle text="page" class="capitalize" />
        </PageHeader>
        <PageBody>
            <PageSection>
                <div>PAGE_BODY</div>
            </PageSection>
        </PageBody>
    </PageWrapper>
</template>
