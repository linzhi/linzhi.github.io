---
layout: home
---

<section class="index-content blog">
  <ui class="home-head">
    <h1 class="home-head-title">
      <a href="/"><span>世界的記憶</span></a>
    </h1>
    <!--
        <li style="text-align:right"><a href="/test"><span>Love</span></a></li>
    -->
    <div class="divider"></div>
    <div class="home-head-summary">TEST</div>
  </ui>

  <ul class="artical-list">
  {% for post in site.categories.blog %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <div class="title-desc">{{ post.description }}</div>
    </li>
  {% endfor %}
  </ul>

  <div class="aside"></div>

</section>


