<script>
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 10,
      center: [39.73, -104.99],
      tileProviders: [
        {
          name: 'OpenStreetMap',
          visible: true,
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        },
        {
          name: 'OpenTopoMap',
          visible: false,
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
          attribution:
            'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        },
      ],
    };
  }
};
</script>

<template>
  <l-map style="height: 400px" :zoom="zoom" :center="center">
    <l-control-layers position="topright"></l-control-layers>
    <l-tile-layer v-for="tileProvider in tileProviders" :key="tileProvider.name" :name="tileProvider.name"
      :visible="tileProvider.visible" :url="tileProvider.url" :attribution="tileProvider.attribution" layer-type="base" />
    <l-marker :lat-lng="[39.61, -105.02]"></l-marker>
    <l-marker :lat-lng="[39.63, -105.09]"></l-marker>
    <l-marker :lat-lng="[39.74, -104.99]"></l-marker>
    <l-marker :lat-lng="[39.77, -105.01]"></l-marker>
    <l-marker :lat-lng="[39.90, -105.03]"></l-marker>
    <l-marker :lat-lng="[39.96, -105.04]"></l-marker>
    <l-marker :lat-lng="[39.73, -104.8]"></l-marker>
    <l-marker :lat-lng="[39.70, -104.9]"></l-marker>
    <l-marker :lat-lng="[39.77, -105.23]"></l-marker>
    <l-marker :lat-lng="[39.80, -105.01]"></l-marker>
    <l-marker :lat-lng="[39.95, -105.09]"></l-marker>
  </l-map>
</template>