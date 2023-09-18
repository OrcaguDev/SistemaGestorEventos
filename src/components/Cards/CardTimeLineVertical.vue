<template>
  <div id="app">
    <Timeline
      :timeline-items="dataTimeline"
      :message-when-no-items="messageWhenNoItems"
      :unique-year="true"
      :show-day-and-month="true"
      order="desc"
    />
  </div>
</template>

<script>
import Timeline from "timeline-vuejs";

export default {
  components: {
    Timeline
  },
  data: () => ({
    messageWhenNoItems: "No hay nada que mostrar",
    dataTimeline: [
      {
        from: new Date(2023, 9, 22),
        title: "Registro",
        showDayAndMonth: true,
        description:
          ""
      },
      {
        from: new Date(2023, 9, 23),
        title: "Inscripciones",
        description:
          ""
      },
      {
        from: new Date(2023, 9, 23),
        title: "N° Inscripciones",
        description:
          ""
      },
      {
        from: new Date(2023, 9, 23),
        title: "Name",
        description:
          ""
      },
      {
        from: new Date(2023, 9, 23),
        title: "Name",
        description:
          ""
      },
      {
        from: new Date(2023, 9, 23),
        title: "Name",
        description:
          ""
      },
      {
        from: new Date(2023, 9, 23),
        title: "Name",
        description:
          ""
      },
      {
        from: new Date(2023, 9, 23),
        title: "Name",
        description:
          ""
      },
      {
        from: new Date(2023, 9, 23),
        title: "Name",
        description:
          ""
      },
    ]
  })
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
