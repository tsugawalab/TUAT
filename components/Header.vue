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
            <li>
              <div class="topMenu-Unselect">
                <NuxtLink to="/research"><b>Research</b></NuxtLink>
              </div>
            </li>
            <li>
              <div class="topMenu-Unselect">
                <NuxtLink to="/member"><b>Member</b></NuxtLink>
              </div>
            </li>
            <li>
              <div class="topMenu-Unselect">
                <NuxtLink to="/publication"><b>Publication</b></NuxtLink>
              </div>
            </li>
            <li>
              <div class="topMenu-Unselect">
                <a href="http://prime.psc.riken.jp/compms/msdial/main.html"><b>Software</b></a>
              </div>
            </li>
            <li>
              <div class="topMenu-Unselect">
                <NuxtLink to="/news"><b>NEWS</b></NuxtLink>
              </div>
            </li>
            <li>
              <div class="topMenu-Unselect">
                <NuxtLink to="/lecture"><b>Lecture</b></NuxtLink>
              </div>
            </li>
            <li>
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

/*
######################################################################
Common - Footer : Layout
######################################################################
*/
#sectionFooter {
  margin-top: 2em;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
  font-size: 93%;
}

#areaLogo-RIKEN {
  padding-right: 1.5em;
  max-width: 62px;
}

#imageLogo-RIKEN {
  width: 100%;
  height: auto;
}

#areaLogo-CSRS {
  padding-right: 1.5em;
  max-width: 111.3px;
}

#imageLogo-CSRS {
  width: 100%;
  height: auto;
}

#areaLogo-PRIMe {
  padding-right: 1.5em;
  max-width: 215.5px;
}

#imageLogo-PRIMe {
  width: 100%;
  height: auto;
}

#imageLogo-CCL {
  margin-right: 2.5em;
  margin-left: 2.5em;
  width: 88px;
  height: 31px;
}
</style>