var worksTemplate = `<ul class="works">
  {{#works}}
    <li class="work" data-logo="/images/logos/{{{ client }}}.png" style="background-image: url('/images/work/thumbs/{{{ previewImage }}}')">
    </li>
  {{/works}}
</ul>`

export default worksTemplate 
