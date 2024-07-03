<template>
  <div id="sectionNavigation" class="container">
    <div class="row">
      <div class="col span_24">
        <nav>
          <ul class="topMenus">
            <li>
              <NuxtLink :to="localePath('/')"
                ><img
                  class="imageLogo-cms"
                  alt="CompMS Home"
                  src="~/assets/images/imageHome.png"
              /></NuxtLink>
            </li>
            <li class="icon research">
              <div class="topMenu-Unselect">
                <NuxtLink :to="localePath('/research')"><b>Research</b></NuxtLink>
              </div>
            </li>
            <li class="icon member">
              <div class="topMenu-Unselect">
                <NuxtLink :to="localePath('/member')"><b>Member</b></NuxtLink>
              </div>
            </li>
            <li class="icon publication">
              <div class="topMenu-Unselect">
                <NuxtLink :to="localePath('/publication')"><b>Publication</b></NuxtLink>
              </div>
            </li>
            <li class="icon software">
              <div class="topMenu-Unselect">
                <a
                  href="https://systemsomicslab.github.io/compms/msdial/main.html"
                  target="_blank"
                  rel="noopener"
                  ><b>Software</b></a
                >
              </div>
            </li>
            <li class="icon news">
              <div class="topMenu-Unselect">
                <NuxtLink :to="localePath('/news?page=1')"><b>News</b></NuxtLink>
              </div>
            </li>
            <li class="icon lecture">
              <div class="topMenu-Unselect">
                <NuxtLink :to="localePath('/lecture')"><b>Lecture</b></NuxtLink>
              </div>
            </li>
            <li class="icon contact">
              <div class="topMenu-Unselect">
                <NuxtLink :to="localePath({ path: '/', hash: '#contact' })"
                  ><b>Contact</b></NuxtLink
                >
              </div>
            </li>
            <li class="locale">
              <template v-for="(locale, i) in $i18n.locales">
                <nuxtLink
                  :key="`link${locale.code}`"
                  :to="switchLocalePath(locale.code)"
                  >{{ locale.code.toUpperCase() }}</nuxtLink
                ><!--
             --><span v-if="i === 0" :key="`slash${locale.code}`" class="slash">/</span>
              </template>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
#sectionNavigation {
  position: fixed;
  z-index: 90;
  width: 100%;
  height: 68px;
  background-color: #fffffe;
}

.topMenus {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 30px 8px;
  font-size: 14px;
  padding: 0;
  min-width: 800px;
}

.icon a {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.icon a:before {
  font-family: 'Awesome';
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 4px;
}

.icon.research a:before {
  content: '\f02d';
}
.icon.member a:before {
  content: '\f2b9';
}
.icon.publication a:before {
  content: '\f15c';
}
.icon.software a:before {
  content: '\f095';
}
.icon.news a:before {
  content: '\f4ad';
}
.icon.lecture a:before {
  content: '\f2b9';
}
.icon.contact a:before {
  content: '\f2bd';
}

.topMenus .subMenus:before {
  font-size: 2em;
  position: absolute;
  top: 0.25em;
  left: 10px;
  content: '';
  color: #fffffe;
}

.topMenus .subMenus {
  position: relative;
  z-index: 1;
  display: none;
  width: 100%;
  border-top: none;
}

.topMenus .subMenus li {
  display: block;
  float: none;
  padding: 0;
}

.topMenus li:hover .subMenus {
  display: block;
}

.topMenus .subMenus li a:before {
  color: #fffffe;
}

.topMenus .subMenus li a {
  font-weight: normal;
  margin-left: 10px;
  padding: 10px 30px 10px 10px;
  text-align: left;
  color: #eee;
  background-color: #37616f;
}

.topMenus .subMenus li a:hover {
  background-color: #4696a4;
}

.topMenus li.locale a {
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
}

.topMenus li.locale .slash {
  margin: 0 6px;
}

.topMenus li.locale a.nuxt-link-exact-active {
  color: rgba(0, 0, 0, .3);
  pointer-events: none;
  font-weight: normal;
}

@media (min-width: 768px) {
  .topMenus .subMenus {
    position: absolute;
    width: 300px;
  }
}

.topMenu-State {
  margin-right: 0.5em;
  font-family: 'Awesome';
  font-size: 108%;
}

.imageLogo-cms {
  margin-right: 0.5em;
  width: 48px;
  height: 48px;
}

.imageResearchSlide {
  width: 1200px;
  height: 675px;
}

.topMenu-Unselect {
  color: #0b5fa5;
}
</style>
