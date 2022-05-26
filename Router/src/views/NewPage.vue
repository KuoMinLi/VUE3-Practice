<template>
  <div class="newpage">
    <div class="row">
      <div class="col-4">
        <div class="list-group">
          <router-link  to="/newpage/a" class="list-group-item list-group-item-action " >
            元件A
          </router-link>
          <router-link to="/newpage/b" class="list-group-item list-group-item-action " >
            元件B
          </router-link>
          <router-link to="/newpage/namedView/c2a" class="list-group-item list-group-item-action " >
            元件c2a
          </router-link>
          <router-link to="/newpage/namedView/a2b" class="list-group-item list-group-item-action " >
            元件a2b
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
