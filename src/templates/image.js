module.exports = (data) =>
`<picture>
  <source srcset="${data.src}?nf_resize=fit&w=1200 media="(min-width: 1200px)">
  <source srcset="${data.src}?nf_resize=fit&w=700" media="(min-width: 700px)">
  <source srcset="${data.src}?nf_resize=fit&w=300" media="(min-width: 300px)">
  <img src="${data.src}?nf_resize=fit&w=600" alt="${data.alt}" />
</picture>`;
