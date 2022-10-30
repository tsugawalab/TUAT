<template>
  <div class="container" id="sectionNavigation">
    <div class="row">
      <div class="col span_24">
        <nav>
          <ul class="topMenus">
            <li>
              <NuxtLink to="/"
                ><img
                  class="imageLogo-cms"
                  alt="CompMS Home"
                  src="~/assets/images/imageHome.png"
              /></NuxtLink>
            </li>
            <li class="icon research">
              <div class="topMenu-Unselect">
                <NuxtLink to="/research"><b>Research</b></NuxtLink>
              </div>
            </li>
            <li class="icon member">
              <div class="topMenu-Unselect">
                <NuxtLink to="/member"><b>Member</b></NuxtLink>
              </div>
            </li>
            <li class="icon publication">
              <div class="topMenu-Unselect">
                <NuxtLink to="/publication"><b>Publication</b></NuxtLink>
              </div>
            </li>
            <li class="icon software">
              <div class="topMenu-Unselect">
                <a
                  href="http://prime.psc.riken.jp/compms/msdial/main.html"
                  target="_blank"
                  rel="noopener"
                  ><b>Software</b></a>
              </div>
            </li>
            <li class="icon news">
              <div class="topMenu-Unselect">
                <NuxtLink to="/news"><b>NEWS</b></NuxtLink>
              </div>
            </li>
            <li class="icon lecture">
              <div class="topMenu-Unselect">
                <NuxtLink to="/lecture"><b>Lecture</b></NuxtLink>
              </div>
            </li>
            <li class="icon contact">
              <div class="topMenu-Unselect">
                <NuxtLink :to="{ path: '/', hash:'#contact'}"><b>Contact</b></NuxtLink>
              </div>
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
  justify-content: left;
  align-items: center;
}

.icon {
  display: flex;
  align-items: center;
}

.icon a:before {
  font-family: "Awesome";
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

.topMenus a {
  display: block;
  text-decoration: none;
}

.topMenus .subMenus:before {
  font-size: 2em;
  position: absolute;
  top: 0.25em;
  left: 10px;
  content: "";
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

@media (min-width: 768px) {
  .topMenus .subMenus {
    position: absolute;
    width: 300px;
  }
}

.topMenu-State {
  margin-right: 0.5em;
  font-family: "Awesome";
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

/* #### Menu Selecter #### */
.topMenu-Select,
.topMenu-Unselect {
  margin-right: 0.5em;
  margin-left: 0.5em;
  padding-top: 0.1em;
  padding-right: 2em;
  padding-bottom: 0.1em;
  padding-left: 3em;
  width: 100%;
}

.topMenu-Unselect {
  color: #0b5fa5;
}

@media screen and (max-width: 1700px) {
  .topMenu-Uselect,
  .topMenu-Unselect {
    font-size: 93%;
  }
}

@media screen and (max-width: 1300px) {
  .topMenu-Uselect,
  .topMenu-Unselect {
    font-size: 77%;
  }
}
</style>