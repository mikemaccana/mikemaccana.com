var modalTemplate = `<img class="close" src="/images/icons/close.png"/>
<h1>{{ title }}</h1>
<div class="screenshot-container">
  <div class="screenshots">
    {{#screenshots:index}}
      <a class="screenshot" href="/images/work/screenshots/{{slug}}-{{index}}.{{imageExtension}}" target="_blank">
        <img src="/images/work/screenshots/{{slug}}-{{index}}.{{imageExtension}}">
      </a>
    {{/screenshots}}
  </div>
</div>
<div class="description">{{{ description }}}</div>`

export default modalTemplate