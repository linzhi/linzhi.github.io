---
layout: home
---

<div class="index-content blog">
  <div class="section">
    <ul class="home-head">
        <li class="on"><a href="/"><span>世界的記憶</span></a></li>
    </ul>
  </div>

  <div class="divider"></div>
  <div class="home-head-summary">TEST</div>
  <ul class="artical-list">
  {% for post in site.categories.blog %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <div class="title-desc">{{ post.description }}</div>
    </li>
  {% endfor %}
  </ul>

  <div class="aside"></div>

</div>


