module.exports = (data) =>
`<img srcset="${data.src}?nf_resize=fit&w=320 320w,
             ${data.src}?nf_resize=fit&w=480 480w,
             ${data.src}?nf_resize=fit&w=800 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="${data.src}?nf_resize=fit&w=480" alt="${data.alt}"></img>`;
