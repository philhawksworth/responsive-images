module.exports = (data) =>
`<picture>
  <source srcset="${data.src}?nf_resize=fit&w=800 media="(min-width: 1000px)">
  <source srcset="${data.src}?nf_resize=fit&w=600" media="(min-width: 600px)">
  <source srcset="${data.src}?nf_resize=fit&w=360" media="(min-width: 400px)">
  <img src="${data.src}?nf_resize=fit&w=280" alt="${data.alt}" />
</picture>`;
