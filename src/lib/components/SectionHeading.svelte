<script lang="ts">
  export let number: string;
  export let title: string;
  export let eyebrow: string;
</script>

<header class="section-heading">
  <span class="section-number">{number}</span>
  <div>
    <p class="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
  </div>
</header>
